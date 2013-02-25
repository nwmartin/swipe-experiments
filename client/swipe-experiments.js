$( function () {
  $(document).on('swipe', '.swipeable', function() {
    $('.swipetext').text('Swipe detected!');
    setTimeout( function () {
      $('.swipetext').text('');
    }, 2000);
  });
});


