var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('#to-top').css("visibility", "visible").fadeIn('slow');
	} else {
		$('#to-top').fadeOut('slow');
	}
});

$('#to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});