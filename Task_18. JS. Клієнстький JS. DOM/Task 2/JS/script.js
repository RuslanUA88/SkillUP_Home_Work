function getBrowserName() {
let browser;
if (navigator.userAgent.search(/Safari/) > 0) {browser = 'Safari'};
if (navigator.userAgent.search(/Firefox/) > 0) {browser = 'MozillaFirefox'};
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {browser = 'Internet Explorer'};
if (navigator.userAgent.search(/Chrome/) > 0) {browser = 'Google Chrome'};
if (navigator.userAgent.search(/YaBrowser/) > 0) {browser = 'Яндекс браузер'};
if (navigator.userAgent.search(/OPR/) > 0) {browser = 'Opera'};
if (navigator.userAgent.search(/Konqueror/) > 0) {browser = 'Konqueror'};
if (navigator.userAgent.search(/Iceweasel/) > 0) {browser = 'Debian Iceweasel'};
if (navigator.userAgent.search(/SeaMonkey/) > 0) {browser = 'SeaMonkey'};
if (navigator.userAgent.search(/Edge/) > 0) {browser = 'Microsoft Edge'};
return " Your browser is : " + browser
}
console.log(getBrowserName());

let url = ("Full name your URL is : " +  location.href)
console.log( url);
