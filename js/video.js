$(function () {
	// 光箱
	$(".showModel").click(function () {

		let title = $(this).find("p").text(); 
		let path = $(this).find(".video_pic").attr("data-video-path");
		let template = $(this).parent().find("textarea").text();

		$("#iModel").find("h2").html(title);
		$("#iModel").find(".text").html(template);
		$("#iModel .control").find("source").attr("src", path);  
		$("#iModel .control").load()
		
		$("#iModel").addClass("showModel");
	});

	$(".t-v-close").click(function () {
	
		$('.control').get(0).pause();
		$('.control').get(0).currentTime = 0; 
			
		$(".model").removeClass("showModel");
	});
});