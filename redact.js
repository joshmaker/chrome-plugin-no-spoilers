$('*:contains("Breaking Bad")').each(function(){
	$el = $(this);
	if($el.children().length < 1) {
		$el.addClass('redacted');
		if ($el.is("strong, span, b, i, em")) {
			$el.parent().addClass('redacted');
		}
	}
});
