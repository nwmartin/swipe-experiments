$( function () {
  $('.swipeable').live('swipe', function() {
    $('.swipetext').text('Swipe detected!');
    setTimeout( function () {
      $('.swipetext').text('');
    }, 2000);
  });
});
