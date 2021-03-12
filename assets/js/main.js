$(document).ready(function() {
  var helpbtn = $('.help');

  helpbtn.click(function () {
    helpbtn();
  })

})




// function dropdown(){
//   var aboutbtn = $('.about');
//   var plansbtn = $('.plans');
//
//
//   aboutbtn.click(function () {
//     aboutbtn.next().children().css('right','45%');
//     $(this).next().toggleClass('active');
//   })
//
//   plansbtn.click(function () {
//     plansbtn.next().children().css('right','45%');
//     $(this).next().toggleClass('active');
//   })
//
// }

function helpbtn(){
    $(this).next().toggleClass('active');
}
