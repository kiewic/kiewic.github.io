---
layout: post
title: Get a free SSL/TLS compatible certificate with Let's Encrypt and use in Windows
date: 2016-01-31 12:00:00.000000000 -08:00
tags: [SSL, TLS, OpenSSL, HeyHttp]
---

Reading the [Dreamhost newsletter][newsletter], I found there is an organization called [Let’s Encrypt][letsencrypt] that is giving free Certificates compatible with SSL/TLS since December 2015.

What a great chance to get a certificate for the [HeyHttp][heyhttp] project. Even better than the 5 dollar [Comodo PositiveSSL][positivessl] certificates.

Let's Encrypt provides a script to use in Linux. The script even installs the certificate automatically if you server is Apache. Well ... HeyHttp only runs on Windows and is it a sever itself. So, some extra steps were needed to make this work.

Although there are persons in the forum talking about Let's Encrypt ports to Windows, I just went to my Ubuntu machine, downloaded the enlistment and executed the script in manual mode:

    $ git clone https://github.com/letsencrypt/letsencrypt

    $ ./letsencrypt-auto certonly --manual

    Make sure your web server displays the following content at
    http://heyhttp.org/.well-known/acme-challenge/EAJKZ2tzWFGgiXA5iOfA7PsTqhkVM82VPQGYvYpX0-g before continuing:

    ...

    Press ENTER to continue

In the middle, there is a step where you have to create a file with a key and put in your server. So copy the file to your Windows machine and put it in the **wwwroot** folder.

Go back to Linux and complete the authentication, then you get a certificate and a private key. Searching in the [forum][community], I found the **OpenSSL** command to convert the **pem** files into a **pfx** file:

    sudo -s

    cd /etc/letsencrypt/live/heyhttp.org

    openssl pkcs12 -export -out "certificate.pfx" -inkey "privkey.pem" -in "cert.pem" -certfile chain.pem


Grab the pfx to the Windows machine, double click on it, and install wherever you want (local machine > personal store in case of [HeyHttp][heyhttp]).

And that's it, now the secure connection is trusted.


[newsletter]: https://www.dreamhost.com/newsletter/0116.html
[letsencrypt]: https://letsencrypt.org/
[heyhttp]: https://heyhttp.org/
[positivessl]: https://www.ssls.com/ssl-certificates/comodo-positivessl?years=3
[community]: https://community.letsencrypt.org/t/how-to-get-letsencrypt-working-with-iis-manually/6512


