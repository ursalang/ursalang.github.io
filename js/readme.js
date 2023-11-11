import { Octokit } from 'octokit'
import { debouncedUpdate, evaluate, evaluateUrsa, highlight, respondToVisibility } from './main.js'
$(async function () {
    const $ursaInput = $("#ursa-input")

    $ursaInput.on('input', debouncedUpdate($ursaInput))

    respondToVisibility(document.getElementById('ursa-result'), evaluateUrsa)

    evaluate("hello")()
    highlight($('#hello-input').attr('id'), "ursa")
    evaluate("functions")()
    highlight($('#functions-input').attr('id'), "ursa")
    evaluate("lists")()
    highlight($('#lists-input').attr('id'), "ursa")
    evaluate("closures")()
    highlight($('#closures-input').attr('id'), "ursa")

    // Get latest release data from GitHub
    const octokit = new Octokit()
    const latestRelease = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: 'ursalang',
        repo: 'ursa',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    $('#ursa-latest-release-version').text(latestRelease.data.tag_name)
    const date = new Date(Date.parse(latestRelease.data.created_at))
    console.log(date)
    $('#ursa-latest-release-date').text(date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }))
    $('#ursa-latest-release-notes').text(latestRelease.data.body)
})
