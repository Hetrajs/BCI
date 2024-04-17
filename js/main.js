//  MENU ( HAMBURGER )
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector(".menu");
const NavContainer = document.querySelector("#nav-container");
var check = 0;

menuToggle.addEventListener("click", function() {
  if (check === 0) {
    menu.textContent = "CLOSE";
    // menu.style.color = '#1b1b1b'
    check = 1;
    NavContainer.style.display = "block";
    gsap.to(NavContainer,{
        y: "100vh",
        ease: Power3,
        duration: .5,
    })
  } else {
    menu.textContent = 'MENU';
    menu.style.color = '#C1B9A8'
    check = 0;
    gsap.to(NavContainer,{
        y: "-100vh",
        ease: Power3,
        duration: .5
    })
  }
});


if (typeof LocomotiveScroll !== "undefined") {
  console.log("LocomotiveJS is installed and available.");
  // Additional code for handling LocomotiveJS
} else {
  console.error("LocomotiveJS is not installed or not properly loaded.");
  // You may want to handle this case or display an error message
}
