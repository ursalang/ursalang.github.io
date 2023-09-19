import { runArk, serialize } from '@ursalang/ursa/lib/ark/interp'
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

  function debouncedUpdate() {
    if ($ursaInput.text().length < 1000) {
      highlightShortDebounce()
    } else {
      highlightLongDebounce()
    }
  }

  $ursaInput.on('input', debouncedUpdate)

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
