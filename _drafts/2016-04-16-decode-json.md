---
layout: post
title: Online tool to decode JSON, C# or Java strings.
date: 2016-04-16 00:00:00.000000000 -08:00
tags: [JSON, C#, Java, encode, decode]
---

<p><textarea id="inputText" rows="10" cols="20" placeholder="write an encoded string here, e.g., &quot;c:\\Users&quot;" style="width: 100%"></textarea></p>
<p><input type="button" id="decodeButton" value="Decode" /></p>
<p><textarea id="outputText" rows="10" cols="20" placeholder="output goes here" style="width: 100%"></textarea></p>
<script>
decodeButton.addEventListener("click", function() {
    outputText.value = "";
    outputText.value = JSON.parse(inputText.value);
});
</script>
