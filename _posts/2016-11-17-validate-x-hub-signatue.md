---
layout: post
title: How to validate the X-Hub-Signature header when using Express.js and body-parser
date: 2016-11-17 00:00:00.000000000 -08:00
tags: [node.js, x-hub-signature, express, body-parser]
icon: signature.svg
---

*X-Hub-Signature* is the SHA1 hash of the raw request payload. When using *Node.js*, *Express.js* and *body-parser*, to get the raw request payload you have to use the *body-parser verify function* option. And if you want to control the response status code and body content when the verify function throws an error, then you have to use a *error-handling middleware function*.

Here is a full example:

<script src="https://gist.github.com/kiewic/a419b8e47b3baf9a301dee598d6ade87.js"></script>

