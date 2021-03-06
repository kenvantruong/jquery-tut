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


$(document).on("mousemove", function(event) {
  $(".box4").text("X: " + event.pageX + ", Y: " + event.pageY);
});
*/

/*
  --- event.preventDefault() --------


$(function(){
  $('.box1 .index').on('click', function(e){
    e.preventDefault()
    $('.box1').css({
      background: '#1ce'
    })
  })
})
*/


/*
  ----- event.stopPropagation() ------
  Setting this will prevent div on the outter laying gets active

  Also If and else. Clicking from button and div - chaning colors

$(function(){
  $('.box2').on('click', function(e){
    if((e.target).className == 'btn') {
      console.log('btn clicked');
      $('.box2').css({
      background: 'purple'
      })
    } else if ((e.target).className !== 'btn') {
      console.log('btn not clicked');
      $('.box2').css({
        background: '#fff'
        })
    }
  })
})
*/


/*
---------------------------------------
------     Form Events   --------------
---------------------------------------
*/

$(function(){
  $('.select-option').change(function(){
    alert('Changed Value')
  })
})

$('.myname').change(function(e){
  $('.box1').html(e.target.value)
})