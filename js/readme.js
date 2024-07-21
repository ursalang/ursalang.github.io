import { marked } from "marked"
import DOMPurify from "dompurify"
import { Octokit } from 'octokit'
import { debouncedUpdate, evaluate, evaluateUrsa, respondToVisibility } from './main.js'
$(async function () {
    const $ursaInput = $("#ursa-input")

    $ursaInput.on('input', debouncedUpdate($ursaInput))

    respondToVisibility(document.getElementById('ursa-result'), evaluateUrsa)

    evaluate("hello")()
    evaluate("functions")()
    evaluate("lists")()
    evaluate("generators")()

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
    $('#ursa-latest-release-date').text(date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }))
    $('#ursa-latest-release-notes').html(DOMPurify.sanitize(marked.parse(latestRelease.data.body)))
})
