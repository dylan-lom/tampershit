// ==UserScript==
// @name         reddit redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  reddit.com => old.reddit.com
// @author       You
// @grant        none

// @include https://www.reddit.com/*
// ==/UserScript==

var dest = "https://old.reddit.com";
dest = dest.concat(window.location.pathname);
window.location.replace(dest);
