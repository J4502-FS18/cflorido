$(document).ready(function() {
  $('.menutrigger').click(function() {
    $('.item').slideToggle(500);
  });

  $(window).resize(function() {
	   if ($(window).width()>500) {
		$('.item').removeAttr('style');
	 }
	});
});
