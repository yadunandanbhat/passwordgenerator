var generator = require('generate-password-browser');

const passlen = document.getElementById("length").value;
var putnum = document.querySelector("#putnum");
var putsym = document.querySelector("#putsym");
var putlower = document.querySelector("#putlower");
var putupper = document.querySelector("#putupper");
var exclsim = document.querySelector("#exclduesimilar");
const excl = document.getElementById("exclude").value;
var str = document.querySelector("#strict");

var submit = document.querySelector("#submit");
submit.addEventListener("click", passgen);

function passgen() {
    var passwd = generator.generate({
        length: passlen,
        numbers: putnum.checked,
        symbols: putsym.checked,
        lowercase: putlower.checked,
        uppercase: putupper.checked,
        excludeSimilarCharacters: exclsim.checked,
        exclude: excl,
        strict: str.checked,
    });
}