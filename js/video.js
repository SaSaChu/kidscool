$(function () {
	// 光箱
	$(".showModel").click(function () {

		let title = $(this).find("p").text(); 
		let path = $(this).find(".video_pic").attr("data-video-path");
		let template = $(this).parent().find("textarea").text();

		$("#iModel").find("h2").html(title);
		$("#iModel").find(".text").html(template);
		$("#iModel").find("iframe").attr("src", path);
		// $("#iModel .control").find("source").attr("src", path);  
		// $("#iModel .control").load()
		
		$("#iModel").addClass("showModel");
	});

	$(".t-v-i-close").click(function () {
		$('iframe').attr('src', '');
		$(".model").removeClass("showModel");
	  });
});