// jQuery - Beginners Best Friend

// ------- .ready() --------
// $(function() {
  
// });



// ---------------------------------------
// ------- .Browser Events -----------
// ---------------------------------------

//  --------.resize()---------
// $(function(){
//   $(window).resize(function(){
//     if($(window).width() > 700 &&  $(window).width() < 850) {
//       $('body').css({
//         background: '#1ce'
//       })
//     } else if ($(window).width() < 699 ||  $(window).width() > 851) {
//       $('body').css({
//         background: '#fff'
//       })
//     }
//   })
// })






// ---------------------------------------
// ------- Event Handlers -----------
// ---------------------------------------

$(function(){
  $('.box1').on('click', function(){
    $('.box1').css({
      background: '#1ce'
    })
  })

  $('.box2').on('click', function(){
    $('.box2').css({
      background: 'red'
    })
  })

  $('.box3').on('click', function(){
    $('.box3').css({
      background: 'green'
    })
  })
})


// ---------------------------------------
// -------                 -----------
// ---------------------------------------