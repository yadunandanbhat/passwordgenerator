var generator = require('generate-password-browser');

var passlen = document.getElementById("length");
var putnum = document.querySelector("#putnum");
var putsym = document.querySelector("#putsym");
var putlower = document.querySelector("#putlower");
var putupper = document.querySelector("#putupper");
var exclsim = document.querySelector("#exclduesimilar");
var str = document.querySelector("#strict");

var submt = document.querySelector("#submit");
submt.addEventListener("click", (event) => {
    var passwd = generator.generate({
        length: 10,
        numbers: putnum.checked,
        symbols: putsym.checked,
        lowercase: putlower.checked,
        uppercase: putupper.checked,
        // excludeSimilarCharacters: exclsim.checked,
        strict: str.checked,
    });
    document.getElementById("password").innerHTML = passwd;
});