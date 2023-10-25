window.$ = require('jquery')
import { globals, ArkState, ValRef, Null, NativeFn } from '@ursalang/ursa/lib/ark/interp'
import { toJs } from '@ursalang/ursa/lib/ark/ffi'
import { serialize } from '@ursalang/ursa/lib/ark/serialize'
import { compile } from '@ursalang/ursa/lib/ursa/compiler'

function debounce(func, timeout) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), timeout)
  }
}

$(function () {
  const $ursaInput = $("#ursa-input")

  function debouncedUpdate() {
    if ($ursaInput.text().length < 1000) {
      highlightShortDebounce()
    } else {
      highlightLongDebounce()
    }
  }

  $ursaInput.on('input', debouncedUpdate)

  function respondToVisibility(element, callback) {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          callback()
        }
      })
    }, { root: document.documentElement })

    observer.observe(element)
  }

  function evaluate(name) {
    const $input = $(`#${name}-input`)
    const $result = $(`#${name}-result`)
    const $output = $(`#${name}-output`)

    return function () {
      globals.set('print', new ValRef(new NativeFn('print', (_ark, obj) => {
        const output = toJs(obj).toString()
        $output.text(output)
        return Null()
      })))

      try {
        const compiled = compile($input.text())
        highlight($input.attr('id'), "ursa")
        // console.log(serialize(compiled[0]))
        const val = new ArkState().run(compiled)
        $result.html(`<pre>${serialize(val)}</pre>`)
        highlight($result.attr('id'), "json")
      } catch (error) {
        $result.html(`<span class="ursa-error">${error}</span`)
      }
    }
  }

  const evaluateUrsa = evaluate("ursa")

  const highlightShortDebounce = debounce(evaluateUrsa, 50)
  const highlightLongDebounce = debounce(evaluateUrsa, 500)

  respondToVisibility(document.getElementById('ursa-result'), evaluateUrsa)

  const highlightWorker = new Worker("/_static/demo-worker.js")
  highlightWorker.onmessage = (msg) => {
    if (msg.data.loaded) {
    } else if (msg.data.html) {
      document.getElementById(msg.data.outputDiv).innerHTML = msg.data.html
    } else if (msg.data.lexer) {
    } else {
      console.warn('unexpected message from highlight worker', msg)
    }
  }

  async function highlight(id, lexer) {
    const elem = document.getElementById(id)
    highlightWorker.postMessage({ highlight: { code: elem.textContent, lexer, formatter: 'html', outputDiv: id } })
  }

  evaluate("hello")()
  evaluate("functions")()
  evaluate("lists")()
  evaluate("closures")()
})
