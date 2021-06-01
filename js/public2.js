$(function () {
    // 切換tab(上面)
    $(".knowBtn").click(function () {
        var color = $(this).parent().attr('data-btn-color');

        $(".knowBtn").removeClass(color);
        $(this).addClass(color);

        $(".knowselect").removeClass("knowselect_show");
        $(".knowselect")
            .eq($(this).index())
            .addClass("knowselect_show")
            .eq(0)
            .click();

        // 選取 select value
        var val = $(".knowselect").eq($(this).index()).find("select").val();

        $(".knowselect")
            .eq($(this).index())
            .find(".knowBoxsRight")
            .eq(val)
            .addClass("knowBoxsRight_show");
    });

    $(".knowBtn").eq(0).click();

    // 綠色

    // $(".knowBtn.btn_green").click(function () {
    //     $(".knowBtn.btn_green").removeClass("green_s");
    //     $(this).addClass("green_s");

    //     $(".knowselect").removeClass("knowselect_show");
    //     $(".knowselect")
    //         .eq($(this).index())
    //         .addClass("knowselect_show")
    //         .find(".li_orange")
    //         .eq(0)
    //         .click();

    //     // 選取 select value
    //     var val = $(".knowselect").eq($(this).index()).find("select").val();

    //     $(".knowselect")
    //         .eq($(this).index())
    //         .find(".knowBoxsRight")
    //         .eq(val)
    //         .addClass("knowBoxsRight_show");
    // });
    // $(".knowBtn.btn_green").eq(0).click();

    // 藍色
    // $(".knowBtn.btn_blue").click(function () {
    //     $(".knowBtn.btn_blue").removeClass("blue_s");
    //     $(this).addClass("blue_s");

    //     $(".knowselect").removeClass("knowselect_show");
    //     $(".knowselect")
    //         .eq($(this).index())
    //         .addClass("knowselect_show")
    //         .find(".li_orange")
    //         .eq(0)
    //         .click();

    //     // 選取 select value
    //     var val = $(".knowselect").eq($(this).index()).find("select").val();

    //     $(".knowselect")
    //         .eq($(this).index())
    //         .find(".knowBoxsRight")
    //         .eq(val)
    //         .addClass("knowBoxsRight_show");
    // });
    // $(".knowBtn.btn_blue").eq(0).click();

    // 棕色
    // $(".knowBtn.btn_brown").click(function () {
    //     $(".knowBtn.btn_brown").removeClass("brown_s");
    //     $(this).addClass("brown_s");

    //     $(".knowselect").removeClass("knowselect_show");
    //     $(".knowselect")
    //         .eq($(this).index())
    //         .addClass("knowselect_show")
    //         .find(".li_orange")
    //         .eq(0)
    //         .click();
    // });
    // $(".knowBtn.btn_brown").eq(0).click();

    // 手機版 select
    // #m_sel 修改為 .m_sel
    $(".m_sel").change(function () {
        let i = $(this).val();

        $(".knowselect").removeClass("knowselect_show");
        $(".knowselect")
            .eq(i)
            .addClass("knowselect_show")
            .find(".li_orange")
            .eq(0)
            .click();

        // 選取 select value
        var val = $(".knowselect").eq(i).find("select").val();

        $(".knowselect")
            .eq(i)
            .find(".knowBoxsRight")
            .eq(val)
            .addClass("knowBoxsRight_show");
    });

    // 網頁版 select
    // #k_sel 修改為 .k_sel

    $(".k_sel").change(function () {
        let i = $(this).val();
        $(".knowBoxsRight").removeClass("knowBoxsRight_show");

        $(this)
            .parents(".knowselect")
            .find(".knowBoxsRight")
            .eq(i)
            .addClass("knowBoxsRight_show");
    });

    $(".c_sel").change(function () {
        let i = $(this).val();
        $(this).parents(".countryBox").find(".text").removeClass("text_show");

        $(this)
            .parents(".countryBox")
            .find(".text")
            .eq(i)
            .addClass("text_show");
    });
});
