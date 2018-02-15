/**
 * Using ajax, download some data from a remote server and log it to the console
 */
 var promise = $.ajax("https://raw.githubusercontent.com/CPLN-692-401/datasets/master/json/philadelphia-crime-snippet.json")
 var recipe = function(response){console.log(JSON.parse(response));}
 promise.then(recipe)







var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 2
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

L.terminator().addTo(map)
