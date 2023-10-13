function parseUrl(urlForParse){
    if ("canParse" in URL) {
        console.log(URL.canParse(urlForParse)); // check if the URL is correct
        return new URL(urlForParse);
    }
    else {
        console.log("URL.canParse() not supported");
        return new URL(urlForParse);
    }
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

console.log(a.href)
console.log(a.hash)
console.log(a.port)
console.log(a.host)
console.log(a.protocol)
console.log(a.hostname)
console.log(a.pathname)
console.log(a.origin)
