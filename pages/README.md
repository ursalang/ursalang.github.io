# Ursa

<div class="row mb-3">
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
                <div class="tab-pane fade show active" id="hello-tab-pane" role="tabpanel" aria-labelledby="hello-tab" tabindex="0">
                    <div class="card">
                        <div class="card-header"><h6>Code</h6></div>
                        <div class="card-body" id="hello-input">$paste{hello-woods.html}</div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Result</h6></div>
                        <div class="card-body" id="hello-result"></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Output</h6></div>
                        <div class="card-body" id="hello-output"></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="functions-tab-pane" role="tabpanel" aria-labelledby="functions-tab" tabindex="0">
                    <div class="card">
                        <div class="card-header"><h6>Code</h6></div>
                        <div class="card-body" id="functions-input"><pre>$paste{fac-fn-let.ursa}</pre></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Result</h6></div>
                        <div class="card-body" id="functions-result"></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Output</h6></div>
                        <div class="card-body" id="functions-output"></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="lists-tab-pane" role="tabpanel" aria-labelledby="lists-tab" tabindex="0">
                    <div class="card">
                        <div class="card-header"><h6>Code</h6></div>
                        <div class="card-body" id="lists-input"><pre>$paste{sum-list-return.ursa}</pre></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Result</h6></div>
                        <div class="card-body" id="lists-result"></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Output</h6></div>
                        <div class="card-body" id="lists-output"></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="closures-tab-pane" role="tabpanel" aria-labelledby="closures-tab" tabindex="0">
                    <div class="card">
                        <div class="card-header"><h6>Code</h6></div>
                        <div class="card-body" id="closures-input"><pre>$paste{two-double-closures.ursa}</pre></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Result</h6></div>
                        <div class="card-body" id="closures-result"></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Output</h6></div>
                        <div class="card-body" id="closures-output"></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="try-tab-pane" role="tabpanel" aria-labelledby="try-tab" tabindex="0">
                    <textarea id="ursa-input" rows="6" spellcheck="false">document.getElementsByTagName("h1").item(0).innerHTML := "Try Ursa!"</textarea>
                    <div class="card">
                        <div class="card-header"><h6>Result</h6></div>
                        <div class="card-body" id="ursa-result"></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Output</h6></div>
                        <div class="card-body" id="ursa-output"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0 mx-auto">
        <div class="card-group">
            <div class="card">
                <div class="card-header">Rosetta Code</div>
                <div class="card-body link-card">
                    <p>Find Ursa examples on Rosetta Code and add more!</p>
                    <div class="link-card-spacer"></div>
                    <div><a class="btn btn-primary" href="https://www.rosettacode.org/wiki/Category:Ursalang">Go to Rosetta Code</a></div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Discuss and learn Ursa</div>
                <div class="card-body link-card">
                    <p>Join us in our Matrix space! we have rooms for general discussion, newbies, and the web site.</p>
                    <div class="link-card-spacer"></div>
                    <div><a class="btn btn-primary" href="https://matrix.to/#/#ursalang:matrix.org">Go to Matrix</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="hlcode"></div>

<script src="/bundle.js"></script>
