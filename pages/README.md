# Ursa

<div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
        <h5>A friendly, stable, general-purpose programming-language</h5>
        Ursa helps you write code that will last a long time: a simple, general-purpose programming language that is easy to pick up and will work the same way long into the future.
    </div>
    <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
            <div class="card-header">
                <h5>See and Try Ursa</h5>
                <ul class="nav nav-tabs card-header-tabs" id="codeTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="hello-tab" data-bs-toggle="tab" data-bs-target="#hello-tab-pane" type="button" role="tab" aria-controls="hello-tab-pane" aria-selected="true">Hello, woods!</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="functions-tab" data-bs-toggle="tab" data-bs-target="#functions-tab-pane" type="button" role="tab" aria-controls="functions-tab-pane" aria-selected="false">Functions</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="lists-tab" data-bs-toggle="tab" data-bs-target="#lists-tab-pane" type="button" role="tab" aria-controls="lists-tab-pane" aria-selected="false">Lists</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="closures-tab" data-bs-toggle="tab" data-bs-target="#closures-tab-pane" type="button" role="tab" aria-controls="closures-tab-pane" aria-selected="false">Closures</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link btn btn-primary highlight-button" id="try-tab" data-bs-toggle="tab" data-bs-target="#try-tab-pane" type="button" role="tab" aria-controls="try-tab-pane" aria-selected="false">Try Ursa!</button>
                    </li>
                </ul>
            </div>
            <div class="card-body tab-content">
                <!-- FIXME: template in the demo source files -->
                <div class="tab-pane fade show active" id="hello-tab-pane" role="tabpanel" aria-labelledby="hello-tab" tabindex="0">
                    <code>print("hello, woods!")</code>
                </div>
                <div class="tab-pane fade" id="functions-tab-pane" role="tabpanel" aria-labelledby="functions-tab" tabindex="0">
                    <pre>let fac = null
fn fac(x) {
  if x == 0 {1} else {x * fac(x - 1)}
}
fac(6)</pre>
                </div>
                <div class="tab-pane fade" id="lists-tab-pane" role="tabpanel" aria-labelledby="lists-tab" tabindex="0">
                    <pre>let sum = fn(l) {
  let tot = 0
  let i = 0
  loop {
    if i == l.length { return tot }
    tot = tot + l[i]
    i = i + 1
  }
}
sum([10, 30, 50, 5, 5])</pre>
                </div>
                <div class="tab-pane fade" id="closures-tab-pane" role="tabpanel" aria-labelledby="closures-tab" tabindex="0">
                    <pre>let newAccums = fn() {
  let tot = 0
  [
    fn(x) {
      tot = tot + x
    },
    fn(x) {
      tot = tot + x
    },
  ]
}
let accums = newAccums()
let accums2 = newAccums()
[
  [accums[0](1), accums[0](1), accums2[0](1)],
  [accums[1](1), accums[1](1), accums2[1](1)],
]</pre>
                </div>
                <div class="tab-pane fade" id="try-tab-pane" role="tabpanel" aria-labelledby="try-tab" tabindex="0">
                    <p>Let’s get Ursa to evaluate: <code class="ursa-input">6 * 9</code></p>
                    <p><code class="ursa-result"></code></p>
                </div>
            </div>
        </div>
    </div>
    <div class="rust-code">Here some Rust code will go.</div>
</div>

<script src="/bundle.js"></script>