Design:

1. List bookmarked tweets (us script below)
2. Convert to markdown: `node call-twitter-oembed.js`
3. Add the JS library to website and see results
4. Sort tweets descending by date: `node sort-tweets.js`

```
let urls = [];
let myInterval = setInterval(() => {
    Array.from(document.querySelectorAll('a[href]'))
        .map(x => x.getAttribute('href'))
        .filter(x => x.includes('status'))
        .forEach(x => !urls.includes(x) && console.log(urls.push(x)));
}, 1000);
```
