window.$ = require('jquery')
import { globals, ArkTypedId, ArkVal, ArkNull, ArkNullVal, NativeFn, toJs } from '@ursalang/ursa/lib/ark/data'
import { ArkState } from '@ursalang/ursa/lib/ark/interpreter'
import { expToInst } from '@ursalang/ursa/lib/ark/flatten'
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
    let output = ''
    globals.set('print', new NativeFn([new ArkTypedId('obj', ArkVal)], ArkNullVal, (obj) => {
      output += String(toJs(obj)) + '\n'
      return ArkNull()
    }))

    try {
      const compiled = compile(getter())
      // console.log(serializeVal(compiled))
      $output.text('')
      const val = await new ArkState(expToInst(compiled)).run()
      $output.html(output.replace(/\n/g, '<br>'))
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
