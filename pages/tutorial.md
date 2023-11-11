# Ursa tutorial

*Under construction.*


## Introduction

Ursa is meant to be a simple, friendly language. This tutorial tries to help you learn to program, as well as to learn Ursa. In its current version, it will doubtless be woefully incomplete, so please do [report](https://github.com/ursalang/ursalang.github.io/issues) things that are unclear or missing (or wrong!).

Also, see the [language reference](reference.html).


## Getting started

Like any skill, programming is something best learnt by doing it, so this tutorial includes lots of programming challenges. Each one is presented in a “playpen” where you can type code and see what it does, a goal (suggested answer), and a “solution” tab, which shows you one way to get the answer. Do try each exercise yourself before looking at the solution! Here's an example:

<div class="card">
    <div class="card">
        <div class="card-header">
            <h5>Challenge</h5>
            <ul class="nav nav-tabs card-header-tabs" id="codeTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="challenge-tab" data-bs-toggle="tab" data-bs-target="#challenge-tab-pane" type="button" role="tab" aria-controls="challenge-tab-pane" aria-selected="true">Playpen</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="solution-tab" data-bs-toggle="tab" data-bs-target="#solution-tab-pane" type="button" role="tab" aria-controls="solution-tab-pane" aria-selected="false">Solution</button>
                </li>
            </ul>
        </div>
        <div class="card-body tab-content code-examples" id="challenge-tab">
            <div class="tab-pane fade show active" id="challenge-tab-pane" role="tabpanel" aria-labelled-by="challenge-pane" tabindex="0">
                <textarea id="ursa-input" rows="6" spellcheck="false"></textarea>
            </div>
            <div class="tab-pane fade" id="solution-tab-pane" role="tabpanel" aria-labelled-by="solution-tab" tabindex="1">
                <div class="card-body" id="challenge-solution">42</div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header"><h6>Goal</h6></div>
        <div class="card-body" id="challenge-goal">The answer to life, the universe and everything.</div>
    </div>
    <div class="card">
        <div class="card-header"><h6>Result</h6></div>
        <div class="card-body" id="ursa-result"></div>
    </div>
    <div class="card">
        <div class="card-header"><h6>Output</h6></div>
        <div class="card-body" id="ursa-output"></div>
    </div>
</div>

<script src="/tutorial.bundle.js"></script>
