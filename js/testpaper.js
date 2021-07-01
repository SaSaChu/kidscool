$(function () {
	// 光箱
	$(".quit").click(function () {
		$(".modelQuit").addClass("showModel");
	});

	$(".complete").click(function () {
		$(".modelComplete").addClass("showModel");
	});

	$(".fail").click(function () {
		$(".modelFail").addClass("showModel");
	});

	$(".t-close").click(function () {
		$(".model").removeClass("showModel");
	});
});