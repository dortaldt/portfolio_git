


$(document).ready(function(){

  //====================//
  //===smoothe scroll===//
  //====================//

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  //====================//
  //=====side menu======//
  //====================//

  $('#hamburger').on('click', function(){
    $('.side-menu').css("left", "0");
    $('.menu-list').css("left", "0");
  })
  $(".menu-list").on('click', function(){
    $('.side-menu').css("left", "-100vw");
    $('.menu-list').css("left", "-100vw");
  })

});


