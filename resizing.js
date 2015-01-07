//Scale Everything On Load//
$(document).ready(function() {
  $('#t1').css('text-decoration','underline');
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
   var windowWidth = $(window).width();
   var percentage = windowWidth/1284;
   var currheight = 300*percentage;
   var h1font = 30*percentage+3;
   var h4font = 18*percentage+3;
   var h5font = 17*percentage+3;
   var pfont = 10*percentage+3;
   $('.box').css('height',currheight+'px');
   $('.box').css('width',currheight+'px');
   $('.box').css('background-size', currheight+'px');
   $('h1').css('font-size', h1font+'px');
   $('h4').css('font-size', h4font+'px');
   $('h5').css('font-size', h5font+'px');
   $('#brothers li').css('font-size', h4font+'px');
   $('p').css('font-size', pfont+'px');
});

//Scale Everything on Resize//
$(window).resize(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
   var windowWidth = $(window).width();
   var percentage = windowWidth/1284;
   var currheight = 300*percentage;
   var h1font = 30*percentage+3;
   var h4font = 18*percentage+3;
   var h5font = 16*percentage+3;
   var pfont = 10*percentage+3;
   $('.box').css('height',currheight+'px');
   $('.box').css('width',currheight+'px');
   $('.box').css('background-size', currheight+'px');
   $('h1').css('font-size', h1font+'px');
   $('h4').css('font-size', h4font+'px');
   $('h5').css('font-size', h5font+'px');
   $('#brothers li').css('font-size', h4font+'px');
   $('p').css('font-size', pfont+'px');
});



//Remove Logo On Scroll//
$(document).ready(function() {
  var desktop = true;
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
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };
  if (isMobile.any()) {
    desktop = false;
  }
  if (desktop) {
    $(window).scroll(function() {
     var height = $('.cycle').height()-60,
         scroll = $(this).scrollTop();
     if (scroll > (height)){
         $(".logo").css("visibility","hidden");
         $(".nav").css("margin-top","-90px");
     } else {
         $(".logo").css("visibility","visible");
         $(".nav").css("margin-top","0px");
     }
    });
  }
});




//Homepage Slideshow//
var images = [], x = -1;
images[0] = "images/gotb.png";
images[1] = "images/formal.png";
images[2] = "images/gotb2.png";
images[3] = "images/brothers.png";

//GOTB Slideshow//
var imgs = [], x=-1, y=-1, z=-1, a=-1, b=-1;
imgs[0] = "images/gotb.png";
imgs[1] = "images/gotb2.png";
imgs[2] = "images/gotb3.png";
imgs[3] = "images/gotb4.png";
imgs[4] = "images/gotb5.png";
imgs[5] = "images/gotb6.png";

//TGB Slideshow//
var ims = [];
ims[0] = "images/tgb3.png";
ims[1] = "images/tgb4.png";
ims[2] = "images/tgb5.png";
ims[3] = "images/tgb2.png";

//RFL Slideshow//
var igs = [];
igs[0] = "images/rfl3.png";
igs[1] = "images/rfl4.png";
igs[2] = "images/rfl2.png";

//Slideshow Function//
function displayNextImage() {
  if($(".cycle").is(":visible")) {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".cycle").fadeOut("1000", function() {
       $(".cycle").css("background-image", "url("+images[x]+")").fadeIn(1000);
    });
  }
  y = (y === imgs.length - 1) ? 0 : y + 1;
  $("#gotbBox .pic").fadeOut("1000", function() {
    $(this).attr("src", imgs[y]).fadeIn(1000);
  });

  z = (z === ims.length - 1) ? 0 : z + 1;
  $("#tgbBox .pic").fadeOut("1000", function() {
    $(this).attr("src", ims[z]).fadeIn(1000);
  });
  $("#mtwBox .pic").fadeOut("1000", function() {
    $(this).attr("src", ims[z]).fadeIn(1000);
  });

  a = (a === igs.length - 1) ? 0 : a + 1;
  $("#rflBox .pic").fadeOut("1000", function() {
    $(this).attr("src", igs[a]).fadeIn(1000);
  });
}

$(document).ready(function startTimer() {
      setInterval(displayNextImage, 8000);
});


//Pretty Scroll//
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Toggling Boxes//
function toggleBox(e) {
  if ($(e).css('display')=="block") {
    $(e).css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $(e).css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $(e).css('height', height);
    $(e).css('width', width);
    $(e+' .pic').css('width', width/2);
    $("html, body").scrollTop($(e).offset().top);
  $("body").css("overflow", "hidden");
  }
}

//Toggling Brother Text//
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

//Underline Scroll//
  $(window).scroll(function() {

   var height = $('#fill1').offset().top,
       scroll = $(this).scrollTop();
   if (scroll > height-20){
       $(".n1").css("text-decoration","underline");    
       $(".n1").css("color","#ffd700");   
} else {
       $(".n1").css("text-decoration","none");
       $(".n1").css("color","#000080");
   }

       height = $('#fill2').offset().top,
       scroll = $(this).scrollTop();
   if (scroll > height-20){
       $(".n2").css("text-decoration","underline");    
       $(".n2").css("color","#ffd700");
       $(".n1").css("text-decoration","none");    
       $(".n1").css("color","#000080");
   } else {
       $(".n2").css("text-decoration","none");
       $(".n2").css("color","#000080");
   }

       height = $('#fill3').offset().top,
       scroll = $(this).scrollTop();
   if (scroll > height-20) {
       $(".n3").css("text-decoration","underline");    
       $(".n3").css("color","#ffd700");
       $(".n1").css("text-decoration","none");    
       $(".n1").css("color","#000080");
       $(".n2").css("text-decoration","none");    
       $(".n2").css("color","#000080");  
   } else {
       $(".n3").css("text-decoration","none");
       $(".n3").css("color","#000080");
   }

       height = $('#fill4').offset().top,
       scroll = $(this).scrollTop();
   if (scroll > height-20) {
       $(".n4").css("text-decoration","underline");    
       $(".n4").css("color","#ffd700");
       $(".n1").css("text-decoration","none");    
       $(".n1").css("color","#000080");
       $(".n2").css("text-decoration","none");    
       $(".n2").css("color","#000080");
       $(".n3").css("text-decoration","none");    
       $(".n3").css("color","#000080");  
   } else {
       $(".n4").css("text-decoration","none");
       $(".n4").css("color","#000080");
   }
       height = $('#fill5').offset().top,
       scroll = $(this).scrollTop();
   if (scroll > height-20) {
       $(".n5").css("text-decoration","underline");    
       $(".n5").css("color","#ffd700");
       $(".n1").css("text-decoration","none");    
       $(".n1").css("color","#000080");
       $(".n2").css("text-decoration","none");    
       $(".n2").css("color","#000080");
       $(".n3").css("text-decoration","none");    
       $(".n3").css("color","#000080");
       $(".n4").css("text-decoration","none");   
       $(".n4").css("color","#000080");
   } else {
       $(".n5").css("text-decoration","none");
       $(".n5").css("color","#000080");
   }

});