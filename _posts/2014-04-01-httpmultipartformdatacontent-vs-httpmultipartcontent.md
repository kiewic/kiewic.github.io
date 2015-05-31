---
layout: post
title: HttpMultipartFormDataContent vs HttpMultipartContent
tags: [MSDN, Windows 10, UWP, Windows 8.1, Windows Phone 8.1, Windows Runtime, WinRT, Windows Store Apps, Windows.Web.Http]
---

Here is an example of how to use the **HttpMultipartFormDataContent** class from the Windows.Web.Http namespace:

    HttpClient client = new HttpClient();
    HttpMultipartFormDataContent multipart = new HttpMultipartFormDataContent("xxXXxxXXXxXXXxXXXxX");
    multipart.Add(new HttpStringContent("hello"), "Thing1");
    multipart.Add(new HttpStringContent("world"), "Thing2", "foo.txt");
    multipart.Add(new HttpBufferContent((new byte[] { 0x21, 0x22, 0x23, 0x24 }).AsBuffer()), "Thing3");
    HttpResponseMessage response = await client.PostAsync(uri, multipart);
    Debug.WriteLine(response);

Output:

    POST / HTTP/1.1
    Accept-Encoding: gzip, deflate
    Content-Length: 446
    Content-Type: multipart/form-data; boundary=xxXXxxXXXxXXXxXXXxX
    Host: localhost
    Connection: Keep-Alive
    Cache-Control: no-cache

    --xxXXxxXXXxXXXxXXXxX
    Content-Length: 5
    Content-Type: text/plain; charset=UTF-8
    Content-Disposition: form-data; name="Thing1"

    hello
    --xxXXxxXXXxXXXxXXXxX
    Content-Length: 5
    Content-Type: text/plain; charset=UTF-8
    Content-Disposition: form-data; name="Thing2"; filename="foo.txt"; filename*=UTF-8''foo.txt

    world
    --xxXXxxXXXxXXXxXXXxX
    Content-Length: 4
    Content-Disposition: form-data; name="Thing3"

    !"#$
    --xxXXxxXXXxXXXxXXXxX--

Doing the same thing with **HttpMultipartContent** takes a little bit more of effort:

    HttpClient client = new HttpClient();
    HttpMultipartContent multipart = new HttpMultipartContent("form-data", "xxXXxxXXXxXXXxXXXxX");
    IHttpContent content1 = new HttpStringContent("hello");
    content1.Headers.Add("Content-Disposition", " form-data; name=\"Thing1\"");
    multipart.Add(content1);
    IHttpContent content2 = new HttpStringContent("world");
    content2.Headers.Add("Content-Disposition", " form-data; name=\"Thing2\"; filename=\"foo.txt\"; filename*=UTF-8''foo.txt");
    multipart.Add(content2);
    IHttpContent content3 = new HttpBufferContent((new byte[] { 0x21, 0x22, 0x23, 0x24 }).AsBuffer());
    content3.Headers.Add("Content-Disposition", " form-data; name=\"Thing3\"");
    multipart.Add(content3);
    HttpResponseMessage response = await client.PostAsync(uri, multipart);

Obviously **HttpMultipartContent** has more flexibility than **HttpMultipartFormDataContent.** There are [more multipart content types][multipart_messages] other than `multipart/form-data`, e.g.: `multipart/mixed`, `multipart/digest`, `multipart/message`, `multipart/alternative`, `multipart/related`, etc.


[multipart_messages]: http://en.wikipedia.org/wiki/MIME#Multipart_messages

