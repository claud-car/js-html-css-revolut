$(document).ready(function() {
  var helpbutton = $('.help');
  var aboutbutton = $('.about');
  var plansbutton = $('.plans');
  var featuresbutton = $('.features');

  helpbutton.click(function () {
    helpbtn($(this));
  })

  aboutbutton.click(function() {
    aboutbtn($(this));
  })

  plansbutton.click(function() {
    plansbtn($(this));
    console.log($(this));
  })

  featuresbutton.click(function() {
    featuresbtn($(this));
  })


})


//FUNCTIONS

function featuresbtn(button){
  button.next().children().css('right','25%');
  button.next().children().toggleClass('active');
  console.log($(this));
}


function plansbtn(button){
  button.next().children().css('right','65%');
  button.next().toggleClass('active');
}

function aboutbtn(button){
  button.next().children().css('right','45%');
  button.next().toggleClass('active');
}

function helpbtn(button){
    button.next().toggleClass('active');
}
