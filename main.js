const logo = document.querySelector(".logo-header");
console.log(logo);

window.onscroll = function() {
  if (window.pageYOffset >= 100) { 
    logo.classList.add("scroll");
  } else {
    logo.classList.remove("scroll");
  }
}