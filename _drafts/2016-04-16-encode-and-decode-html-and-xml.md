---
layout: post
title: Online tool to encode and decode HTML and XML strings.
date: 2016-04-20 00:00:00.000000000 -08:00
tags: [HTML, XML, encode]
---

<p><textarea id="inputText" rows="10" cols="20" placeholder="write an encoded string here, e.g., &amp;lt;Parameter&amp;gt;&amp;lt;Key&amp;gt;" style="width: 100%"></textarea></p>
<p>
    <input type="button" id="encodeButton" value="Encode" />
    <input type="button" id="decodeButton" value="Decode" />
</p>
<p><textarea id="outputText" rows="10" cols="20" placeholder="output goes here" style="width: 100%"></textarea></p>
<script>
function htmlEscape(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function htmlUnescape(value){
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

encodeButton.addEventListener("click", function() {
    outputText.value = "";
    outputText.value = htmlEscape(inputText.value);
});

decodeButton.addEventListener("click", function() {
    outputText.value = "";
    outputText.value = htmlUnescape(inputText.value);
});
</script>
