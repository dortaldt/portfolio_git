


$(document).ready(function(){

  //====================//
  //===smoothe scroll===//
  //====================//

  $("a").on('click', function(event) {
    if ((this.hash !== "") && (this.classList[2] !== "back-main")) {
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

  //====================//
  //=====ZOOM IMGS======//
  //====================//

  // $(".fancybox").fancybox(); 

  //====================//
  //=======TIPS=========//
  //====================//

  Object.keys(data).forEach(function(k){
    var id = data[k].id
    var content = data[k].content
    var tipHTML = [
        '<div class="tip-content">',
          '<h5>Tip #',id, '</h5>',
        '</div>',
        '<div class="tip-img-container">',
          '<img class="tip-img" src="../assets/tips/tip_',id,'.png">',
        '</div>',
        '<div class="tip-content">',
          '<div>',
            '<p>', content,
            '</p>  ',
          '</div>',
        '</div>'
    ].join('')

    var div = document.createElement('div');
    div.setAttribute('class', 'tip-container');
    div.innerHTML = tipHTML;
    document.getElementById('tips').appendChild(div);

  });

});


