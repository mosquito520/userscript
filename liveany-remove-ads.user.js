// ==UserScript==
// @name         Liveany-remove add
// @namespace    http://blog.mosquito.tk
// @version      0.2
// @description  Remove Liveany ad on right
// @author       Mosquito
// @match        http://www.liveany.com/web.html
// @grant        none
// ==/UserScript==

var adSidebar = document.getElementById('ads');
var main_window = document.getElementById('base');
if (adSidebar) {
    adSidebar.parentNode.removeChild(adSidebar);
   document.getElementById('base').style.right=0;
}