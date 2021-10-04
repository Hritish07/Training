let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (elements) {
    href = elements.href;
    if (href.includes(str)) {
        console.log(href);
    }


})