var distScrolled = 20;

$(window).scroll(function() {
	if ( $(window).scrollTop() > distScrolled && $(window).width() > 767) {
		$('#nav-arc').css("display", "none");
		$('#scrolled-logo').css("display", "inline-block")
	}
	else if ( $(window).scrollTop() < distScrolled && $(window).width() > 767) {
		$('#nav-arc').css("display", "inline-block")
		$('#scrolled-logo').css("display", "none")
	}
});