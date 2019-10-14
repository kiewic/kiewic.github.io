output = [];

$('article > div > p,article > div > ul').each(function () {
    if (this.tagName.toLowerCase() === 'p') {
        let text = this.innerText.trim();
        if (text.length > 0 && text.length <= 100) {
            output.push(`    * ${text}`);
        }
    }
    else if (this.tagName.toLowerCase() === 'ul') {
        parseList(this, 8);
    }
});

function parseList(list, indentation) {
    $(list.children).each(function () {
        $(this.children).each(function () {
            if (this.tagName.toLowerCase() === 'ul') {
                parseList(this, indentation + 4);
            }
            else {
                output.push(`${' '.repeat(indentation)}* ${this.innerText}`);
            }
        });
    });
}

console.log(output.join('\n'));