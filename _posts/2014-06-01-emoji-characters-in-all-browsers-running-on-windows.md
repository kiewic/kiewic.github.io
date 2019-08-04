---
layout: post
title: Emoji characters in all web browsers running on Windows?
date: 2014-06-01 00:41:25.000000000 -07:00
tags:
- Web Design
- Windows 8
- Google Chrome
- Internet Explorer
- Firefox
published: true
permalink: /2014-06-01/emoji-characters-in-all-browsers-running-on-windows
icon: happy-poop.svg
---
The following CSS snippet will display your Emoji characters correctly in all browsers running on Windows, including Internet Explorer and Google Chrome.


{% highlight css %}
.emojiText {
    font-family: "Segoe MDL2 Assets", "Segoe UI Symbol";
}
{% endhighlight %}


Then apply the CSS style to your text:


{% highlight html %}
<p>
    Websites are funnier with emojis/emoticons:
    <span class="emojiText">&#128565; &#128126;</span>
</p>
{% endhighlight %}

<div>
    Example:
</div>
<div style="font-size: 2rem; font-family: 'Segoe MDL2 Assets', 'Segoe UI Symbol'">
    <span title="dizzy face">&#128565;</span>
    <span title="alien monster">&#128126;</span>
    <span title="octopus">&#x1F419;</span>
    <span title="cookie">&#x1F36A;</span>
    <span title="fist">&#x270A;</span>
    <span title="thumbs up">&#x1F44D;</span>
    <span title="turtle">&#x1F422;</span>
    <span title="thumbs down">&#x1F44E;</span>
    <span title="triangular flag on post">&#x1F6A9;</span>
    <span title="cloud">&#x2601;</span>
    <span title="envelope">&#x2709;</span>
    <span title="hammer">&#x1F528;</span>
    <span title="airplane">&#x2708;</span>
    <span title="earth americas">&#x1F30E;</span>
</div>
<div>
    Unicode Private Use Area (PUA) example:
</div>
<div style="font-size: 2rem; font-family: 'Segoe MDL2 Assets', 'Segoe UI Symbol'">
    <span title="camera">&#xE722;</span>
    <span title="comment">&#xE90A;</span>
    <span title="contact">&#xE77B;</span>
    <span title="copy">&#xE8C8;</span>
    <span title="save">&#xE74E;</span>
    <span title="like">&#xE8E1;</span>
    <span title="delete">&#xE74D;</span>
    <span title="dislike">&#xE8E0;</span>
    <span title="flag">&#xE7C1;</span>
    <span title="cloud">&#xE753;</span>
    <span title="mail">&#xE715;</span>
    <span title="repair">&#xE90F;</span>
    <span title="settings">&#xE713;</span>
    <span title="world">&#xE909;</span>
</div>
