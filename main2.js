let links = document.querySelector(".links");

let menu = document.getElementById("menu");

menu.onclick = function () {
  links.classList.toggle("open");
  menu.classList.toggle("active");
}

let about = document.querySelector(".about");
let abou = document.getElementById("abou");

abou.onclick = function () {
  about.classList.toggle("trans");
}

function backHme(id) {

    location.reload();

}

let btn = document.getElementById("btn");
let azkar = document.getElementById("azkar");
let zakah = document.getElementById("zakah");
let calc = document.getElementById("calc");
let xo = document.getElementById("xo");

btn.onclick = function() {
  azkar.classList.toggle("close");
  zakah.classList.toggle("close");
  calc.classList.toggle("close");
  xo.classList.toggle("close");
}
