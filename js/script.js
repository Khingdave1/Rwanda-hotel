    // MENU //
const menu = document.getElementById('mobile-menu');
const head = document.querySelector('header');

menu.addEventListener('click', function(){
    head.classList.toggle('open-menu');
});

// SLIDE //
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testi_item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}