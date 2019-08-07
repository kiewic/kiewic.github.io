// Convert Feedly lists to markdown
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
years = [];
document.querySelectorAll("h3").forEach(function(x) { 
    if (nodes = x.parentNode.querySelectorAll("a")) {
        nodes.forEach(function (y) {
            let addDate = y.getAttribute("add_date");
            addDate = addDate && new Date(Number(addDate * 1000));
            let title = y.innerHTML.replace(/\|/g, "&#x7c;");
            let year = addDate.getFullYear();
            yearLines = years[year] = years[year] || [];
            yearLines.push({ time: addDate.getTime(), text: `* [${title}](${y.href}) on ${months[addDate.getMonth()]} ${addDate.getDate()}` });
        });
    }
});
lines = [];
Object.keys(years).sort(function (x, y) { return Number(y) - Number(x); }).forEach(function (x) {
    lines.push(`\n## Saved in ${x}\n`);
    years[x].sort(function(x, y) { return Number(y.time) - Number(x.time) }).forEach(function (x) {
        lines.push(x.text);
    });
});
lines.join("\n");
