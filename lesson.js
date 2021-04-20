$(function() {
  'use strict';

  $('#hamburger_open').on('click',function(){
    $('#hamburger').fadeIn();
  });

  $('#hamburger_close').on('click',function(){
    close();
  });

  $('#list').on('click',function(){
    close();
  });

  function close(){
    $('#hamburger').fadeOut();
  }

  $('a[href^="#"]').click(function(){
    var speed= 400;
    var href= $(this).attr("href");
    var target= $(href == "#" || href == "" ? 'html' : href);
    var position= target.offset().top;
    $("html,body").animate({scrollTop:position}, speed,"swing");
  });

  $('#pageTop').on('click',function(){
    $('html,body').not(':animated').animate({scrollTop: 0}, 500);
  });

});
