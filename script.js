const btnmenu =document.querySelector('.menu-btn');
const btncancel =document.querySelector('.cancel-btn');
const navbar =document.getElementById('nav-bar');
btnmenu.addEventListener('click', function(){
    if (btnmenu.className !== ""){
        btnmenu.style.display="none";
        btncancel.style.display="block"
        navbar.classList.add("show-nav")
    }
})
btncancel.addEventListener('click', function()
{
    if (btncancel.className !==""){
        btncancel.style.display="none"
        btnmenu.style.display="block"
        navbar.classList.remove("show-nav")
    }
})
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if ((x == "")||!((/[a-zA-Z]/).test(x)) && ((x.indexOf(' ') >= 0))){
      alert("Name must be filled out and only contains letters and spaces");
      return false;

    }
}

function ValidateEmail(input) {
    let x = document.forms["form1"]["femail"].value; 
    validRegex = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (x.match(validRegex)) {
        alert("Valid email address!");
    } else {
        alert("Invalid email address!");
    }
  
  }
