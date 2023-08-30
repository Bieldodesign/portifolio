 window.addEventListener('scroll', function() {
     var scrollPosition = window.scrollX || window.pageXOffset;
  
     var myHeading = document.getElementById('abbout-menu');
  
    
     console.log("scrollPosition")

     if (scrollPosition > 200) {
       myHeading.classList.add('decorated');
     } else {
       myHeading.classList.remove('decorated');
     }
  });
