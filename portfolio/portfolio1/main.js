var header = document.querySelector(".container");
var showHeaderAt = 850;
var toggleBtn = document.querySelector(".btn-gNav");
// toggleボタン
toggleBtn.addEventListener("click", function () {
  var gNav = document.querySelector(".gNav");
  toggleBtn.classList.toggle("open");
  gNav.classList.toggle("open");
});
// yの値がっ高さ800になったらヘッダーを表示
window.addEventListener("scroll", function () {
  if (this.window.scrollY > showHeaderAt) {
    header.classList.add("visible");
    header.classList.remove("wrapper");
  } else {
    header.classList.remove("visible");
    header.classList.add("wrapper");
  }
});
