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

    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
    })

    // 互動學員 banner3
    const Ajax = option => {
        const data = {
          2020: { 1: [{img: '', text: '2020-1 1 文字文字文字文字文字文字'}, {img: '', text: '2020-1 2 文字文字文字文字文字文字'}, {img: '', text: '2020-1 3 文字文字文字文字文字文字'}, {img: '', text: '2020-1 4 文字文字文字文字文字文字'}, {img: '', text: '2020-1 5 文字文字文字文字文字文字'}, {img: '', text: '2020-1 6 文字文字文字文字文字文字'}, {img: '', text: '2020-1 7 文字文字文字文字文字文字'}, {img: '', text: '2020-1 8 文字文字文字文字文字文字'}, {img: '', text: '2020-1 9 文字文字文字文字文字文字'}, {img: '', text: '2020-1 10 文字文字文字文字文字文字'}], 2: [{img: '', text: '2020-2 1 文字文字文字文字文字文字'}, {img: '', text: '2020-2 2 文字文字文字文字文字文字'}, {img: '', text: '2020-2 3 文字文字文字文字文字文字'}, {img: '', text: '2020-2 4 文字文字文字文字文字文字'}, {img: '', text: '2020-2 5 文字文字文字文字文字文字'}, {img: '', text: '2020-2 6 文字文字文字文字文字文字'}, {img: '', text: '2020-2 7 文字文字文字文字文字文字'}, {img: '', text: '2020-2 8 文字文字文字文字文字文字'}, {img: '', text: '2020-2 9 文字文字文字文字文字文字'}], 3: [{img: '', text: '2020-3 1 文字文字文字文字文字文字'}, {img: '', text: '2020-3 2 文字文字文字文字文字文字'}, {img: '', text: '2020-3 3 文字文字文字文字文字文字'}, {img: '', text: '2020-3 4 文字文字文字文字文字文字'}, {img: '', text: '2020-3 5 文字文字文字文字文字文字'}, {img: '', text: '2020-3 6 文字文字文字文字文字文字'}, {img: '', text: '2020-3 7 文字文字文字文字文字文字'}, {img: '', text: '2020-3 8 文字文字文字文字文字文字'}], 4: [{img: '', text: '2020-4 1 文字文字文字文字文字文字'}, {img: '', text: '2020-4 2 文字文字文字文字文字文字'}, {img: '', text: '2020-4 3 文字文字文字文字文字文字'}, {img: '', text: '2020-4 4 文字文字文字文字文字文字'}, {img: '', text: '2020-4 5 文字文字文字文字文字文字'}, {img: '', text: '2020-4 6 文字文字文字文字文字文字'}, {img: '', text: '2020-4 7 文字文字文字文字文字文字'}], 5: [{img: '', text: '2020-5 1 文字文字文字文字文字文字'}, {img: '', text: '2020-5 2 文字文字文字文字文字文字'}, {img: '', text: '2020-5 3 文字文字文字文字文字文字'}, {img: '', text: '2020-5 4 文字文字文字文字文字文字'}, {img: '', text: '2020-5 5 文字文字文字文字文字文字'}, {img: '', text: '2020-5 6 文字文字文字文字文字文字'}, {img: '', text: '2020-5 7 文字文字文字文字文字文字'}, {img: '', text: '2020-5 8 文字文字文字文字文字文字'}, {img: '', text: '2020-5 9 文字文字文字文字文字文字'}, {img: '', text: '2020-5 10 文字文字文字文字文字文字'}, {img: '', text: '2020-5 11 文字文字文字文字文字文字'}, {img: '', text: '2020-5 12 文字文字文字文字文字文字'}, {img: '', text: '2020-5 13 文字文字文字文字文字文字'}], 6: [{img: '', text: '2020-6 1 文字文字文字文字文字文字'}, {img: '', text: '2020-6 2 文字文字文字文字文字文字'}, {img: '', text: '2020-6 3 文字文字文字文字文字文字'}, {img: '', text: '2020-6 4 文字文字文字文字文字文字'}, {img: '', text: '2020-6 5 文字文字文字文字文字文字'}, {img: '', text: '2020-6 6 文字文字文字文字文字文字'}, {img: '', text: '2020-6 7 文字文字文字文字文字文字'}, {img: '', text: '2020-6 8 文字文字文字文字文字文字'}, {img: '', text: '2020-6 9 文字文字文字文字文字文字'}, {img: '', text: '2020-6 10 文字文字文字文字文字文字'}, {img: '', text: '2020-6 11 文字文字文字文字文字文字'}], 7: [{img: '', text: '2020-7 1 文字文字文字文字文字文字'}, {img: '', text: '2020-7 2 文字文字文字文字文字文字'}, {img: '', text: '2020-7 3 文字文字文字文字文字文字'}, {img: '', text: '2020-7 4 文字文字文字文字文字文字'}, {img: '', text: '2020-7 5 文字文字文字文字文字文字'}, {img: '', text: '2020-7 6 文字文字文字文字文字文字'}, {img: '', text: '2020-7 7 文字文字文字文字文字文字'}, {img: '', text: '2020-7 8 文字文字文字文字文字文字'}, {img: '', text: '2020-7 9 文字文字文字文字文字文字'}, {img: '', text: '2020-7 10 文字文字文字文字文字文字'}, {img: '', text: '2020-7 11 文字文字文字文字文字文字'}, {img: '', text: '2020-7 12 文字文字文字文字文字文字'}], 8: [{img: '', text: '2020-8 1 文字文字文字文字文字文字'}, {img: '', text: '2020-8 2 文字文字文字文字文字文字'}, {img: '', text: '2020-8 3 文字文字文字文字文字文字'}, {img: '', text: '2020-8 4 文字文字文字文字文字文字'}, {img: '', text: '2020-8 5 文字文字文字文字文字文字'}, {img: '', text: '2020-8 6 文字文字文字文字文字文字'}, {img: '', text: '2020-8 7 文字文字文字文字文字文字'}, {img: '', text: '2020-8 8 文字文字文字文字文字文字'}, {img: '', text: '2020-8 9 文字文字文字文字文字文字'}, {img: '', text: '2020-8 10 文字文字文字文字文字文字'}, {img: '', text: '2020-8 11 文字文字文字文字文字文字'}, {img: '', text: '2020-8 12 文字文字文字文字文字文字'}, {img: '', text: '2020-8 13 文字文字文字文字文字文字'}], 9: [{img: '', text: '2020-9 1 文字文字文字文字文字文字'}, {img: '', text: '2020-9 2 文字文字文字文字文字文字'}, {img: '', text: '2020-9 3 文字文字文字文字文字文字'}, {img: '', text: '2020-9 4 文字文字文字文字文字文字'}, {img: '', text: '2020-9 5 文字文字文字文字文字文字'}, {img: '', text: '2020-9 6 文字文字文字文字文字文字'}, {img: '', text: '2020-9 7 文字文字文字文字文字文字'}, {img: '', text: '2020-9 8 文字文字文字文字文字文字'}, {img: '', text: '2020-9 9 文字文字文字文字文字文字'}, {img: '', text: '2020-9 10 文字文字文字文字文字文字'}, {img: '', text: '2020-9 11 文字文字文字文字文字文字'}, {img: '', text: '2020-9 12 文字文字文字文字文字文字'}, {img: '', text: '2020-9 13 文字文字文字文字文字文字'}, {img: '', text: '2020-9 14 文字文字文字文字文字文字'}], 10: [{img: '', text: '2020-10 1 文字文字文字文字文字文字'}, {img: '', text: '2020-10 2 文字文字文字文字文字文字'}, {img: '', text: '2020-10 3 文字文字文字文字文字文字'}, {img: '', text: '2020-10 4 文字文字文字文字文字文字'}, {img: '', text: '2020-10 5 文字文字文字文字文字文字'}, {img: '', text: '2020-10 6 文字文字文字文字文字文字'}, {img: '', text: '2020-10 7 文字文字文字文字文字文字'}, {img: '', text: '2020-10 8 文字文字文字文字文字文字'}, {img: '', text: '2020-10 9 文字文字文字文字文字文字'}, {img: '', text: '2020-10 10 文字文字文字文字文字文字'}, {img: '', text: '2020-10 11 文字文字文字文字文字文字'}, {img: '', text: '2020-10 12 文字文字文字文字文字文字'}, {img: '', text: '2020-10 13 文字文字文字文字文字文字'}, {img: '', text: '2020-10 14 文字文字文字文字文字文字'}, {img: '', text: '2020-10 15 文字文字文字文字文字文字'}], 11: [{img: '', text: '2020-11 1 文字文字文字文字文字文字'}, {img: '', text: '2020-11 2 文字文字文字文字文字文字'}, {img: '', text: '2020-11 3 文字文字文字文字文字文字'}, {img: '', text: '2020-11 4 文字文字文字文字文字文字'}, {img: '', text: '2020-11 5 文字文字文字文字文字文字'}, {img: '', text: '2020-11 6 文字文字文字文字文字文字'}, {img: '', text: '2020-11 7 文字文字文字文字文字文字'}, {img: '', text: '2020-11 8 文字文字文字文字文字文字'}, {img: '', text: '2020-11 9 文字文字文字文字文字文字'}, {img: '', text: '2020-11 10 文字文字文字文字文字文字'}, {img: '', text: '2020-11 11 文字文字文字文字文字文字'}, {img: '', text: '2020-11 12 文字文字文字文字文字文字'}, {img: '', text: '2020-11 13 文字文字文字文字文字文字'}, {img: '', text: '2020-11 14 文字文字文字文字文字文字'}, {img: '', text: '2020-11 15 文字文字文字文字文字文字'}, {img: '', text: '2020-11 16 文字文字文字文字文字文字'}], 12: [{img: '', text: '2020-12 1 文字文字文字文字文字文字'}, {img: '', text: '2020-12 2 文字文字文字文字文字文字'}, {img: '', text: '2020-12 3 文字文字文字文字文字文字'}, {img: '', text: '2020-12 4 文字文字文字文字文字文字'}, {img: '', text: '2020-12 5 文字文字文字文字文字文字'}, {img: '', text: '2020-12 6 文字文字文字文字文字文字'}, {img: '', text: '2020-12 7 文字文字文字文字文字文字'}, {img: '', text: '2020-12 8 文字文字文字文字文字文字'}, {img: '', text: '2020-12 9 文字文字文字文字文字文字'}, {img: '', text: '2020-12 10 文字文字文字文字文字文字'}, {img: '', text: '2020-12 11 文字文字文字文字文字文字'}, {img: '', text: '2020-12 12 文字文字文字文字文字文字'}, {img: '', text: '2020-12 13 文字文字文字文字文字文字'}, {img: '', text: '2020-12 14 文字文字文字文字文字文字'}, {img: '', text: '2020-12 15 文字文字文字文字文字文字'}, {img: '', text: '2020-12 16 文字文字文字文字文字文字'}, {img: '', text: '2020-12 17 文字文字文字文字文字文字'}], },
          2021: { 1: [{img: '', text: '2021-1 1 文字文字文字文字文字文字'}, {img: '', text: '2021-1 2 文字文字文字文字文字文字'}, {img: '', text: '2021-1 3 文字文字文字文字文字文字'}, {img: '', text: '2021-1 4 文字文字文字文字文字文字'}, {img: '', text: '2021-1 5 文字文字文字文字文字文字'}, {img: '', text: '2021-1 6 文字文字文字文字文字文字'}, {img: '', text: '2021-1 7 文字文字文字文字文字文字'}, {img: '', text: '2021-1 8 文字文字文字文字文字文字'}, {img: '', text: '2021-1 9 文字文字文字文字文字文字'}, {img: '', text: '2021-1 10 文字文字文字文字文字文字'}], 2: [{img: '', text: '2021-2 1 文字文字文字文字文字文字'}, {img: '', text: '2021-2 2 文字文字文字文字文字文字'}, {img: '', text: '2021-2 3 文字文字文字文字文字文字'}, {img: '', text: '2021-2 4 文字文字文字文字文字文字'}, {img: '', text: '2021-2 5 文字文字文字文字文字文字'}, {img: '', text: '2021-2 6 文字文字文字文字文字文字'}, {img: '', text: '2021-2 7 文字文字文字文字文字文字'}, {img: '', text: '2021-2 8 文字文字文字文字文字文字'}, {img: '', text: '2021-2 9 文字文字文字文字文字文字'}], 3: [{img: '', text: '2021-3 1 文字文字文字文字文字文字'}, {img: '', text: '2021-3 2 文字文字文字文字文字文字'}, {img: '', text: '2021-3 3 文字文字文字文字文字文字'}, {img: '', text: '2021-3 4 文字文字文字文字文字文字'}, {img: '', text: '2021-3 5 文字文字文字文字文字文字'}, {img: '', text: '2021-3 6 文字文字文字文字文字文字'}, {img: '', text: '2021-3 7 文字文字文字文字文字文字'}, {img: '', text: '2021-3 8 文字文字文字文字文字文字'}], 4: [{img: '', text: '2021-4 1 文字文字文字文字文字文字'}, {img: '', text: '2021-4 2 文字文字文字文字文字文字'}, {img: '', text: '2021-4 3 文字文字文字文字文字文字'}, {img: '', text: '2021-4 4 文字文字文字文字文字文字'}, {img: '', text: '2021-4 5 文字文字文字文字文字文字'}, {img: '', text: '2021-4 6 文字文字文字文字文字文字'}, {img: '', text: '2021-4 7 文字文字文字文字文字文字'}], 5: [{img: '', text: '2021-5 1 文字文字文字文字文字文字'}, {img: '', text: '2021-5 2 文字文字文字文字文字文字'}, {img: '', text: '2021-5 3 文字文字文字文字文字文字'}, {img: '', text: '2021-5 4 文字文字文字文字文字文字'}, {img: '', text: '2021-5 5 文字文字文字文字文字文字'}, {img: '', text: '2021-5 6 文字文字文字文字文字文字'}, {img: '', text: '2021-5 7 文字文字文字文字文字文字'}, {img: '', text: '2021-5 8 文字文字文字文字文字文字'}, {img: '', text: '2021-5 9 文字文字文字文字文字文字'}, {img: '', text: '2021-5 10 文字文字文字文字文字文字'}, {img: '', text: '2021-5 11 文字文字文字文字文字文字'}, {img: '', text: '2021-5 12 文字文字文字文字文字文字'}, {img: '', text: '2021-5 13 文字文字文字文字文字文字'}], 6: [[{img: 'img/interactive/in_b71.png', text: '2021-6-10'}, {img: 'img/interactive/in_b72.png', text: '2021-6-11'}], [{img: 'img/interactive/in_b72.png', text: '2021-6-20'},{img: 'img/interactive/in_b71.png', text: '2021-6-21'},{img: 'img/interactive/in_b71.png', text: '2021-6-22'}], [{img: 'img/interactive/in_b71.png', text: '2021-6-3-1'}], [{img: 'img/interactive/in_b72.png', text: '2021-6-40'}], [{img: 'img/interactive/in_b71.png', text: '2021-6-50'}], [{img: 'img/interactive/in_b72.png', text: '2021-6-60'}], [{img: 'img/interactive/in_b71.png', text: '2021-6-70'}], [{img: 'img/interactive/in_b72.png', text: '2021-6-80'}], [{img: 'img/interactive/in_b71.png', text: '2021-6-90'}], [{img: 'img/interactive/in_b72.png', text: '2021-6-100'}], [{img: 'img/interactive/in_b71.png', text: '2021-6-110'}]], 7: [{img: '', text: '2021-7 1 文字文字文字文字文字文字'}, {img: '', text: '2021-7 2 文字文字文字文字文字文字'}, {img: '', text: '2021-7 3 文字文字文字文字文字文字'}, {img: '', text: '2021-7 4 文字文字文字文字文字文字'}, {img: '', text: '2021-7 5 文字文字文字文字文字文字'}, {img: '', text: '2021-7 6 文字文字文字文字文字文字'}, {img: '', text: '2021-7 7 文字文字文字文字文字文字'}, {img: '', text: '2021-7 8 文字文字文字文字文字文字'}, {img: '', text: '2021-7 9 文字文字文字文字文字文字'}, {img: '', text: '2021-7 10 文字文字文字文字文字文字'}, {img: '', text: '2021-7 11 文字文字文字文字文字文字'}, {img: '', text: '2021-7 12 文字文字文字文字文字文字'}], 8: [{img: '', text: '2021-8 1 文字文字文字文字文字文字'}, {img: '', text: '2021-8 2 文字文字文字文字文字文字'}, {img: '', text: '2021-8 3 文字文字文字文字文字文字'}, {img: '', text: '2021-8 4 文字文字文字文字文字文字'}, {img: '', text: '2021-8 5 文字文字文字文字文字文字'}, {img: '', text: '2021-8 6 文字文字文字文字文字文字'}, {img: '', text: '2021-8 7 文字文字文字文字文字文字'}, {img: '', text: '2021-8 8 文字文字文字文字文字文字'}, {img: '', text: '2021-8 9 文字文字文字文字文字文字'}, {img: '', text: '2021-8 10 文字文字文字文字文字文字'}, {img: '', text: '2021-8 11 文字文字文字文字文字文字'}, {img: '', text: '2021-8 12 文字文字文字文字文字文字'}, {img: '', text: '2021-8 13 文字文字文字文字文字文字'}], 9: [{img: '', text: '2021-9 1 文字文字文字文字文字文字'}, {img: '', text: '2021-9 2 文字文字文字文字文字文字'}, {img: '', text: '2021-9 3 文字文字文字文字文字文字'}, {img: '', text: '2021-9 4 文字文字文字文字文字文字'}, {img: '', text: '2021-9 5 文字文字文字文字文字文字'}, {img: '', text: '2021-9 6 文字文字文字文字文字文字'}, {img: '', text: '2021-9 7 文字文字文字文字文字文字'}, {img: '', text: '2021-9 8 文字文字文字文字文字文字'}, {img: '', text: '2021-9 9 文字文字文字文字文字文字'}, {img: '', text: '2021-9 10 文字文字文字文字文字文字'}, {img: '', text: '2021-9 11 文字文字文字文字文字文字'}, {img: '', text: '2021-9 12 文字文字文字文字文字文字'}, {img: '', text: '2021-9 13 文字文字文字文字文字文字'}, {img: '', text: '2021-9 14 文字文字文字文字文字文字'}], 10: [{img: '', text: '2021-10 1 文字文字文字文字文字文字'}, {img: '', text: '2021-10 2 文字文字文字文字文字文字'}, {img: '', text: '2021-10 3 文字文字文字文字文字文字'}, {img: '', text: '2021-10 4 文字文字文字文字文字文字'}, {img: '', text: '2021-10 5 文字文字文字文字文字文字'}, {img: '', text: '2021-10 6 文字文字文字文字文字文字'}, {img: '', text: '2021-10 7 文字文字文字文字文字文字'}, {img: '', text: '2021-10 8 文字文字文字文字文字文字'}, {img: '', text: '2021-10 9 文字文字文字文字文字文字'}, {img: '', text: '2021-10 10 文字文字文字文字文字文字'}, {img: '', text: '2021-10 11 文字文字文字文字文字文字'}, {img: '', text: '2021-10 12 文字文字文字文字文字文字'}, {img: '', text: '2021-10 13 文字文字文字文字文字文字'}, {img: '', text: '2021-10 14 文字文字文字文字文字文字'}, {img: '', text: '2021-10 15 文字文字文字文字文字文字'}], 11: [{img: '', text: '2021-11 1 文字文字文字文字文字文字'}, {img: '', text: '2021-11 2 文字文字文字文字文字文字'}, {img: '', text: '2021-11 3 文字文字文字文字文字文字'}, {img: '', text: '2021-11 4 文字文字文字文字文字文字'}, {img: '', text: '2021-11 5 文字文字文字文字文字文字'}, {img: '', text: '2021-11 6 文字文字文字文字文字文字'}, {img: '', text: '2021-11 7 文字文字文字文字文字文字'}, {img: '', text: '2021-11 8 文字文字文字文字文字文字'}, {img: '', text: '2021-11 9 文字文字文字文字文字文字'}, {img: '', text: '2021-11 10 文字文字文字文字文字文字'}, {img: '', text: '2021-11 11 文字文字文字文字文字文字'}, {img: '', text: '2021-11 12 文字文字文字文字文字文字'}, {img: '', text: '2021-11 13 文字文字文字文字文字文字'}, {img: '', text: '2021-11 14 文字文字文字文字文字文字'}, {img: '', text: '2021-11 15 文字文字文字文字文字文字'}, {img: '', text: '2021-11 16 文字文字文字文字文字文字'}], 12: [{img: '', text: '2021-12 1 文字文字文字文字文字文字'}, {img: '', text: '2021-12 2 文字文字文字文字文字文字'}, {img: '', text: '2021-12 3 文字文字文字文字文字文字'}, {img: '', text: '2021-12 4 文字文字文字文字文字文字'}, {img: '', text: '2021-12 5 文字文字文字文字文字文字'}, {img: '', text: '2021-12 6 文字文字文字文字文字文字'}, {img: '', text: '2021-12 7 文字文字文字文字文字文字'}, {img: '', text: '2021-12 8 文字文字文字文字文字文字'}, {img: '', text: '2021-12 9 文字文字文字文字文字文字'}, {img: '', text: '2021-12 10 文字文字文字文字文字文字'}, {img: '', text: '2021-12 11 文字文字文字文字文字文字'}, {img: '', text: '2021-12 12 文字文字文字文字文字文字'}, {img: '', text: '2021-12 13 文字文字文字文字文字文字'}, {img: '', text: '2021-12 14 文字文字文字文字文字文字'}, {img: '', text: '2021-12 15 文字文字文字文字文字文字'}, {img: '', text: '2021-12 16 文字文字文字文字文字文字'}, {img: '', text: '2021-12 17 文字文字文字文字文字文字'}], },
        }
    
        const dataY = data[option.data.year]
        if (dataY === undefined) return option.fail && option.fail('找不到資料。'), option.complete && option.complete()
        
        const dataM = dataY[option.data.month]
        if (dataM === undefined) return option.fail && option.fail('找不到資料。'), option.complete && option.complete()
        
        return setTimeout(_ => {
          option.done && option.done({ boxs: dataM }), option.complete && option.complete()
        }, 100)
      }

    $('.banner3.interactive').each(function() {
        let $banner = $(this)
    
        let $prev = $banner.find('.prev')
        let $next = $banner.find('.next')
        let $input = $banner.find('input')
        let $year = $banner.find('.year').empty()
        let $months = $banner.find('.months').empty()
        let timer = null
    
        let $boxs = $banner.find('.boxs')
        let total = 0
        let MaxPage = 0
        
        let getDate = ({ y = 0, m = 0 } = {}) => ({
          y: parseInt($banner.attr('y'), 10) + y,
          m: parseInt($banner.attr('m'), 10) + m,
        })
    
        let getPage = n => parseInt($banner.attr('p'), 10) + n
        let setPage = p => $input.val($banner.attr('p', p).attr('p'))
        
        let initBoxs = boxs => {
          
            let initBox = (i,box) => 
            {
                return $('<div />').addClass('box').append(
                    $('<a />').attr('href', box[0].img).attr('class', 'light-1').attr('data-lightbox', y + m + i).append(
                        $('<img />').attr('src', box[0].img)
                        ).append(
                            $('<span />').text(box[0].text)
                        )
                )
            }
                
            $boxs.empty()
    
            let initLight = (i,box) => {
                return $('<a />').attr('href', box.img).attr('data-lightbox', y + m + i)
            }


            for (let [i,box] of boxs.entries()) {
              $boxs.append(initBox(i,box))
              box.shift()
              for (let b of box) {
                $banner.find('.box').eq(i).append(initLight(i,b))
              }
              
            }
                
              
    
            total = boxs.length
            MaxPage = Math.ceil(total / 6)
    
            $banner.find('.page').text(MaxPage)
            setPage(1)
            $banner.removeAttr('empty')
        }
    
        let setDate = ({ y = null, m = null }) => {
          y && $year.text($banner.attr('y', y).attr('y'))
          m && $banner.attr('m', m)
          
          timer = setTimeout(_ => {
    
            const { y: year, m: month } = getDate()
            $banner.attr('empty', '')
            // 呼叫 Ajax，傳入參數 year, month
            Ajax({
              data: { year, month },
              done: ({ boxs }) => initBoxs(boxs),
              fail: message => $banner.attr('empty', message)
            })
    
          }, 500, clearTimeout(timer))
        }
    
        let y  = parseInt($banner.attr('y') || new Date().getFullYear(), 10)
        let m = parseInt($banner.attr('m') || new Date().getMonth() + 1, 10)
    
          setDate({ y })
          setDate({ m })
    
          for (let i = 0; i < 12; i++)
            $months.append($('<label />').click(function() {
              setDate({ m: $(this).index() + 1 })
            }))
    
          $banner.find('.left-y').click(_ => setDate(getDate({ y: -1 })))
          $banner.find('.right-y').click(_ => setDate(getDate({ y: +1 })))
    
          $input.keyup(function() {
            let p = getPage(0)
            setPage(isNaN(p) || p > MaxPage || MaxPage < 1 ? 1 : p)
          })
    
          $prev.click(_ => {
            let p = getPage(-1)
            setPage(p < 1 ? MaxPage : p)
          })
          $next.click(_ => {
            let p = getPage(+1)
            setPage(p > MaxPage ? 1 : p)
          })
    
          $banner.find('.first').click(_ => setPage(1))
          $banner.find('.last').click(_ => setPage(MaxPage))
          $banner.find('.left').click(_ => $prev.click())
          $banner.find('.right').click(_ => $next.click())
        })
});
