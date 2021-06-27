let url = 'http://127.0.0.1:5500/index.html'
    // let url = 'https://codequiz.azurewebsites.net/'


function getSourceAsDOM(url) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}
let dom = getSourceAsDOM(url)
console.log(dom);