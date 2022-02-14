// ==UserScript==
// @name         TheNewsLens auto fullpage
// @namespace    https://www.thenewslens.com/
// @version      0.1
// @description  TheNewsLens auto fullpage
// @author       mosquito520
// @match        https://www.thenewslens.com/article/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.indexOf("fullpage") == -1) {
      //alert("your url contains the name franky");
      var fullpage_link = document.getElementsByClassName("page-link js-fullpage-link");
      console.log(fullpage_link[0].href);
      window.location.href = fullpage_link[0].href;
    }
})();