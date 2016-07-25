/* globals */
var desktop = true;
var windowHeight = 0;
var windowWidth = 0;
var imagepos = 1;

/* ==========================================================================*/

/* inits */
$(document).ready(function() {
  setInterval(displayNext, 8000);

  /* mobile check */
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() 
            || isMobile.Opera() || isMobile.Windows());
      }
  };
  desktop = !isMobile.any();


  /* keep logo on mobile; remove logo on desktop scroll */
  if (desktop) {
    $(window).scroll(function() {
     var height = $('#bg1').height()-60,
         scroll = $(this).scrollTop();
     if (scroll > (height)){
      $('.header').removeClass('showlogo');
      $('.header').addClass('nologo');
     } else {      
      $('.header').removeClass('nologo');
      $('.header').addClass('showlogo');
     }
    });
  }
});

/* ==========================================================================*/

/* slideshow function */
function displayNext() {
  (imagepos===4) ? imagepos=1 : imagepos+=1
  $(".background").each(function() {
    var that = this;
    if ($(that).attr("id") === "bg" + imagepos) {
      $(that).animate({ opacity: 1 }, 1500, 'easeInOutExpo');
    } else {
      $(that).animate({ opacity: 0 }, 1500, 'easeInOutExpo');
    }
  });
};

/* ==========================================================================*/

/* toggle philanthropy causes */ 
function togBox(a, b) {
  if (desktop) {
    $(a).addClass("hidden");
    $(b).removeClass("hidden");
  }
}

/* ==========================================================================*/

/* toggle brother classes */
function togText(e) {
  for (var i=1; i<7;i++) {
    if ('#t'+i == e) {
      $(e).css('text-decoration', 'underline');
      $(e+'Text').css('display','block');
    } else {
      $('#t'+i).css('text-decoration', 'none');
      $('#t'+i+'Text').css('display','none');
    }
  }
}

/* ==========================================================================*/

/* anchor-scrolling function */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if (($anchor.attr('href')==="#about") || !desktop) {
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-100
          }, 1500, 'easeInOutExpo');
        } else {
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-25
          }, 1500, 'easeInOutExpo');
        }
        event.preventDefault();
    });
});

/* ==========================================================================*/

/* active-scrolling function */
  $(window).scroll(function() {
    scroll = $(this).scrollTop();
    $(".nav li a").each(function() {
      var that = this;
      if ($(that).attr("id") !== "p-s5") {
        var target = $(that).attr("href");
        height = $(target).offset().top-105;
        if (scroll > height) {
          $(".nav li a").removeClass("active");
          $(that).addClass("active");
        } else {
          $(that).removeClass("active");
        }
      }
    });
  });