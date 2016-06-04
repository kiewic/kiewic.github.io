---
layout: post
title: How to get a free SSL/TLS compatible certificate from Let's Encrypt and make it work in Windows.
date: 2016-01-31 12:00:00.000000000 -08:00
tags: [SSL, TLS, OpenSSL, HeyHttp]
---

Recently in the [Dreamhost newsletter][newsletter], I discovered that [Let's Encrypt][letsencrypt] has been offering, since December 2015, free certificates that are compatible with SSL/TLS. What a great chance to get a certificate for the [HeyHttp][heyhttp] project. [Comodo PositiveSSL][positivessl] certificates are available for 5 dollars, but why not keep your five dollars and get this free certificate?

To get the certificate use the script that Let's Encrypt provides for Linux. This script will also automatically install the certificate on Apache servers.

However, HeyHttp only runs on Windows and it is a server itself, so some extra steps are needed to make the certificate work in Windows.

Although there are discussions in the forums about porting Let's Encrypt to Windows, I just went to my Ubuntu machine, downloaded the enlistment, and executed the script in manual mode. These are the commands needed:

{% highlight shell %}
$ git clone https://github.com/letsencrypt/letsencrypt

$ ./letsencrypt-auto certonly --manual

Make sure your web server displays the following content at
http://heyhttp.org/.well-known/acme-challenge/EAJKZ2tzWFGgiXA5iOfA7PsTqhkVM82VPQGYvYpX0-g before continuing:

...

Press ENTER to continue
{% endhighlight %}

In the middle of this process, you need to create a file with a key and copy the file to the wwwroot folder on your Windows server.

Now, go back to Linux and complete the authentication to get two pem files, one with the certificate and one with the private key.

In the forums, [forum][Ryan Hilliker] posted the following **OpenSSL** command to convert the **pem** files into a **pfx** file:

{% highlight shell %}
sudo -s

cd /etc/letsencrypt/live/heyhttp.org

openssl pkcs12 -export -out "certificate.pfx" -inkey "privkey.pem" -in "cert.pem" -certfile chain.pem
{% endhighlight %}

Copy the resulting pfx file to your Windows machine, double click on it, and install it wherever you want (in the case of HeyHttp, choose "local machine" and then "personal store").

That's it, now the secure connection is trusted and you can go and spend those five dollars on a latte.


[newsletter]: https://www.dreamhost.com/newsletter/0116.html
[letsencrypt]: https://letsencrypt.org/
[heyhttp]: https://heyhttp.org/
[positivessl]: https://www.ssls.com/ssl-certificates/comodo-positivessl?years=3
[community]: https://community.letsencrypt.org/t/how-to-get-letsencrypt-working-with-iis-manually/6512


