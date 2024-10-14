luxy.init();

$(function(){

  $(function(){
  
    $('.nav-btn').on("click",function(){
      $('.nav-area,.nav-btn,.mask').toggleClass('open');
    });
  
    $('.nav-area a').on('click',function(){
      $('.nav-area,.nav-btn,.mask').toggleClass('open');
    });
  
    $('.mask').on('click',function(){
      $('.nav-area,.nav-btn,.mask').toggleClass('open');
    });
  
  });

  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("show");
    }
  });

});