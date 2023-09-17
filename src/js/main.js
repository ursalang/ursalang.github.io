import { runArk, toJs } from '@ursalang/ursa/lib/ark/interp'
import { compile } from '@ursalang/ursa/lib/ursa/compiler'
import { Environment } from '@ursalang/ursa/lib/ark/compiler'

$(function () {
  const $ursaInput = $(".ursa-input")
  const $ursaResult = $(".ursa-result")

  const compiled = compile($ursaInput.text())
  const val = runArk(compiled, new Environment())
  $ursaResult.text(toJs(val).toString())
});
