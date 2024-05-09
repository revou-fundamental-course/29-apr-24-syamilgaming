function kirim(){

  document.getElementById("name").style.borderColor ="blue";
  document.getElementById("alertemail").style.borderColor="blue";
  document.getElementById("alertdestination").style.borderColor="blue";
  if(document.getElementById("name").value ==""){
    document.getElementById("name").style.borderColor ="red";
     return false;
  }    
  if(document.getElementById("email").value ==""){
    document.getElementById("email").style.borderColor="red";
     return false;
  }    
  if(document.getElementById("destination").value ==""){
    document.getElementById("destination").style.borderColor="red";
     return false;
  }    
   alert('Your data hase been submitted. Thank you for contacting us!');  
 }



/* start menu paralaks */

    const header = document.querySelector("header");
    const menuToggler = document.querySelectorAll("#menu_toggle");

    menuToggler.forEach(toggler => {
        toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
    });
        
        
    function menuHome() {
        document.getElementById('home').scrollIntoView({behavior: 'smooth'});
    }        
    function menuPackage() {
        document.getElementById('package').scrollIntoView({behavior: 'smooth'});
    }        
        
    function menuCallus() {
        document.getElementById('callus').scrollIntoView({behavior: 'smooth'});
        document.getElementById('callus').scrollIntoView({behavior: 'smooth'});
    }        
/* end menu paralaks */

/* start slider  */

var responsiveSlider = function() {

var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};

var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};

next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 8000);

};

window.onload = function() {
responsiveSlider();  
}    
    


/* end slider */
