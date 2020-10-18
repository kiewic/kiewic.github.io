// Got to https://powerbi.microsoft.com/en-us/blog/author/amac/
output = []; $('h2 a').each((x, y) => output.push(`* [${y.innerText}](https://powerbi.microsoft.com${y.getAttribute('href')})`)); output.join('\n')
