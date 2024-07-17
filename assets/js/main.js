let scrollTop = document.querySelector(".scrollTop");

// header-position
window.onscroll = function () {
  if (window.scrollY > 200) {
    document.querySelector(".header").classList.add("fixed");
    scrollTop.classList.add("add-hire-btn");
  } else {
    document.querySelector(".header").classList.remove("fixed");
    scrollTop.classList.remove("add-hire-btn");
  }
};

// scrollToTop
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
