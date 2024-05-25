var header = document.getElementById("header");
var showHeaderAt = 75;
var toggleBtn = document.querySelector(".btn-gNav");
var header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > showHeaderAt) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
});

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("open");
  header.classList.toggle("open");
});
