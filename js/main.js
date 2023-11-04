window.$ = require('jquery')
import { globals, ArkState, ValRef, Null, NativeFn } from '@ursalang/ursa/lib/ark/interp'
import { toJs } from '@ursalang/ursa/lib/ark/ffi'
import { serializeVal } from '@ursalang/ursa/lib/ark/serialize'
import { compile } from '@ursalang/ursa/lib/ursa/compiler'
import { Octokit } from 'octokit'

function debounce(func, timeout) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), timeout)
  }
}

$(async function () {
  const $ursaInput = $("#ursa-input")

  function debouncedUpdate() {
    if ($ursaInput.text().length < 1000) {
      highlightShortDebounce()
    } else {
      highlightLongDebounce()
    }
  }

  $ursaInput.on('input', debouncedUpdate)

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

  function evaluate(name, getter) {
    const $input = $(`#${name}-input`)
    if (getter === undefined) {
      getter = $input.text.bind($input)
    }
    const $result = $(`#${name}-result`)
    const $output = $(`#${name}-output`)

    return function () {
      globals.set('print', new ValRef(new NativeFn((_ark, obj) => {
        const output = toJs(obj).toString()
        $output.text(output)
        return Null()
      })))

      try {
        const compiled = compile(getter())
        // console.log(serializeVal(compiled[0]))
        const val = new ArkState().run(compiled)
        $result.html(`<pre>${serializeVal(val)}</pre>`)
        highlight($result.attr('id'), "json")
      } catch (error) {
        $result.html(`<span class="ursa-error">${error}</span`)
      }
    }
  }

  const evaluateUrsa = evaluate("ursa", $('#ursa-input').val.bind($('#ursa-input')))

  const highlightShortDebounce = debounce(evaluateUrsa, 50)
  const highlightLongDebounce = debounce(evaluateUrsa, 500)

  respondToVisibility(document.getElementById('ursa-result'), evaluateUrsa)

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

  async function highlight(id, lexer) {
    const elem = document.getElementById(id)
    highlightWorker.postMessage({ highlight: { code: elem.textContent, lexer, formatter: 'html', outputDiv: id } })
  }

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
  console.log(latestRelease)
  $('#ursa-latest-release-version').text(latestRelease.data.tag_name)
  const date = new Date(Date.parse(latestRelease.data.created_at))
  console.log(date)
  $('#ursa-latest-release-date').text(date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }))
  $('#ursa-latest-release-notes').text(latestRelease.data.body)
})
