window.$ = require('jquery')
import { globals, ArkState, ArkValRef, ArkNull, NativeFn } from '@ursalang/ursa/lib/ark/interpreter'
import { toJs } from '@ursalang/ursa/lib/ark/ffi'
import { serializeVal } from '@ursalang/ursa/lib/ark/serialize'
import { compile } from '@ursalang/ursa/lib/ursa/compiler'

export function debounce(func, timeout) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), timeout)
  }
}

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

export async function highlightElement(id, lexer) {
  const elem = document.getElementById(id)
  console.log(`id: ${id}`)
  highlightWorker.postMessage({ highlight: { code: elem.textContent, lexer, formatter: 'html', outputDiv: id } })
}

export function evaluate(name, getter) {
  const $input = $(`#${name}-input`)
  if (getter === undefined) {
    getter = $input.text.bind($input)
  }
  const $result = $(`#${name}-result`)
  const $output = $(`#${name}-output`)

  return async function () {
    globals.set('print', new ArkValRef(new NativeFn(['obj'], (obj) => {
      const output = toJs(obj).toString()
      $output.text(`${$output.text()}${output}\n`)
      return ArkNull()
    })))

    try {
      const compiled = compile(getter())
      // console.log(serializeVal(compiled[0]))
      const val = await new ArkState().run(compiled)
      $result.html(`<pre>${serializeVal(val)}</pre>`)
      highlightElement($result.attr('id'), "json")
    } catch (error) {
      $result.html(`<span class="ursa-error">${error}</span`)
    }
  }
}

export const evaluateUrsa = evaluate("ursa", $('#ursa-input').val.bind($('#ursa-input')))

const highlightShortDebounce = debounce(evaluateUrsa, 50)
const highlightLongDebounce = debounce(evaluateUrsa, 500)

export function respondToVisibility(element, callback) {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        callback()
      }
    })
  }, { root: document.documentElement })

  observer.observe(element)
}

export function debouncedUpdate($elem) {
  return function () {
    if ($elem.text().length < 1000) {
      highlightShortDebounce()
    } else {
      highlightLongDebounce()
    }
  }
}
