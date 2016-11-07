var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  /* Write your code here! */

  var l33tCipher = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'};

  function l33t(match){
    return l33tCipher[match];
  }

  let regex = /ck|er|you|a|e|l|o|s|t/g;
  console.log(html.replace( regex, l33t));

}

getHTML(requestOptions, print1337);