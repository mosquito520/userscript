// ==UserScript==
// @name		Hash_to_Magnet_link_converter
// @namespace   http://blog.mosquito.tk
// @homepage	http://blog.mosquito.tk/2014/05/hash-to-magnet-link-converter.html
// @version		9
// @description	Find specific text for hash and convert it into magnet link 
// @match		http://*.eyny.com/*
// @match		http://ck101.com/*
// @copyright	2014+, mosquito520@gmail.com
// @author		mosquito520@gmail.com
// @icon64		https://s11.postimg.org/ljxc92qqn/magnet_icon64.png
// @downloadURL	http://rawgit.com/mosquito520/userscript/master/Hash_to_Magnet_link_converter.tamper.js
// @updateURL	http://rawgit.com/mosquito520/userscript/master/Hash_to_Magnet_link_converter.tamper.js
// @grant		none
// ==/UserScript==

var pattern = [
    "【驗證全碼】：(<.*>|)([a-z0-9A-Z]{40})",
    "【驗證碼】：(<.*>|)([a-z0-9A-Z]{40})"
    ];

var re = new RegExp(pattern.join("|"), "g");

if(re.test(document.body.innerHTML))
{
    var result;
    result = re.exec(document.body.innerHTML);
    result = re.exec(document.body.innerHTML);
    var magnet_link = 'magnet:?xt=urn:btih:'+result[2]+'&dn='+document.title;
    var magnet_link_html = '<a href="'+magnet_link+'"><img src="https://s11.postimg.org/p4t7sava7/Magnet_icon.png" alt="Magnet link" height="32" width="32"></a>';
    document.body.innerHTML= document.body.innerHTML.replace(result[0],result[0]+magnet_link_html);
}

function f_magnet_conv_link_clear()
{
    magnet_conv_input.value="";
    magnet_conv_link_Magnet_text.nodeValue = '';
    magnet_conv_link_Magnet.href = '';    
}
function f_magnet_conv_link_generate()
{
    if (magnet_conv_input.value.length != 40){
        magnet_conv_link_Magnet_text.nodeValue = '';
        magnet_conv_link_Magnet.href = '';
    }
    else{
    magnet_conv_link_Magnet_text.nodeValue = 'Magnet Link';
    magnet_conv_link_Magnet.href = 'magnet:?xt=urn:btih:'+magnet_conv_input.value+'&dn='+document.title;
    }
}

if (location.href.indexOf('thread') != -1)
{
    //.........................建立div (並且加入滑鼠事件)
    var magnet_conv = document.createElement('div');
    magnet_conv.id = 'magnet_conv';
    magnet_conv.className = 'testClass';
    //magnet_conv.setAttribute('name ','newDivName');
    magnet_conv.style.width  = '200px';
    magnet_conv.style.height = '80px';
    //magnet_conv.style.margin = '0 auto';
    magnet_conv.style.border = '4px solid #DDD';
    magnet_conv.style.padding = '4px';
    magnet_conv.style.position = 'fixed';
    magnet_conv.style.bottom = '20px';
    magnet_conv.style.right = '20px';
    magnet_conv.style.background = '#ffffff';
    magnet_conv.style.color = '#000000';
    
    var magnet_conv_br = document.createElement('br');
    var magnet_conv_head = document.createTextNode('Convert Hash to Magnet link');
    magnet_conv.appendChild(magnet_conv_head);
    magnet_conv.appendChild(magnet_conv_br);
    
    var magnet_conv_label = document.createTextNode('Hash:');
    magnet_conv.appendChild(magnet_conv_label);
    var magnet_conv_input = document.createElement('input');
    magnet_conv_input.type="text";
    magnet_conv_input.value="";
    magnet_conv_input.size=18;
    magnet_conv_input.onchange = f_magnet_conv_link_generate;
    magnet_conv.appendChild(magnet_conv_input);
    magnet_conv.appendChild(document.createElement('br'));
    
    var magnet_conv_link_left = document.createElement('div');
    magnet_conv_link_left.style.textAlign = 'left';
    var magnet_conv_link_clear = document.createElement('A');
    var magnet_conv_link_clear_text = document.createTextNode('Clear');
    magnet_conv_link_clear.href = 'javascript:void(0)';
    magnet_conv_link_clear.appendChild(magnet_conv_link_clear_text);
    magnet_conv_link_clear.onclick = f_magnet_conv_link_clear;
    
    magnet_conv_link_left.appendChild(magnet_conv_link_clear);
    magnet_conv.appendChild(magnet_conv_link_left);
    
    var magnet_conv_link_right = document.createElement('div');
    magnet_conv_link_right.style.textAlign = 'right';
    var magnet_conv_link_Magnet = document.createElement('A');
    var magnet_conv_link_Magnet_text = document.createTextNode('');
    magnet_conv_link_Magnet.href = '';
    magnet_conv_link_Magnet.appendChild(magnet_conv_link_Magnet_text);
    magnet_conv_link_right.appendChild(magnet_conv_link_Magnet);
    magnet_conv.appendChild(magnet_conv_link_right);
    
    document.body.appendChild(magnet_conv);
}
