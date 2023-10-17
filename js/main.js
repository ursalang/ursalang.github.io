window.$ = require('jquery')
import { serialize, globals, ArkState, ValRef, Null, NativeFn, NativeObj, toJs } from '@ursalang/ursa/lib/ark/interp'
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

  globals.set('print', new ValRef(new NativeFn('print', (obj) => {
    const output = toJs(obj).toString()
    $ursaOutput.text(output)
    return new Null()
  })))

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

  function evaluate() {
    try {
      const compiled = compile($ursaInput.val())
      console.log(serialize(compiled[0]))
      const val = new ArkState().run(compiled)
      $ursaResult.text(serialize(val))
    } catch (error) {
      $ursaResult.html(`<span class="ursa-error">${error}</span`)
    }
  }

  const highlightShortDebounce = debounce(evaluate, 50)
  const highlightLongDebounce = debounce(evaluate, 500)

  respondToVisibility(document.getElementById('ursa-result'), evaluate)
})
