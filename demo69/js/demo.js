$('li').click(function () {
	$(this).toggleClass('selected');
	if ($('li.selected').length == 0)
	$('.select').removeClass('selected');
	else
	$('.select').addClass('selected');
	counter();
});

$('.select').click(function () {
	if ($('li.selected').length == 0) {
	$('li').addClass('selected');
	$('.select').addClass('selected');
	}
	else {
	$('li').removeClass('selected');
	$('.select').removeClass('selected');
	}
	counter();
});

function counter() {
	if ($('li.selected').length > 0)
	$('.send').addClass('selected');
	else
	$('.send').removeClass('selected');
	$('.send').attr('data-counter',$('li.selected').length);
}