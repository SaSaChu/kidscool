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
        if ($("#iModel").find(".control").length > 0) {

          $("#iModel .control").find("source").attr("src", path);  
          $("#iModel .control").load()
        } else {
          $("#iModel").find("iframe").attr("src", path);
        }
        
        $("#iModel").addClass("showModel");
    });

    $(".showTextModel").click(function () {
        $("#textModel").addClass("showModel");
    });

    $(".t-close").click(function () {
        $(".model").removeClass("showModel");
    });

    $(".t-v-close").click(function () {
      
      $('.control').get(0).pause();
      $('.control').get(0).currentTime = 0; 
            
      $(".model").removeClass("showModel");
    });

    $(".t-v-i-close").click(function () {
      $('iframe').attr('src', '');
      $(".model").removeClass("showModel");
    });

    $('input[type="file"]').change(function() {
        
        var filepath = this.value;
        console.log(filepath)
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        console.log($(this).parent())
        $(this).parent().find('input[type="text"]').val(filename);
    });

	$('.banner3.interactive').each(function() {
        let $banner = $(this)
		let $months = $banner.find('.months')
		let $prev = $banner.find('.prev')
        let $next = $banner.find('.next')
		let $input = $banner.find('input')
		let $box = $banner.find('.box')
        let total = 0
        let MaxPage = 0

		let getDate = ({ y = 0, m = 0 } = {}) => ({
			y: parseInt($banner.attr('y'), 10) + y,
		})

		let getPage = n => parseInt($banner.attr('p'), 10) + n
        let setPage = p => $input.val($banner.attr('p', p).attr('p'))

		let setDate = ({ y = null, m = null }) => {
			y && $banner.find('.year').text($banner.attr('y', y).attr('y'))
        }
    
		$('.year').eq(0).addClass('show');
		$banner.find('.left-y').click(function() {
			let target = $(this).parent();
			let index = target.find('.year.active').index() - 1;	
			let length = target.find('.year').length;
			index = (index === 0) ?  length - 1 : --index;
			$(this).parent().find('.year').removeClass('active');
			$(this).parent().find('.year').eq(index).addClass('active');
		});

		$banner.find('.right-y').click(function() {
			let target = $(this).parent();
			let index = target.find('.year.active').index() - 1;	
			let length = target.find('.year').length;
			index = (index === length - 1) ? 0 : ++index;
			$(this).parent().find('.year').removeClass('active');
			$(this).parent().find('.year').eq(index).addClass('active');
		});

		$months.find('label').click(function() {
			let m = $(this).index() + 1;
			$banner.attr('m', m);
		});

		total = $box.length
		MaxPage = Math.ceil(total / 6)

		$banner.find('.page').text(MaxPage)
		setPage(1)

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
	});

	// 06 
    if( window.location.href.match('interactive/composition/') ) {
		let index = $('.box-container').find("a[href$='" + window.location.pathname.match(/\d+/g)[0] + "']").index() + 1;
		let page  = Math.ceil(index / $('.spbox').attr('data-unit'));
		$('.spbox').attr('data-index', index);
		$('.spbox').attr('data-page', page);
	}

	lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
		'disableScrolling': true,
    })
});
