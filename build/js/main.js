
const header = document.querySelector(".page__header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("shadow", window.scrollY > 0)
})


const burger = header.querySelector(".navigation-toggle");
const mobile = header.querySelector(".navigation-wrapper");
const body = document.body;
burger.addEventListener("click", (e) => {
  const state = !burger.classList.contains("active")
  burger.classList.toggle("active", state)
  mobile.classList.toggle("show", state)
  body.classList.toggle("scrollnone", state)
})





