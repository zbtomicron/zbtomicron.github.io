//Scale cover photo and everything else//
var h5font;

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
   h5font = 17*percentage+3;
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

// Change the cover photo and everything else//
$(window).resize(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
   var windowWidth = $(window).width();
   var percentage = windowWidth/1284;
   var currheight = 300*percentage;
   var h1font = 30*percentage+3;
   var h4font = 18*percentage+3;
   h5font = 16*percentage+3;
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
function toggleGotbOverlay(){
  if ($('#gotbBox').css('display')=="block") {
    $('#gotbBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#gotbBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#gotbBox').css('height', height);
    $('#gotbBox').css('width', width);
    $('#gotbBox .pic').css('width', width/2);
    $("html, body").scrollTop($('#gotbBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleTgbOverlay(){
  if ($('#tgbBox').css('display')=="block") {
    $('#tgbBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#tgbBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#tgbBox').css('height', height);
    $('#tgbBox').css('width', width);
    $('#tgbBox .pic').css('width', width/2);
    $("html, body").scrollTop($('#tgbBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleBbbsOverlay(){
  if ($('#bbbsBox').css('display')=="block") {
    $('#bbbsBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#bbbsBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#bbbsBox').css('height', height);
    $('#bbbsBox').css('width', width);
    $("html, body").scrollTop($('#bbbsBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleCommOverlay(){
  if ($('#commBox').css('display')=="block") {
    $('#commBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#commBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#commBox').css('height', height);
    $('#commBox').css('width', width);
    $('#commBox .pic').css('width', width/2);
    $("html, body").scrollTop($('#commBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleRflOverlay(){
  if ($('#rflBox').css('display')=="block") {
    $('#rflBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#rflBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#rflBox').css('height', height);
    $('#rflBox').css('width', width);
    $('#rflBox .pic').css('width', width/2);
    $("html, body").scrollTop($('#rflBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleMtwOverlay(){
  if ($('#mtwBox').css('display')=="block") {
    $('#mtwBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#mtwBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#mtwBox').css('height', height);
    $('#mtwBox').css('width', width);
    $('#mtwBox .pic').css('width', width/2);
    $("html, body").scrollTop($('#mtwBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

function toggleMtwOverlay(){
  if ($('#mtwBox').css('display')=="block") {
    $('#mtwBox').css('display', 'none');
    $("body").css("overflow", "visible");
  } else {
    $('#mtwBox').css('display', 'block');
    var height = $(window).height();
    var width = $(window).width();
    $('#mtwBox').css('height', height);
    $('#mtwBox').css('width', width);
    $('#mtwBox .pic').css('width', width/2);
    $("html, body").scrollTop($('#mtwBox').offset().top);
  $("body").css("overflow", "hidden");
  }
}

//underline scroll//
  $(window).scroll(function() {

   var hT = $('#fill1').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20){
       $(".n1").css("text-decoration","underline");    
       $(".n1").css("color","#ffd700");   
} else {
       $(".n1").css("text-decoration","none");
       $(".n1").css("color","#000080");
   }

       hT = $('#fill2').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20){
       $(".n2").css("text-decoration","underline");    
       $(".n2").css("color","#ffd700");
       $(".n1").css("text-decoration","none");    
       $(".n1").css("color","#000080");
   } else {
       $(".n2").css("text-decoration","none");
       $(".n2").css("color","#000080");
   }

       hT = $('#fill3').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20) {
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

       hT = $('#fill4').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20) {
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
       hT = $('#fill5').offset().top,
       wS = $(this).scrollTop();
   if (wS > hT-20) {
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



// Toggle Text //
function togText1() {
  $('#t1').css('text-decoration', 'underline');
  $('#t2').css('text-decoration', 'none');
  $('#t3').css('text-decoration', 'none');
  $('#t4').css('text-decoration', 'none');
  $('#t5').css('text-decoration', 'none');
  $('#t6').css('text-decoration', 'none');
  $('#toggleText').html("<h5>President: Matthew Felsenfeld</h5><h5>Vice President: Joseph Cirone</h5><h5>Brotherhood Development Director: Ryan Hastings-Echo</h5><h5>Secretary: Jacob Mittleman</h5><h5>Treasurer: Jonathan Sirota</br></br></br></br></br></br></br></h5>");
  $('#toggleText h5').css('font-size', h5font+'px');
}


function togText2() {
  $('#t1').css('text-decoration', 'none');
  $('#t3').css('text-decoration', 'none');
  $('#t4').css('text-decoration', 'none');
  $('#t5').css('text-decoration', 'none');
  $('#t6').css('text-decoration', 'none');
  $('#t2').css('text-decoration', 'underline');
  $('#toggleText').html("<h5>Andrew Carp: E'15</h5><h5>Zachary Fialkow: A'15</h5><h5>Daniel Griffin: E'15</h5><h5>Jonathan Wolf: A'15</br></br></br></br></br></br></br></br></br></h5>");
  $('#toggleText h5').css('font-size', h5font+'px');
}

function togText3() {
  $('#t1').css('text-decoration', 'none');
  $('#t2').css('text-decoration', 'none');
  $('#t4').css('text-decoration', 'none');
  $('#t5').css('text-decoration', 'none');
  $('#t6').css('text-decoration', 'none');
  $('#t3').css('text-decoration', 'underline');
  $('#toggleText').html("<h5>Jason Brillon: A'16</h5><h5>Steven Carbone: A'15</h5><h5>Daniel Diaz: A'15</h5><h5>Rayn Riel: A'15</h5><h5>Mitul Rathod: A'16</h5><h5>Justin Silva: A'16</h5><h5>Ray Xiao: A'15</br></br></br></br></h5>");
  $('#toggleText h5').css('font-size', h5font+'px');
}

function togText4() {
  $('#t1').css('text-decoration', 'none');
  $('#t2').css('text-decoration', 'none');
  $('#t3').css('text-decoration', 'none');
  $('#t5').css('text-decoration', 'none');
  $('#t6').css('text-decoration', 'none');
  $('#t4').css('text-decoration', 'underline');
  $('#toggleText').html("<h5>John Taylor Armstrong: A'15</h5><h5>Bryan Dumond: A'15</h5><h5>Christopher Gambro: A'15</h5><h5>David Hernandez: E'15</h5><h5>Bob Liu: A'15</h5><h5>Nikhil Shinday: E'16</br></br></br></br></br></br></h5>");
  $('#toggleText h5').css('font-size', h5font+'px');
}

function togText5() {
  $('#t1').css('text-decoration', 'none');
  $('#t2').css('text-decoration', 'none');
  $('#t3').css('text-decoration', 'none');
  $('#t4').css('text-decoration', 'none');
  $('#t6').css('text-decoration', 'none');
  $('#t5').css('text-decoration', 'underline');
  $('#toggleText').html("<h5>David Bernstein: E'17</h5><h5>Joseph Cirone: E'17</h5><h5>Matthew Felsenfeld: A'17</h5><h5>Morgan Gellert: E'17</h5><h5>Ryan Hastings-Echo: A'17</h5><h5>Ryan Havens: A'17</h5><h5>Justin Lee: A'17</h5><h5>Matthew Mazzarella: A'17</h5><h5>Jacob Mittleman: A'17</h5><h5> Nikhil Nandagopal: A'17</h5><h5>Andrew Narahara: E'17</h5><h5>Benjamin Pall: E'17</h5><h5>Jonathan Sirota: A'17</h5>");
  $('#toggleText h5').css('font-size', h5font+'px');
}

function togText6() {
  $('#t1').css('text-decoration', 'none');
  $('#t2').css('text-decoration', 'none');
  $('#t3').css('text-decoration', 'none');
  $('#t4').css('text-decoration', 'none');
  $('#t5').css('text-decoration', 'none');
  $('#t6').css('text-decoration', 'underline');
  $('#toggleText').html("<h5>Arlo Clarke: E'17</h5><h5>Joshua Insler: A'17</h5><h5>James Lacitignola: A'17</h5><h5>Kevin Meli: E'17</h5><h5>Benjamin Shipley: A'17</h5><h5>Trevor Vassallo: E'16</br></br></br></br></br></br></h5>");
  $('#toggleText h5').css('font-size', h5font+'px');
}