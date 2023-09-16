import { runArk, toJs } from '@ursalang/ursa/lib/ark/interp'
import { compile } from '@ursalang/ursa/lib/ursa/compiler'
import { Environment } from '@ursalang/ursa/lib/ark/compiler'

$(function () {
  const $ursaInput = $(".ursa-input")
  const $ursaResult = $(".ursa-result")

  const compiled = compile($ursaInput.text())
  console.log(compiled)
  const val = runArk(compiled, new Environment())
  console.debug(val)
  $ursaResult.text(toJs(val).toString())
});
