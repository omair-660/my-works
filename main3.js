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
