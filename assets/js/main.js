$(document).ready(function() {
  var helpbutton = $('.help');
  var aboutbutton = $('.about');
  var plansbutton = $('.plans');
  var featuresbutton = $('.features');

  helpbutton.mouseenter(function () {
    helpbtn($(this));
  })

  helpbutton.mouseleave(function () {
    $('.list').removeClass('active');
  })

  aboutbutton.mouseenter(function() {
    aboutbtn($(this));
  })

  aboutbutton.mouseleave(function() {
    $('.list').removeClass('active');
  })

  plansbutton.mouseenter(function() {
    plansbtn($(this));
  })

  plansbutton.mouseleave(function() {
    $('.list').removeClass('active');
  })

  featuresbutton.mouseenter(function() {
    featuresbtn($(this));
  })

  featuresbutton.mouseleave(function() {
    $('.list-features').removeClass('active');
  })

})

//FUNCTIONS

function featuresbtn(button){
  button.next().children().css('right','25%');
  button.next().children().addClass('active');
  console.log($(this));
}

function plansbtn(button){
  button.next().children().css('right','65%');
  button.next().addClass('active');
}

function aboutbtn(button){
  button.next().children().css('right','45%');
  button.next().addClass('active');
}

function helpbtn(button){
    button.next().addClass('active');
}
