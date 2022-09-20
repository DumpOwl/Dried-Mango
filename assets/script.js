$(document).ready(function() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop()>50) {
			$('.nav').addClass('dark');
		} else {
			$('.nav').removeClass('dark');
		}
	})
})