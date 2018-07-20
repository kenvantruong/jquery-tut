// jQuery - Beginners Best Friend

// ------- .ready() --------
$(function() {
  // *******
  // *******
});



// ----------------------------
// ------- .ready() -----------
// ----------------------------

// .error()

//  --------.resize()---------
$(function() {
  $(window).resize(function(){
    if($(window).width() > 1000) {
      $('body').css({
        background: 'red'
      })
    } else if ($(window).width() > 700 && ($(window).width() < 999)) {
      $('body').css({
        background: '#1ce'
      })
    } else if ($(window).width() > 500 && ($(window).width() < 699)) {
      $('body').css({
        background: 'green'
      })
    } else if ($(window).width() < 430) {
      $('body').css({
        background: 'brown'
      })
    }
  })
})


// .scroll()