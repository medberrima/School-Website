
//slider responsve
var winH  = $(window).height(), 
winbar = $('.bar').innerHeight() ;
$('.slider, .carousel-item').height(winH );


prevScrollpos = window.pageYOffset;
$(window).scroll(function(){
    //button up 
    if($(window).scrollTop() >= ($('.about').offset().top - 200)){
        $('.up').fadeIn(800)
    }else{$('.up').fadeOut(800)}
})

  //click button up
  $('.up').click(function(){
    $('body,html').animate({
        scrollTop : 0
    },500)
})


    //scroll to section
    $('nav li a').on('click',function(){
      //add class active when scroll
      $(this).addClass('active').parent().siblings().find('a').removeClass('active') ;
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top - 80 
      })
  })


    $(".btn-detail").click(function(){
       $('.detail-act').show();
    });
    $('.detail-act').click(function(){
        $('.detail-act').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.detail-act').hide();
    });


