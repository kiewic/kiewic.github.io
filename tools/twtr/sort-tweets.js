const content = `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">How slick :is(this CSS!?) 😏<br>removes the margins on all headers with a \`.tight\` class<br><br>h1.tight, h2.tight....... 🤢<br>:is(h1,h2).tight { 🤓 } <a href="https://t.co/y01f7uKPmA">pic.twitter.com/y01f7uKPmA</a></p>&mdash; Adam Argyle (@argyleink) <a href="https://twitter.com/argyleink/status/1316143837903896577?ref_src=twsrc%5Etfw">October 13, 2020</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Tip: <a href="https://twitter.com/ChromeDevTools?ref_src=twsrc%5Etfw">@ChromeDevTools</a> has a Shadow Editor built in! <a href="https://t.co/NptZeGQWTy">pic.twitter.com/NptZeGQWTy</a></p>&mdash; Addy Osmani (@addyosmani) <a href="https://twitter.com/addyosmani/status/1222421620230443010?ref_src=twsrc%5Etfw">January 29, 2020</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr"><a href="https://t.co/MzT4WAvGOJ">https://t.co/MzT4WAvGOJ</a> - A purely browser-based privacy-first video tool capable of performing tasks like converting, compression, etc. without uploading your files using <a href="https://twitter.com/hashtag/WebAssembly?src=hash&amp;ref_src=twsrc%5Etfw">#WebAssembly</a>. <a href="https://t.co/cUKmT8OeoS">pic.twitter.com/cUKmT8OeoS</a></p>&mdash; Jon Galloway (@jongalloway) <a href="https://twitter.com/jongalloway/status/1309741666782199808?ref_src=twsrc%5Etfw">September 26, 2020</a></blockquote>
<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/XD9mq4tXd6">https://t.co/XD9mq4tXd6</a></p>&mdash; Smakosh (@smakosh) <a href="https://twitter.com/smakosh/status/1308437503582625793?ref_src=twsrc%5Etfw">September 22, 2020</a></blockquote>
<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Q: Why&#39;s our page&#39;s Time-to-Interactive high? 🤔<br>A: It&#39;s often Long (JavaScript) Tasks keeping the main thread busy ⏳<a href="https://twitter.com/ChromeDevTools?ref_src=twsrc%5Etfw">@ChromeDevTools</a> visualizes Long Tasks, making it easier to see what to optimize: <a href="https://t.co/vynX5GBQd0">https://t.co/vynX5GBQd0</a> <a href="https://t.co/BpCwFTaap2">pic.twitter.com/BpCwFTaap2</a></p>&mdash; Addy Osmani (@addyosmani) <a href="https://twitter.com/addyosmani/status/1220609680008863746?ref_src=twsrc%5Etfw">January 24, 2020</a></blockquote>`;

const lines = content.split('\n')
    .map((line) => {
        let [[_, month, day, year]] = [...line.matchAll(/(\w+) (\d+), (\d+)<\/a><\/blockquote>/g)];
        switch (month) {
            case 'January':
                month = 1;
                break;
            case 'February':
                month = 2;
                break;
            case 'March':
                month = 3;
                break;
            case 'April':
                month = 4;
                break;
            case 'May':
                month = 5;
                break;
            case 'June':
                month = 6;
                break;
            case 'July':
                month = 7;
                break;
            case 'August':
                month = 8;
                break;
            case 'September':
                month = 9;
                break;
            case 'October':
                month = 10;
                break;
            case 'November':
                month = 11;
                break;
            case 'December':
                month = 12;
                break;
            default:
                throw new Error(`Invalid month: ${month}`);
        }
        return {
            key: Number(`${year}${String(month).padStart(2, '0')}${day.padStart(2, '0')}`),
            value: line,
        };
    })
    .sort((a, b) => b.key - a.key)
    .forEach(element => console.log(element.value));
