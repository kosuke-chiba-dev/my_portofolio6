
// fv-btnArea-----------------------------------------------------
let fv = document.querySelector(".fv");
let fvBtnArea = document.querySelector(".fv-btnArea");
if (window.matchMedia("(min-width: 900px)").matches) {
    fv.querySelector(".inner").querySelector(".fv-textArea").appendChild(fvBtnArea);
  } else {
    fv.querySelector(".inner").appendChild(fvBtnArea);
  }

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 900px)").matches) {
    fv.querySelector(".inner")
      .querySelector(".fv-textArea")
      .appendChild(fvBtnArea);
  } else {
    fv.querySelector(".inner").appendChild(fvBtnArea);
  }
});

// fv.querySelector('.inner').removeChild(fvBtnArea);
// let fvTextArea = document.querySelector('.fv-textArea');


// drawer-------------------------------------------------
$('.hamburger').on('click', function(){
  $(this).toggleClass('active');
  $(this).parent().toggleClass('active');
  $('.drawer').toggleClass('active');
  $('html, body').toggleClass('no-scroll');
});

// smoothScroll-------------------------------------
$('a[href^="#"]').on('click', function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    scrollTop: position
  }, 300)
});

$('.drawer').find('a[href^="#"]').on('click', function(){
  $('.hamburger').toggleClass('active');
  $('.hamburger').parent().toggleClass('active');
  $('.drawer').toggleClass('active');
  $('html, body').toggleClass('no-scroll');
});