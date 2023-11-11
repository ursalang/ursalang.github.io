import { debouncedUpdate, evaluateUrsa, respondToVisibility } from './main.js'
$(async function () {
    const $ursaInput = $("#ursa-input")

    $ursaInput.on('input', debouncedUpdate($ursaInput))

    respondToVisibility(document.getElementById('ursa-result'), evaluateUrsa)
})
