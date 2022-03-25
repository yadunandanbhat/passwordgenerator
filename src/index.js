var generator = require('generate-password');
var passwordlength = document.getElementById('length');
var ifnumbers = document.getElementById('putnum');
var ifsymbols = document.getElementById('putsym');
var iflower = document.getElementById('putlower');
var ifupper = document.getElementById('putupper');
var exclsim = document.getElementById('excludesimilar');
var excludechar = document.getElementById('exclude');
var ifstrict = document.getElementById('strict');

var password = generator.generate({
    length: passwordlength,
    numbers: ifnumbers.checked ,
    symbols: ifsymbols.checked,
    lowercase: iflower.checked,
    uppercase: ifupper.checked,
    excludeSimilarCharacters: exclsim.checked,
    exclude: excludechar,
    strict: ifstrict.checked
});
console.log(ifnumbers.checked);
document.getElementById('password').innerHTML = password;