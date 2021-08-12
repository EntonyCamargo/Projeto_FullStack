var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var walls = document.getElementsByClassName("wall");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < walls.length; i++) {
    walls[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > walls.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  walls[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}