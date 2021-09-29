// ==UserScript==
// @name      Autoclose Tab
// @namespace Autoclose Tab
// @include   *
// ==/UserScript==
setInterval(function() {
// separate words or phrases with a comma
var blacklist = ["Gah. Your tab just crashed."],
    re = new RegExp(blacklist, "i");
if (re.test(document.body.textContent)) {
  var win = window.open("","_self");
  win.close();
}
}, 120000);
