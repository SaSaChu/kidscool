$(function () {
    // 光箱
    $(".showModel").click(function () {
        // 03用
        let title = $(this).find("a").eq(0).text(); 
        
        if (!title) {
            // 01 用
            title = $(this).parents(".box").find("a").text();
        }
        // 03用 
        let path = $(this).find("a").eq(0).attr("data-video-path");

        if(!path) {
            // 01 用
            path = $(this).parents(".box").find("a").attr('data-video-path');
        }
        // 03用
        let template = $(this).find("textarea").text();
        

        $("#iModel").find("h2").html(title);
        $("#iModel").find(".text").html(template);
        $("#iModel .control").find("source").attr("src", path);
        $("#iModel .control").load()
        
        $("#iModel").addClass("showModel");
    });

    $(".showTextModel").click(function () {
        // // 03用
        // let title = $(this).find("a").eq(0).text(); 
        
        // if (!title) {
        //     // 01 用
        //     title = $(this).parents(".box").find("a").text();
        // }
        // // 03用 
        // let path = $(this).find("a").eq(0).attr("data-video-path");

        // if(!path) {
        //     // 01 用
        //     path = $(this).parents(".box").find("a").attr('data-video-path');
        // }
        // // 03用
        // let template = $(this).find("textarea").text();
        

        // $("#iModel").find("h2").html(title);
        // $("#iModel").find(".text").html(template);
        // $("#iModel .control").find("source").attr("src", path);
        // $("#iModel .control").load()
        
        $("#textModel").addClass("showModel");
    });

    $(".t-close").click(function () {
        $(".model").removeClass("showModel");
    });

    $('input[type="file"]').change(function() {
        
        var filepath = this.value;
        console.log(filepath)
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        console.log($(this).parent())
        $(this).parent().find('input[type="text"]').val(filename);
        // $('#filename').text(filename);
    });
});
