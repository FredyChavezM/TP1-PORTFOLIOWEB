/*
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var nextSection = document.getElementById("portfolio");
    var navbarHeight = navbar.offsetHeight;
    var nextSectionOffset = nextSection.offsetTop;
  
    if (window.pageYOffset >= nextSectionOffset - navbarHeight) {
      navbar.style.background = "linear-gradient(to right, #e7814b 25%, white 25%)";
    } else {
      navbar.style.background = "linear-gradient(to right, #e7814b 40%, white 40%)";
    }
  });
  
*/window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  var nextSection = document.getElementById("change");
  var nextSectionOffset = nextSection.offsetTop;
  var contactSection = document.getElementById("contact");
  var contactSectionOffset = contactSection.offsetTop;

  if (window.pageYOffset > nextSectionOffset && window.pageYOffset < contactSectionOffset) {
    navbar.classList.add("next");
  } else {
    navbar.classList.remove("next");
  }
});
