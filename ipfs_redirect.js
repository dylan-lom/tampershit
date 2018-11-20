// ==UserScript==
// @name         ipfs.io -> 127.0.0.1:8080
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  redirect ipfs gateway urls to local ipfs node
// @author       You
// @match        http*://ipfs.io/ipfs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var url = window.location.href; //get address
    var url = url.replace("https://", "http://");
    var newUrl = url.replace("ipfs.io","127.0.0.1:8080");
    location.replace(newUrl); //load new address
})(); 
