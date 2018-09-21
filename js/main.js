// ==== ШУМ 

$('#menu').noisy({
	intensity: 1,
	size: 300,
	opacity: 0.4,
	fallback: 'fallback.png',
	randomColors: false, // true by default
    color: '#000000'
}).css('background-color', '#041609');

$('#about').noisy({
  intensity: 0.1,
  size: 500,
  opacity: 0.1,
  fallback: 'fallback.png',
  randomColors: false, // true by default
    color: '#3A3A3A'
}).css('background-color', '#fff');

$('#adv').noisy({
  intensity: 0.1,
  size: 500,
  opacity: 0.1,
  fallback: 'fallback.png',
  randomColors: false, // true by default
    color: '#3A3A3A'
}).css('background-color', '#fff');




$('#footer').noisy({
  intensity: 1,
  size: 300,
  opacity: 0.4,
  fallback: 'fallback.png',
  randomColors: false, // true by default
    color: '#000000'
}).css('background-color', '#050809');






// ==== ТАБЫ МЕНЮ

$(function() {

  $('ul.tabs__navigation').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      });
    });
  });

})

$(function() {

  $('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      });
    });
  });

})


// УБИРАЕМ АВТОМАТИЧЕСКИЙ ACTIVE У ЛИШЕК В МЕНЮ 

// $(function() {
//   $(window).resize(function () {
//     if (window.innerWidth < 768) {
//       $("li:first-child").removeClass("active");
//       $("div.tabs__content:first-child").removeClass("active");
      


//     } else {
//       $(".tabs__navigation li:first-child").addClass("active");
//       $(".tabs__content").addClass("active");

//     }
//   });
// });


/// ГАМБУРГЕР 

$(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$(".menu").removeClass("hide");
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$(".cross").removeClass("hide");
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});


// Scroll To

$(function(){
  $('.btn_reserve').click(function() {
    jQuery.scrollTo('#reserve h2', 1600, {margin:true});
  });
});


$( "#nav__about" ).click(function( event ) {
  event.preventDefault();
  $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});

$(function(){
  $('a #nav__about').click(function() {
      event.preventDefault();
    
  });
});
