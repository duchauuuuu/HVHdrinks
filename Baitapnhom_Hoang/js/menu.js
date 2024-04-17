var lastScrollTop = 0;
var navbar = document.querySelector(".navbar-custom"); 

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; 
    } else {
        navbar.style.top = "60px"; 
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);

document.addEventListener("mousemove", function(e) {
    var navbar = document.querySelector(".navbar-custom");
    if (e.clientY <= 3) {
        navbar.style.top = "60px"; 
    }
}, false);
