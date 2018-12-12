$('.tech-ico').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).css('background-color', 'blue');

  }

  if (status === 'leaved') {
  $(this).css('background-color', 'white');
  }
})
