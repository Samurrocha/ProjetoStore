/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }





//slide automatic

let slideIndex = 0;
showSlides1();

function showSlides1() {
  let x;
  let slides = document.getElementsByClassName("mySlides");
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 5000); // Change image every 5 seconds
}


//slide manual

let slideInde = 1;
showSlides2(slideInde);

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideInde += n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideInde = 1}
  if (n < 1) {slideInde = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideInde-1].style.display = "block";
  
}