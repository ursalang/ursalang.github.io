window.$ = require('jquery')
import { runArk, serialize, globals, Ref, Null, NativeFn, toJs } from '@ursalang/ursa/lib/ark/interp'
import { compile } from '@ursalang/ursa/lib/ursa/compiler'

function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), timeout)
  }
}

$(function () {
  const $ursaInput = $("#ursa-input")
  const $ursaResult = $("#ursa-result")
  const $ursaOutput = $("#ursa-output")

  function debouncedUpdate() {
    if ($ursaInput.text().length < 1000) {
      highlightShortDebounce()
    } else {
      highlightLongDebounce()
    }
  }

  $ursaInput.on('input', debouncedUpdate)

  globals.set('print', new Ref(new NativeFn('print', (obj) => {
    const output = toJs(obj).toString()
    $ursaOutput.text(output)
    return new Null()
  })))

  function evaluate() {
    try {
      const compiled = compile($ursaInput.val())
      const val = runArk(compiled)
      $ursaResult.text(serialize(val))
    } catch (error) {
      $ursaResult.html(`<span class="ursa-error">${error}</span`)
    }
  }

  const highlightShortDebounce = debounce(evaluate, 50)
  const highlightLongDebounce = debounce(evaluate, 500)

  evaluate()
})
