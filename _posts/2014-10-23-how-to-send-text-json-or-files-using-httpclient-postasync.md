---
layout: post
title: How to send text, JSON or files using HttpClient.PostAsync()
date: 2014-10-23 00:00:00
tags: [MSDN, Windows 10, UWP, Windows 8.1, Windows Phone 8.1, Windows Runtime, WinRT, Windows Store Apps, Windows.Web.Http]
category: winrt
permalink: /how-to-send-text-json-or-files-using-httpclient-postasync
---

This is a common question in StackOverflow and MSDN forums. So, let’s take a look at the main options.

## Contents
{:.no_toc}

* Table of Contents Placeholder
{:toc}

## HttpStringContent

Send a string:

{% highlight csharp %}
// E.g. a JSON string
HttpStringContent stringContent = new HttpStringContent(
    "{ \"firstName\": \"John\" }",
    UnicodeEncoding.Utf8,
    "application/json");

HttpClient client = new HttpClient();
HttpResponseMessage response = await client.PostAsync(
    uri,
    stringContent);
{% endhighlight %}

This sends a POST request like this:

{% highlight http %}
POST / HTTP/1.1
Accept-Encoding: gzip, deflate
Content-Length: 23
Content-Type: application/json; charset=UTF-8
Host: kiewic.com
Connection: Keep-Alive
Cache-Control: no-cache

{ "firstName": "John" }
{% endhighlight %}

See here examples of [how to serialize or parse JSON content][msdn_json] on Windows Universal apps.

## HttpFormUrlEncodedContent

Send a list of key-value pairs, better known as **x-www-form-urlencoded**:

{% highlight csharp %}
Dictionary<string, string> pairs = new Dictionary<string,string>();
pairs.Add("Name", "Bob");
pairs.Add("Age", "18");
pairs.Add("Gender", "Male");
HttpFormUrlEncodedContent formContent =
    new HttpFormUrlEncodedContent(pairs);
 
HttpClient client = new HttpClient();
HttpResponseMessage response = await client.PostAsync(uri, formContent);
{% endhighlight %}

This sends a POST request like this:

{% highlight http %}
POST / HTTP/1.1
Accept-Encoding: gzip, deflate
Content-Length: 27
Content-Type: application/x-www-form-urlencoded
Host: kiewic.com
Connection: Keep-Alive
Cache-Control: no-cache

Name=Bob&Age=18&Gender=Male
{% endhighlight %}

This is equivalent to submitting the following HTML form from a web browser:

{% highlight html %}
<form action="http://kiewic.com/" method="post">
    <input name="Name" type="text" value="Bob" />
    <input name="Age" type="text" value="18" />
    <input name="Gender" type="text" value="Male" />
    <input type="submit" />
</form>
{% endhighlight %}

The list of key-value pairs can be accessed from PHP using the [$_POST][php_post] array, or from ASP.NET using the [Request.Form][aspnet_form] property.

## HttpMultipartFormDataContent

Send files, or a mix of text and files, better known as **multipart/form-data**.

First, create a sample file:

{% highlight csharp %}
IStorageFolder folder = ApplicationData.Current.LocalFolder;
IStorageFile file = await folder.CreateFileAsync(
    "foo.txt",
    CreationCollisionOption.ReplaceExisting);
await FileIO.WriteTextAsync(
    file,
    "The quick brown fox jumps ...");
{% endhighlight %}

Then, send a request like this:

{% highlight csharp %}
IInputStream inputStream = await file.OpenAsync(FileAccessMode.Read);

HttpMultipartFormDataContent multipartContent =
    new HttpMultipartFormDataContent();

multipartContent.Add(
    new HttpStreamContent(inputStream),
    "myFile",
    file.Name);
    
multipartContent.Add(
    new HttpStringContent("Hello World"),
    "myText");
 
HttpClient client = new HttpClient();
HttpResponseMessage response = await client.PostAsync(
    uri,
    multipartContent);
{% endhighlight %}

The raw POST request looks like this:

{% highlight http %}
POST / HTTP/1.1
Accept-Encoding: gzip, deflate
Content-Length: 371
Content-Type: multipart/form-data; boundary=c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b
Host: kiewic.com
Connection: Keep-Alive
Cache-Control: no-cache

--c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b
Content-Disposition: form-data; name="myFile"; filename="foo.txt"; filename*=UTF-8''foo.txt

The quick brown fox jumps ...
--c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b
Content-Length: 11
Content-Type: text/plain; charset=UTF-8
Content-Disposition: form-data; name="myText"

Hello World
--c9b47f5b-ca6c-43bd-a953-6ea78b2ee24b--
{% endhighlight %}

Notice that HttpClient encodes attachment file names using [RFC 2047][rfc_2047] to support file names with non-ASCII characters:

    filename*=UTF-8''foo.txt

This is equivalent to submitting the following HTML form from a web browser:

{% highlight html %}
<form action="http://kiewic.com/" method="post" enctype="multipart/form-data">
    <p><input name="myFile" type="file" /></p>
    <p><input name="myText" type="text" value="Hello World" /></p>
    <p><input type="submit" /></p>
</form>
{% endhighlight %}

The files can be accessed from PHP using the [$_FILES][php_files] array, or from ASP.NET using the [Request.Files][aspnet_files] property.

## HttpBufferContent

**HttpBufferContent** is similar to **HttpStringContent**, however in this case, the content does not necessarily need to be a string, it can be a binary file or any sequence of bytes.

{% highlight csharp %}
IBuffer buffer = new byte[] { 0x1, 0x2, 0x3 }.AsBuffer();

HttpBufferContent content = new HttpBufferContent(buffer);
content.Headers.Add("Content-Type", "application/octet-stream");

HttpClient client = new HttpClient();
HttpResponseMessage response = await client.PostAsync(uri, content);
{% endhighlight %}

The raw POST request looks like this:

{% highlight http %}
POST / HTTP/1.1
Accept-Encoding: gzip, deflate
Content-Length: 3
Content-Type: application/octet-stream
Host: localhost
Connection: Keep-Alive
Cache-Control: no-cache

<0x01><0x02><0x03>
{% endhighlight %}

In PHP you can read the content with [file_get_contents("php://input")][php_file_get_contents]. In ASP.NET with [Request.InputStream][aspnet_inputstream].

[msdn_json]: https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh770289.aspx
[php_post]: http://php.net/manual/en/reserved.variables.post.php
[php_files]: http://php.net/manual/en/reserved.variables.files.php
[php_file_get_contents]: https://php.net/manual/en/function.file-get-contents.php
[aspnet_form]: https://msdn.microsoft.com/en-us/library/system.web.httprequestbase.form(v=vs.110).aspx
[aspnet_files]: https://msdn.microsoft.com/en-us/library/system.web.httprequestbase.files(v=vs.110).aspx
[aspnet_inputstream]: https://msdn.microsoft.com/en-us/library/system.web.httprequestbase.inputstream(v=vs.110).aspx
[rfc_2047]: http://tools.ietf.org/html/rfc2047

