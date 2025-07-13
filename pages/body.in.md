# Ursa

<div class="row mb-3">
    <div class="col-sm-12 mb-3 mb-sm-0">
        <h5>A friendly, stable, general-purpose programming-language</h5>
        Ursa helps you write code that will last a long time: a simple, general-purpose programming language that is easy to pick up and will work the same way long into the future.
    </div>
</div>
<div class="row mb-3">
    <div class="col-sm-6 mb-3 mb-sm-0 mx-auto">
        <div class="card">
            <div class="card-header">Latest release: <span id="ursa-latest-release-version">vx.y.z</span> (<span id="ursa-latest-release-date">Date</span>)</div>
            <div class="card-body link-card">
                <p id="ursa-latest-release-notes">Latest release notes.</p>
                <div class="link-card-spacer"></div>
                <div><a class="btn btn-primary" id="ursa-latest-release-url" src="https://github.com/ursalang/ursa/releases/latest">Get latest release</a></div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Latest news (<span id="ursa-latest-news-date">$include(latest-news-date.txt)</span>)</div>
            <div class="card-body link-card">$include(latest-news.html)
                <div class="link-card-spacer"></div>
                <div><a class="btn btn-primary" id="ursa-latest-release-url" src="/news/index.html">More news</a></div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mb-3 mb-sm-0 mx-auto">
        <div class="card">
            <div class="card-header">
                <h5>Examples and Demo</h5>
                <ul class="nav nav-tabs card-header-tabs" id="codeTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="hello-tab" data-bs-toggle="tab" data-bs-target="#hello-tab-pane" type="button" role="tab" aria-controls="hello-tab-pane" aria-selected="true">Hello</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="functions-tab" data-bs-toggle="tab" data-bs-target="#functions-tab-pane" type="button" role="tab" aria-controls="functions-tab-pane" aria-selected="false">Functions</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="lists-tab" data-bs-toggle="tab" data-bs-target="#lists-tab-pane" type="button" role="tab" aria-controls="lists-tab-pane" aria-selected="false">Lists</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="generators-tab" data-bs-toggle="tab" data-bs-target="#generators-tab-pane" type="button" role="tab" aria-controls="generators-tab-pane" aria-selected="false">Generators</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link btn btn-primary highlight-button" id="try-tab" data-bs-toggle="tab" data-bs-target="#try-tab-pane" type="button" role="tab" aria-controls="try-tab-pane" aria-selected="false">Live Demo</button>
                    </li>
                </ul>
            </div>
            <div class="card-body tab-content">
                <div class="tab-pane fade show active" id="hello-tab-pane" role="tabpanel" aria-labelledby="hello-tab" tabindex="0">
                    <div class="card">
                        <div class="card-header"><h6>Code</h6></div>
                        <div class="card-body" id="hello-input">$run(ursa2html.in.py,$path,hello-woods.ursa)</div>
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
                        <div class="card-body" id="functions-input">$run(ursa2html.in.py,$path,fac-fn-let.ursa)</div>
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
                        <div class="card-body" id="lists-input">$run(ursa2html.in.py,$path,sum-list-return.ursa)</div>
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
                <div class="tab-pane fade" id="generators-tab-pane" role="tabpanel" aria-labelledby="generators-tab" tabindex="0">
                    <div class="card">
                        <div class="card-header"><h6>Code</h6></div>
                        <div class="card-body" id="generators-input">$run(ursa2html.in.py,$path,yield.ursa)</div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Result</h6></div>
                        <div class="card-body" id="generators-result"></div>
                    </div>
                    <div class="card">
                        <div class="card-header"><h6>Output</h6></div>
                        <div class="card-body" id="generators-output"></div>
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
<div class="row mb-3">
    <div class="col-sm-9 mb-3 mb-sm-0 mx-auto">
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
            <div class="card">
                <div class="card-header">Blog</div>
                <div class="card-body link-card">
                    <p>Read about the development of Ursa.</p>
                    <p>Latest post: $run(latest-blog.in.py)</p>
                    <div class="link-card-spacer"></div>
                    <div><a class="btn btn-primary" href="$run(path-to-root.in.py,$path)/blog/index.html">Go to blog</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="/readme.bundle.js"></script>
