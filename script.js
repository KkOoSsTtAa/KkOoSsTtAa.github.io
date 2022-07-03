const burgeri = document.getElementById("burgeri");
const krilca = document.getElementById("krilca");
const piletina = document.getElementById("piletina");
const slatkisi = document.getElementById("slatkisi");
const burgerMenu = document.querySelector(".burger-menu");
const header = document.getElementById("header");

const modal = document.getElementById("myModal");
const btn = document.getElementById("poruci");
const span = document.getElementsByClassName("close")[0];

const sviBurgeri = document.querySelectorAll(".visakB");
const svaKrilca = document.querySelectorAll(".visakK");
const svaPiletina = document.querySelectorAll(".visakP");
const sviSlatkisi = document.querySelectorAll(".visakS");
const nav = document.querySelector(".nav");

burgeri.addEventListener("click", (e) => {
  e.preventDefault();
  sviBurgeri.forEach((element) => {
    element.classList.toggle("hidden");
  });
});

krilca.addEventListener("click", (e) => {
  e.preventDefault();
  svaKrilca.forEach((element) => {
    element.classList.toggle("hidden");
  });
});

piletina.addEventListener("click", (e) => {
  e.preventDefault();
  svaPiletina.forEach((element) => {
    element.classList.toggle("hidden");
  });
});

slatkisi.addEventListener("click", (e) => {
  e.preventDefault();
  sviSlatkisi.forEach((element) => {
    element.classList.toggle("hidden");
  });
});

burgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("nav-mobile");
});

document.addEventListener("click", (e) => {
  var isClickInsideElement = burgerMenu.contains(e.target);
  if (!isClickInsideElement) {
    nav.classList.remove("nav-mobile");
  }
});

document.addEventListener("scroll", (e) => {
  const scroll = window.scrollY;
  if (scroll > 800) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

btn.addEventListener("click", (e) => {
  modal.style.display = "block";
});

span.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});