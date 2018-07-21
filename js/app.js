// jQuery - Beginners Best Friend

// ------- .ready() --------
/*
$(function() {
  
});
*/


// ---------------------------------------
// ------- .Browser Events -----------
// ---------------------------------------

//  --------ReSize Method---------
/*
$(function(){
  $(window).resize(function(){
    if($(window).width() > 700 &&  $(window).width() < 850) {
      $('body').css({
        background: '#1ce'
      })
    } else if ($(window).width() < 699 ||  $(window).width() > 851) {
      $('body').css({
        background: '#fff'
      })
    }
  })
})
*/




/*
---------------------------------------
------ Event Handlers -----------
---------------------------------------
*/

/* On Method */
/*
$(function(){
  $( ".box1" ).on({
    dblclick: function() {
      $( this ).addClass( "inside" );
    }, click: function() {
      $( this ).removeClass( "inside" );

    }
  });

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
*/

/*
---------------------------------------
------     Event Object    ------------
---------------------------------------
*/
/*
  event.pageX
*/

$( document ).on( "mousemove", function( event ) {
  $( ".box4" ).text( "X: " + event.pageX + ", Y: " + event.pageY );
});

