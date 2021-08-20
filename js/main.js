$(function(){



// Menu modal//
//=======================//

$(document).ready(function() { 
    $(".menu-1, .exit ").toggle(function() { 
      // Отображаем скрытый блок 
      $(".border__menu-1").fadeIn('normal'); // fadeIn - плавное появление
      return false; // не производить переход по ссылке
    },  
        function() { 
      // Скрываем блок 
      $(".border__menu-1").fadeOut('normal'); // fadeOut - плавное исчезновение 
      return false; // не производить переход по ссылке
    }); // end of toggle() 
  }); // end of ready()

  $(document).ready(function() { 
    $(".menu-2, .exit ").toggle(function() { 
      // Отображаем скрытый блок 
      $(".border__menu-2").fadeIn('normal'); // fadeIn - плавное появление
      return false; // не производить переход по ссылке
    },  
        function() { 
      // Скрываем блок 
      $(".border__menu-2").fadeOut('normal'); // fadeOut - плавное исчезновение 
      return false; // не производить переход по ссылке
    }); // end of toggle() 
  }); // end of ready()

  $(document).ready(function() { 
    $(".menu-3, .exit ").toggle(function() { 
      // Отображаем скрытый блок 
      $(".border__menu-3").fadeIn('normal'); // fadeIn - плавное появление
      return false; // не производить переход по ссылке
    },  
        function() { 
      // Скрываем блок 
      $(".border__menu-3").fadeOut('normal'); // fadeOut - плавное исчезновение 
      return false; // не производить переход по ссылке
    }); // end of toggle() 
  }); // end of ready()




});

// Slider//
//========================//



new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    

       loop:true,
      
    });





    var verifyGrecaptcha=undefined;
    var verifyCallback = function(response) {
        verifyGrecaptcha=response;
        define('reCAPTCHA_secretkey','6Lexxx');
    };

    var verifyGrecaptcha=1;