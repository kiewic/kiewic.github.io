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
style: |
  .emojiText {
      font-family:"Segoe UI Symbol";
  }
---
The following CSS snippet will display your Emoji characters correclty in all browsers running on Windows, including Internet Explorer and Google Chrome.


{% highlight css %}
.emojiText {
    font-family:"Segoe UI Symbol";
}
{% endhighlight %}


Then apply the CSS style to your text:


{% highlight html %}
<p>
    Websites are funnier with emojis/emoticons:
    <span class="emojiText">&#128565; &#128126;</span>
</p>
{% endhighlight %}


Example:


<span class="emojiText">&#128565; &#128126;</span>
