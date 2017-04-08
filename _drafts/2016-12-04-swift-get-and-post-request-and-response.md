---
layout: post
title: GET and POST requests and responses with Swift 3.
date: 2016-12-04 00:00:00.000000000 -08:00
tags: [Apple, Foundation framework]
categori: Apple
---

- Protocols
  - `ftp://`
  - `http://`
  - `https://`
  - `file://`
  - `data://`
- Also:
  - proxy servers
  - SOCKS gateways
- Launch Services
  - Open URLs in other applications
- Helper classes:
  - URL loading
    - `NSURLSession`
    - `NSURLConnection`
    - `NSURLDownload`
    - `NSURLResponse`
      - `NSHTTPURLResponse`
    - `NSURLRequest`
      - `NSMutableURLRequest`
  - Protocol support
    - `NSURLProtocol`
  - Authentication and credentials
    - `NSURLProtectionSpace`
    - `NSURLCredentialStorage`
    - `NSURLCredential`
    - `NSURLAuthenticationChallenge`
  - Cookie Storage
    - `NSHTTPCookieStorage`
    - `NSHTTPCookie`
  - Configuration management
    - `NSURLSessionConfiguration`
  - Cache management
    - `NSURLCache`
    - `NSCacheURLRequest`

## GET or POST?

- GET
  - Use `NSURLSession` to retrieve content from an `NSURL` object, as an `NSData` or a file on disk.
- POST
  - Use a `NSURLRequest` or `NSMutableURLRequest` and pass it to `NSURLSession`.

## How to handle response.

- Completion handler called when finishing receiving data from the server.
- Custom delegate  periodically called as app receives data from the origin source. The app is responsible from accumulating that data if needed.

## Downloading as a file

`NSURLSession` instances are not cached.

## Redirection

The URL loading classes can notify their delegates when this happens. If your app provides an appropriate delegate method, your app can then decide whether to follow the redirect, return the response body from the redirect, or return an error.

## Authentication and credentials

Your app can specify that these credentials persist for a single request, for the duration of an app’s launch, or permanently in the user’s keychain.

Credentials stored in persistent storage are kept in the user’s keychain and shared among all apps.

## Cache

The cache is stored on a per-app basis.

The cache is queried by NSURLSession according to the cache policy specified by the initiating `NSURLRequest` and `NSURLSessionConfiguration` objects.

The NSURLCache class provides methods to configure the cache size and its location on disk.

## Cookies

`NSHTTPCookieStorage` provides the interface for managing a collection of `NSHTTPCookie` objects. In OS X, cookie storage is shared across all apps; in iOS, cookie storage is per-app.

Read more at [URL Session Programming Guide][URLLoadingSystem].

[URLLoadingSystem]: https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/URLLoadingSystem/URLLoadingSystem.html