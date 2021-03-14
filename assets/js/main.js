//CON MOUSEENTER-LEAVE

// $(document).ready(function() {
//   var helpbutton = $('.help');
//   var aboutbutton = $('.about');
//   var plansbutton = $('.plans');
//   var featuresbutton = $('.features');
//
//   helpbutton.mouseenter(function () {
//     helpbtn($(this));
//   })
//
//   helpbutton.mouseleave(function () {
//     $('.list').removeClass('active');
//   })
//
//   aboutbutton.mouseenter(function() {
//     aboutbtn($(this));
//   })
//
//   aboutbutton.mouseleave(function() {
//     $('.list').removeClass('active');
//   })
//
//   plansbutton.mouseenter(function() {
//     plansbtn($(this));
//   })
//
//   plansbutton.mouseleave(function() {
//     $('.list').removeClass('active')
//   })
//
//   featuresbutton.mouseenter(function() {
//     featuresbtn($(this));
//   })
//
//   featuresbutton.mouseleave(function() {
//     $('.list-features').removeClass('active');
//   })
//
// })

//FINE MOUSEENTER-LEAVE



//CON CLICK

$(document).ready(function() {

  var helpbutton = $('.help');
  var aboutbutton = $('.about');
  var plansbutton = $('.plans');
  var featuresbutton = $('.features');


  helpbutton.click(function () {
    if ($('.list').hasClass('active')) {
      $('.list').removeClass('active');
    } else {
      helpbtn($(this));
    }
  })

  aboutbutton.click(function() {
    if ($('.list').hasClass('active')) {
      $('.list').removeClass('active');
    } else {
      aboutbtn($(this));
    }
  })

  plansbutton.click(function() {
    if ($('.list').hasClass('active')) {
      $('.list').removeClass('active');
    } else {
      plansbtn($(this));
    }
  })

  featuresbutton.click(function() {
    if ($('.list-features').hasClass('active')) {
      $('.list-features').removeClass('active');
    } else {
      featuresbtn($(this));
    }

  })
})

//FINE CLICK





//FUNCTIONS

function featuresbtn(button){
  button.next().children().css('right','25%');
  button.next().children().addClass('active');
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
