---
layout: post
title: Mocoyoyo Messenger bot helps you track important events
date: 2017-07-14 01:01:00.000000000 -07:00
tags: [Facebook, messenger, bots]
category: apps
---

[Mocoyoyo][mocoyoyobot] is a bot that helps you count the days until any important date or event. For example your birthday, your next trip to Europe, your wedding, or the Chinese New Year.

<figure style="text-align: center">
<img src="/assets/images/mocoyoyoMessengerBotWhatDay.gif" />
</figure>

It is very easy to use, simply answer four questions: year, month, day, and name of the event, and select how often you want to receive reminders.

<figure style="text-align: center">
<img src="/assets/images/mocoyoyoMessengerBotReminder.gif" />
</figure>

[Click here to talk][mocoyoyobot] to Mocoyoyo bot now!

<script>
    window.fbAsyncInit = function() {
        FB.init({
        appId: "1080998225290317",
        xfbml: true,
        version: "v2.6"
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>

<div class="fb-messengermessageus"
  messenger_app_id="1080998225290317"
  page_id="mocoyoyobot"
  color="blue"
  size="standard" >
</div>

[mocoyoyobot]: https://m.me/mocoyoyobot
