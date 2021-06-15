$(function() {

  // 小試身手・左邊
  $('.testLboxs .test').click(function() {
    $('.testLboxs .test').removeClass('show');
    $(this).addClass('show');

    $(this).parent().parent().parent().find('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $(this).parent().parent().parent().find('.knowBoxsRight').eq($(this).parent().index()).addClass('knowBoxsRight_show');
  });
  // $('.testLboxs').eq (0).find('.test').click();

  // 知識內文banner 
  $('.show-box').each(function() {
    let $showBox = $(this)
    $showBox.attr('data-index', 1)
    $showBox.attr('data-page', 1)

    let unit = $showBox.data('unit')
    let $points = $showBox.find('.points')
    let $box = $showBox.find('.box-container .box')

    // 點點數量, 產生點點
    let pointsCount = Math.ceil($box.length / unit)
    for (let i = 0; i < pointsCount; i++) {
      $points.append($('<label />').click(function() {
        $showBox.attr('data-page', $(this).index() + 1);
      }))
    }

    // 左邊箭頭
    $showBox.find('.left').click(function() {
      let page = parseInt($showBox.attr('data-page'), 10) - 1
      $showBox.attr('data-page', page < 1 ? pointsCount : page);
    })
    // 右邊箭頭
    $showBox.find('.right').click(function() {
      let page = parseInt($showBox.attr('data-page'), 10) + 1
      $showBox.attr('data-page', page > pointsCount ? 1 : page);
    })

    // 點擊小框框
    $box.click(function() {
      $showBox.attr('data-index', $(this).index() + 1)
    })
  });


  $('.m_header_r').click(function() {
    $('.m_menu').addClass('menu_open');
  });

  $('.menuClose').click(function() {
    $('.m_menu').removeClass('menu_open');
  });


  $('.block-l-menuBox').each (function () {
    var $that = $(this);
    console.error(1);
    
    $that.find ('.m-menu-t').click (function () {
      $that.find ('.m-menu-t').removeClass ('s')
      $(this).toggleClass ('s');
    });
  });


  // 切換tab(上面)
  // 移至 public2.js

  // 綠色
  // $('.knowBtn.btn_green').click(function() {
  //   $('.knowBtn.btn_green').removeClass ('green_s');
  //   $(this).addClass ('green_s');

  //   $('.knowselect').removeClass('knowselect_show');
  //   $('.knowselect').eq($(this).index()).addClass('knowselect_show').find('.li_orange').eq (0).click(); 
  //   $('.knowselect').eq($(this).index()).next().addClass('knowBoxsRight_show');
  // });
  // $('.knowBtn.btn_green').eq (0).click();

  // 藍色
  // $('.knowBtn.btn_blue').click(function() {
  //   $('.knowBtn.btn_blue').removeClass ('blue_s');
  //   $(this).addClass ('blue_s');

  //   $('.knowselect').removeClass('knowselect_show');
  //   $('.knowselect').eq($(this).index()).addClass('knowselect_show').find('.li_orange').eq (0).click(); 
  // });
  // $('.knowBtn.btn_blue').eq (0).click();

  // 紫色
  // $('.knowBtn.btn_purple').click(function() {
  //   $('.knowBtn.btn_purple').removeClass ('purple_s');
  //   $(this).addClass ('purple_s');

  //   $('.knowselect').removeClass('knowselect_show');
  //   $('.knowselect').eq($(this).index()).addClass('knowselect_show').find('.li_orange').eq (0).click(); 
  // });
  // $('.knowBtn.btn_purple').eq (0).click();

  // 橘色
  // $('.knowBtn.btn_orange').click(function() {
  //   $('.knowBtn.btn_orange').removeClass ('orange_s');
  //   $(this).addClass ('orange_s');

  //   $('.knowselect').removeClass('knowselect_show');
  //   $('.knowselect').eq($(this).index()).addClass('knowselect_show').find('.li_orange').eq (0).click(); 
  // });
  // $('.knowBtn.btn_orange').eq (0).click();

  // 棕色
  // $('.knowBtn.btn_brown').click(function() {
  //   $('.knowBtn.btn_brown').removeClass ('brown_s');
  //   $(this).addClass ('brown_s');

  //   $('.knowselect').removeClass('knowselect_show');
  //   $('.knowselect').eq($(this).index()).addClass('knowselect_show').find('.li_orange').eq (0).click(); 
  // });
  // $('.knowBtn.btn_brown').eq (0).click();


  // 切換tab(左邊)
  // 綠色
  $('.li_green').click(function() {
    $('.li_green').removeClass ('li_green_s');
    $(this).addClass ('li_green_s');

    $(this).parent().parent().find('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $(this).parent().parent().find('.knowBoxsRight').eq($(this).index()).addClass('knowBoxsRight_show');
  });

  // 藍色
  $('.li_blue').click(function() {
    $('.li_blue').removeClass ('li_blue_s');
    $(this).addClass ('li_blue_s');

    $(this).parent().parent().find('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $(this).parent().parent().find('.knowBoxsRight').eq($(this).index()).addClass('knowBoxsRight_show');
  });

  // 紫色
  $('.li_purple').click(function() {
    $('.li_purple').removeClass ('li_purple_s');
    $(this).addClass ('li_purple_s');

    $(this).parent().parent().find('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $(this).parent().parent().find('.knowBoxsRight').eq($(this).index()).addClass('knowBoxsRight_show');
  });

  // 橘色
  $('.li_orange').click(function() {
    $('.li_orange').removeClass ('li_orange_s');
    $(this).addClass ('li_orange_s');

    $(this).parent().parent().find('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $(this).parent().parent().find('.knowBoxsRight').eq($(this).index()).addClass('knowBoxsRight_show');
  });

  // 棕色
  $('.li_brown').click(function() {
    $('.li_brown').removeClass ('li_brown_s');
    $(this).addClass ('li_brown_s');

    $(this).parent().parent().find('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $(this).parent().parent().find('.knowBoxsRight').eq($(this).index()).addClass('knowBoxsRight_show');
  });

  // 移至 public2.js
  // 手機版 select
  // $("#m_sel").change(function () {
  //   let i = $(this).val()

  //   $('.knowselect').removeClass('knowselect_show');
  //   $('.knowselect').eq(i).addClass('knowselect_show');
  // });

  // 網頁版 select
  // #k_sel 修改為 .k_sel 
  // $(".k_sel").change(function () {
  //   let i = $(this).val()
    
  //   $('.knowBoxsRight').removeClass('knowBoxsRight_show');
  //   $('.knowBoxsRight').eq(i).addClass('knowBoxsRight_show');
  
  // });


  //首頁手機・輪播圖
    var curIndex=0;//初始化
    var img_number = document.getElementsByClassName('tabImg').length;
    var _timer = setInterval(runFn,5000);//5秒
    function runFn(){ //運行定時器         
      curIndex = ++curIndex == img_number ? 0 : curIndex;//演算法 4為banner圖片數量
      slideTo(curIndex);
     }
     
     //圓點點擊切換輪播圖
    //  window.onload = function  () {    //為按鈕初始化onclick事件
    //   var tbs = document.getElementsByClassName("tabBtn");
    //   for(var i=0;i<tbs.length;i++){
    //     tbs[i].onclick = function  () {
    //       clearInterval(_timer);//細節處理，關閉定時，防止點切圖和定時器函數衝突
    //       slideTo(this.attributes['num'].value);
    //       curIndex = this.attributes['num'].value
    //       _timer = setInterval(runFn,2000);//點擊事件處理完成，繼續開啟定時輪播
    //     }
    //   }
    // }

    var prve = document.getElementsByClassName("prve");
    if (prve.length) {
      prve[0].onclick = function () {//上一張
        clearInterval(_timer);//細節處理，關閉定時，防止點切圖和定時器函數衝突
        curIndex--;
        if(curIndex == -1){
          curIndex = img_number-1;
        }
        slideTo(curIndex);
        _timer = setInterval(runFn,2000);//點擊事件處理完成，繼續開啟定時輪播
      }
    }
    var next = document.getElementsByClassName("next");
    if (next.length) {
      next[0].onclick = function () {//下一張
        clearInterval(_timer);//細節處理，關閉定時，防止點切圖和定時器函數衝突
        curIndex++;
        if(curIndex == img_number){
          curIndex =0;
        }
        slideTo(curIndex);
        _timer = setInterval(runFn,2000);//點擊事件處理完成，繼續開啟定時輪播
      }
    }
    

    // 光箱
    $('.showModel').click(function() {
      $('#myModel').addClass('showModel')

      $('#myModel .model_boxs.box_' + $(this).data('id')).addClass('l_show').siblings().removeClass('l_show')
    })

    $('.btn_close, .t-close, .btn_delete, .lB').click(function() {
      $('#myModel').removeClass('showModel')
    })

    
    //切換banner圖片 和 按鈕樣式
    function slideTo(index){
      var index = parseInt(index);//轉int類型
      var images = document.getElementsByClassName('tabImg');
      for(var i=0;i<images.length;i++){//遍歷每個圖片
        if( i == index ){
          images[i].style.display = 'inline';//顯示            
        }else{
          images[i].style.display = 'none';//隱藏
        }
      }
      var tabBtn = document.getElementsByClassName('tabBtn');
      for(var j=0;j<tabBtn.length;j++){//遍歷每個按鈕
        if( j == index ){
          tabBtn[j].classList.add("hover");    //添加輪播按鈕hover樣式
          curIndex=j;
        }else{
          tabBtn[j].classList.remove("hover");//去除輪播按鈕hover樣式
        }
      }
    }

    // 互動學員 banner1
    $('.banner1').each(function() {
      let $banner = $(this)

      let $bottom = $banner.find('.bottom').empty()

      let total = $banner.find('.box').length

      let MaxPage = Math.ceil(total / 3)

      let getPage = n => parseInt($banner.attr('p'), 10) + n
      let setPage = p => $banner.attr('p', p)

      $banner.find('.left').click(_ => {
        let p = getPage(-1)
        setPage(p < 1 ? MaxPage : p)
      })
      $banner.find('.right').click(_ => {
        let p = getPage(+1)
        setPage(p > MaxPage ? 1 : p)
      })

      for (let i = 0; i < MaxPage; i++)
        $bottom.append($('<label />').click(function() {
          setPage($(this).index() + 1)
        }))

      setPage(1)
    })

    // 互動學員 banner2
    $('.banner2').each(function() {
      let $banner = $(this)

      let $prev = $banner.find('.prev')
      let $next = $banner.find('.next')
      let $input = $banner.find('input')

      let total = $banner.find('.box').length
      let MaxPage = Math.ceil(total / 6)

      let getPage = n => parseInt($banner.attr('p'), 10) + n
      let setPage = p => $input.val($banner.attr('p', p).attr('p'))

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

      $banner.find('.page').text(MaxPage)
      setPage(1)
    })


    // 互動學員 banner3
  //   const Ajax = option => {
  //   const data = {
  //     2020: { 1: [{img: '', text: '2020-1 1 文字文字文字文字文字文字'}, {img: '', text: '2020-1 2 文字文字文字文字文字文字'}, {img: '', text: '2020-1 3 文字文字文字文字文字文字'}, {img: '', text: '2020-1 4 文字文字文字文字文字文字'}, {img: '', text: '2020-1 5 文字文字文字文字文字文字'}, {img: '', text: '2020-1 6 文字文字文字文字文字文字'}, {img: '', text: '2020-1 7 文字文字文字文字文字文字'}, {img: '', text: '2020-1 8 文字文字文字文字文字文字'}, {img: '', text: '2020-1 9 文字文字文字文字文字文字'}, {img: '', text: '2020-1 10 文字文字文字文字文字文字'}], 2: [{img: '', text: '2020-2 1 文字文字文字文字文字文字'}, {img: '', text: '2020-2 2 文字文字文字文字文字文字'}, {img: '', text: '2020-2 3 文字文字文字文字文字文字'}, {img: '', text: '2020-2 4 文字文字文字文字文字文字'}, {img: '', text: '2020-2 5 文字文字文字文字文字文字'}, {img: '', text: '2020-2 6 文字文字文字文字文字文字'}, {img: '', text: '2020-2 7 文字文字文字文字文字文字'}, {img: '', text: '2020-2 8 文字文字文字文字文字文字'}, {img: '', text: '2020-2 9 文字文字文字文字文字文字'}], 3: [{img: '', text: '2020-3 1 文字文字文字文字文字文字'}, {img: '', text: '2020-3 2 文字文字文字文字文字文字'}, {img: '', text: '2020-3 3 文字文字文字文字文字文字'}, {img: '', text: '2020-3 4 文字文字文字文字文字文字'}, {img: '', text: '2020-3 5 文字文字文字文字文字文字'}, {img: '', text: '2020-3 6 文字文字文字文字文字文字'}, {img: '', text: '2020-3 7 文字文字文字文字文字文字'}, {img: '', text: '2020-3 8 文字文字文字文字文字文字'}], 4: [{img: '', text: '2020-4 1 文字文字文字文字文字文字'}, {img: '', text: '2020-4 2 文字文字文字文字文字文字'}, {img: '', text: '2020-4 3 文字文字文字文字文字文字'}, {img: '', text: '2020-4 4 文字文字文字文字文字文字'}, {img: '', text: '2020-4 5 文字文字文字文字文字文字'}, {img: '', text: '2020-4 6 文字文字文字文字文字文字'}, {img: '', text: '2020-4 7 文字文字文字文字文字文字'}], 5: [{img: '', text: '2020-5 1 文字文字文字文字文字文字'}, {img: '', text: '2020-5 2 文字文字文字文字文字文字'}, {img: '', text: '2020-5 3 文字文字文字文字文字文字'}, {img: '', text: '2020-5 4 文字文字文字文字文字文字'}, {img: '', text: '2020-5 5 文字文字文字文字文字文字'}, {img: '', text: '2020-5 6 文字文字文字文字文字文字'}, {img: '', text: '2020-5 7 文字文字文字文字文字文字'}, {img: '', text: '2020-5 8 文字文字文字文字文字文字'}, {img: '', text: '2020-5 9 文字文字文字文字文字文字'}, {img: '', text: '2020-5 10 文字文字文字文字文字文字'}, {img: '', text: '2020-5 11 文字文字文字文字文字文字'}, {img: '', text: '2020-5 12 文字文字文字文字文字文字'}, {img: '', text: '2020-5 13 文字文字文字文字文字文字'}], 6: [{img: '', text: '2020-6 1 文字文字文字文字文字文字'}, {img: '', text: '2020-6 2 文字文字文字文字文字文字'}, {img: '', text: '2020-6 3 文字文字文字文字文字文字'}, {img: '', text: '2020-6 4 文字文字文字文字文字文字'}, {img: '', text: '2020-6 5 文字文字文字文字文字文字'}, {img: '', text: '2020-6 6 文字文字文字文字文字文字'}, {img: '', text: '2020-6 7 文字文字文字文字文字文字'}, {img: '', text: '2020-6 8 文字文字文字文字文字文字'}, {img: '', text: '2020-6 9 文字文字文字文字文字文字'}, {img: '', text: '2020-6 10 文字文字文字文字文字文字'}, {img: '', text: '2020-6 11 文字文字文字文字文字文字'}], 7: [{img: '', text: '2020-7 1 文字文字文字文字文字文字'}, {img: '', text: '2020-7 2 文字文字文字文字文字文字'}, {img: '', text: '2020-7 3 文字文字文字文字文字文字'}, {img: '', text: '2020-7 4 文字文字文字文字文字文字'}, {img: '', text: '2020-7 5 文字文字文字文字文字文字'}, {img: '', text: '2020-7 6 文字文字文字文字文字文字'}, {img: '', text: '2020-7 7 文字文字文字文字文字文字'}, {img: '', text: '2020-7 8 文字文字文字文字文字文字'}, {img: '', text: '2020-7 9 文字文字文字文字文字文字'}, {img: '', text: '2020-7 10 文字文字文字文字文字文字'}, {img: '', text: '2020-7 11 文字文字文字文字文字文字'}, {img: '', text: '2020-7 12 文字文字文字文字文字文字'}], 8: [{img: '', text: '2020-8 1 文字文字文字文字文字文字'}, {img: '', text: '2020-8 2 文字文字文字文字文字文字'}, {img: '', text: '2020-8 3 文字文字文字文字文字文字'}, {img: '', text: '2020-8 4 文字文字文字文字文字文字'}, {img: '', text: '2020-8 5 文字文字文字文字文字文字'}, {img: '', text: '2020-8 6 文字文字文字文字文字文字'}, {img: '', text: '2020-8 7 文字文字文字文字文字文字'}, {img: '', text: '2020-8 8 文字文字文字文字文字文字'}, {img: '', text: '2020-8 9 文字文字文字文字文字文字'}, {img: '', text: '2020-8 10 文字文字文字文字文字文字'}, {img: '', text: '2020-8 11 文字文字文字文字文字文字'}, {img: '', text: '2020-8 12 文字文字文字文字文字文字'}, {img: '', text: '2020-8 13 文字文字文字文字文字文字'}], 9: [{img: '', text: '2020-9 1 文字文字文字文字文字文字'}, {img: '', text: '2020-9 2 文字文字文字文字文字文字'}, {img: '', text: '2020-9 3 文字文字文字文字文字文字'}, {img: '', text: '2020-9 4 文字文字文字文字文字文字'}, {img: '', text: '2020-9 5 文字文字文字文字文字文字'}, {img: '', text: '2020-9 6 文字文字文字文字文字文字'}, {img: '', text: '2020-9 7 文字文字文字文字文字文字'}, {img: '', text: '2020-9 8 文字文字文字文字文字文字'}, {img: '', text: '2020-9 9 文字文字文字文字文字文字'}, {img: '', text: '2020-9 10 文字文字文字文字文字文字'}, {img: '', text: '2020-9 11 文字文字文字文字文字文字'}, {img: '', text: '2020-9 12 文字文字文字文字文字文字'}, {img: '', text: '2020-9 13 文字文字文字文字文字文字'}, {img: '', text: '2020-9 14 文字文字文字文字文字文字'}], 10: [{img: '', text: '2020-10 1 文字文字文字文字文字文字'}, {img: '', text: '2020-10 2 文字文字文字文字文字文字'}, {img: '', text: '2020-10 3 文字文字文字文字文字文字'}, {img: '', text: '2020-10 4 文字文字文字文字文字文字'}, {img: '', text: '2020-10 5 文字文字文字文字文字文字'}, {img: '', text: '2020-10 6 文字文字文字文字文字文字'}, {img: '', text: '2020-10 7 文字文字文字文字文字文字'}, {img: '', text: '2020-10 8 文字文字文字文字文字文字'}, {img: '', text: '2020-10 9 文字文字文字文字文字文字'}, {img: '', text: '2020-10 10 文字文字文字文字文字文字'}, {img: '', text: '2020-10 11 文字文字文字文字文字文字'}, {img: '', text: '2020-10 12 文字文字文字文字文字文字'}, {img: '', text: '2020-10 13 文字文字文字文字文字文字'}, {img: '', text: '2020-10 14 文字文字文字文字文字文字'}, {img: '', text: '2020-10 15 文字文字文字文字文字文字'}], 11: [{img: '', text: '2020-11 1 文字文字文字文字文字文字'}, {img: '', text: '2020-11 2 文字文字文字文字文字文字'}, {img: '', text: '2020-11 3 文字文字文字文字文字文字'}, {img: '', text: '2020-11 4 文字文字文字文字文字文字'}, {img: '', text: '2020-11 5 文字文字文字文字文字文字'}, {img: '', text: '2020-11 6 文字文字文字文字文字文字'}, {img: '', text: '2020-11 7 文字文字文字文字文字文字'}, {img: '', text: '2020-11 8 文字文字文字文字文字文字'}, {img: '', text: '2020-11 9 文字文字文字文字文字文字'}, {img: '', text: '2020-11 10 文字文字文字文字文字文字'}, {img: '', text: '2020-11 11 文字文字文字文字文字文字'}, {img: '', text: '2020-11 12 文字文字文字文字文字文字'}, {img: '', text: '2020-11 13 文字文字文字文字文字文字'}, {img: '', text: '2020-11 14 文字文字文字文字文字文字'}, {img: '', text: '2020-11 15 文字文字文字文字文字文字'}, {img: '', text: '2020-11 16 文字文字文字文字文字文字'}], 12: [{img: '', text: '2020-12 1 文字文字文字文字文字文字'}, {img: '', text: '2020-12 2 文字文字文字文字文字文字'}, {img: '', text: '2020-12 3 文字文字文字文字文字文字'}, {img: '', text: '2020-12 4 文字文字文字文字文字文字'}, {img: '', text: '2020-12 5 文字文字文字文字文字文字'}, {img: '', text: '2020-12 6 文字文字文字文字文字文字'}, {img: '', text: '2020-12 7 文字文字文字文字文字文字'}, {img: '', text: '2020-12 8 文字文字文字文字文字文字'}, {img: '', text: '2020-12 9 文字文字文字文字文字文字'}, {img: '', text: '2020-12 10 文字文字文字文字文字文字'}, {img: '', text: '2020-12 11 文字文字文字文字文字文字'}, {img: '', text: '2020-12 12 文字文字文字文字文字文字'}, {img: '', text: '2020-12 13 文字文字文字文字文字文字'}, {img: '', text: '2020-12 14 文字文字文字文字文字文字'}, {img: '', text: '2020-12 15 文字文字文字文字文字文字'}, {img: '', text: '2020-12 16 文字文字文字文字文字文字'}, {img: '', text: '2020-12 17 文字文字文字文字文字文字'}], },
  //     2021: { 1: [{img: '', text: '2021-1 1 文字文字文字文字文字文字'}, {img: '', text: '2021-1 2 文字文字文字文字文字文字'}, {img: '', text: '2021-1 3 文字文字文字文字文字文字'}, {img: '', text: '2021-1 4 文字文字文字文字文字文字'}, {img: '', text: '2021-1 5 文字文字文字文字文字文字'}, {img: '', text: '2021-1 6 文字文字文字文字文字文字'}, {img: '', text: '2021-1 7 文字文字文字文字文字文字'}, {img: '', text: '2021-1 8 文字文字文字文字文字文字'}, {img: '', text: '2021-1 9 文字文字文字文字文字文字'}, {img: '', text: '2021-1 10 文字文字文字文字文字文字'}], 2: [{img: '', text: '2021-2 1 文字文字文字文字文字文字'}, {img: '', text: '2021-2 2 文字文字文字文字文字文字'}, {img: '', text: '2021-2 3 文字文字文字文字文字文字'}, {img: '', text: '2021-2 4 文字文字文字文字文字文字'}, {img: '', text: '2021-2 5 文字文字文字文字文字文字'}, {img: '', text: '2021-2 6 文字文字文字文字文字文字'}, {img: '', text: '2021-2 7 文字文字文字文字文字文字'}, {img: '', text: '2021-2 8 文字文字文字文字文字文字'}, {img: '', text: '2021-2 9 文字文字文字文字文字文字'}], 3: [{img: '', text: '2021-3 1 文字文字文字文字文字文字'}, {img: '', text: '2021-3 2 文字文字文字文字文字文字'}, {img: '', text: '2021-3 3 文字文字文字文字文字文字'}, {img: '', text: '2021-3 4 文字文字文字文字文字文字'}, {img: '', text: '2021-3 5 文字文字文字文字文字文字'}, {img: '', text: '2021-3 6 文字文字文字文字文字文字'}, {img: '', text: '2021-3 7 文字文字文字文字文字文字'}, {img: '', text: '2021-3 8 文字文字文字文字文字文字'}], 4: [{img: '', text: '2021-4 1 文字文字文字文字文字文字'}, {img: '', text: '2021-4 2 文字文字文字文字文字文字'}, {img: '', text: '2021-4 3 文字文字文字文字文字文字'}, {img: '', text: '2021-4 4 文字文字文字文字文字文字'}, {img: '', text: '2021-4 5 文字文字文字文字文字文字'}, {img: '', text: '2021-4 6 文字文字文字文字文字文字'}, {img: '', text: '2021-4 7 文字文字文字文字文字文字'}], 5: [{img: '', text: '2021-5 1 文字文字文字文字文字文字'}, {img: '', text: '2021-5 2 文字文字文字文字文字文字'}, {img: '', text: '2021-5 3 文字文字文字文字文字文字'}, {img: '', text: '2021-5 4 文字文字文字文字文字文字'}, {img: '', text: '2021-5 5 文字文字文字文字文字文字'}, {img: '', text: '2021-5 6 文字文字文字文字文字文字'}, {img: '', text: '2021-5 7 文字文字文字文字文字文字'}, {img: '', text: '2021-5 8 文字文字文字文字文字文字'}, {img: '', text: '2021-5 9 文字文字文字文字文字文字'}, {img: '', text: '2021-5 10 文字文字文字文字文字文字'}, {img: '', text: '2021-5 11 文字文字文字文字文字文字'}, {img: '', text: '2021-5 12 文字文字文字文字文字文字'}, {img: '', text: '2021-5 13 文字文字文字文字文字文字'}], 6: [{img: '', text: '2021-6 1 文字文字文字文字文字文字'}, {img: '', text: '2021-6 2 文字文字文字文字文字文字'}, {img: '', text: '2021-6 3 文字文字文字文字文字文字'}, {img: '', text: '2021-6 4 文字文字文字文字文字文字'}, {img: '', text: '2021-6 5 文字文字文字文字文字文字'}, {img: '', text: '2021-6 6 文字文字文字文字文字文字'}, {img: '', text: '2021-6 7 文字文字文字文字文字文字'}, {img: '', text: '2021-6 8 文字文字文字文字文字文字'}, {img: '', text: '2021-6 9 文字文字文字文字文字文字'}, {img: '', text: '2021-6 10 文字文字文字文字文字文字'}, {img: '', text: '2021-6 11 文字文字文字文字文字文字'}], 7: [{img: '', text: '2021-7 1 文字文字文字文字文字文字'}, {img: '', text: '2021-7 2 文字文字文字文字文字文字'}, {img: '', text: '2021-7 3 文字文字文字文字文字文字'}, {img: '', text: '2021-7 4 文字文字文字文字文字文字'}, {img: '', text: '2021-7 5 文字文字文字文字文字文字'}, {img: '', text: '2021-7 6 文字文字文字文字文字文字'}, {img: '', text: '2021-7 7 文字文字文字文字文字文字'}, {img: '', text: '2021-7 8 文字文字文字文字文字文字'}, {img: '', text: '2021-7 9 文字文字文字文字文字文字'}, {img: '', text: '2021-7 10 文字文字文字文字文字文字'}, {img: '', text: '2021-7 11 文字文字文字文字文字文字'}, {img: '', text: '2021-7 12 文字文字文字文字文字文字'}], 8: [{img: '', text: '2021-8 1 文字文字文字文字文字文字'}, {img: '', text: '2021-8 2 文字文字文字文字文字文字'}, {img: '', text: '2021-8 3 文字文字文字文字文字文字'}, {img: '', text: '2021-8 4 文字文字文字文字文字文字'}, {img: '', text: '2021-8 5 文字文字文字文字文字文字'}, {img: '', text: '2021-8 6 文字文字文字文字文字文字'}, {img: '', text: '2021-8 7 文字文字文字文字文字文字'}, {img: '', text: '2021-8 8 文字文字文字文字文字文字'}, {img: '', text: '2021-8 9 文字文字文字文字文字文字'}, {img: '', text: '2021-8 10 文字文字文字文字文字文字'}, {img: '', text: '2021-8 11 文字文字文字文字文字文字'}, {img: '', text: '2021-8 12 文字文字文字文字文字文字'}, {img: '', text: '2021-8 13 文字文字文字文字文字文字'}], 9: [{img: '', text: '2021-9 1 文字文字文字文字文字文字'}, {img: '', text: '2021-9 2 文字文字文字文字文字文字'}, {img: '', text: '2021-9 3 文字文字文字文字文字文字'}, {img: '', text: '2021-9 4 文字文字文字文字文字文字'}, {img: '', text: '2021-9 5 文字文字文字文字文字文字'}, {img: '', text: '2021-9 6 文字文字文字文字文字文字'}, {img: '', text: '2021-9 7 文字文字文字文字文字文字'}, {img: '', text: '2021-9 8 文字文字文字文字文字文字'}, {img: '', text: '2021-9 9 文字文字文字文字文字文字'}, {img: '', text: '2021-9 10 文字文字文字文字文字文字'}, {img: '', text: '2021-9 11 文字文字文字文字文字文字'}, {img: '', text: '2021-9 12 文字文字文字文字文字文字'}, {img: '', text: '2021-9 13 文字文字文字文字文字文字'}, {img: '', text: '2021-9 14 文字文字文字文字文字文字'}], 10: [{img: '', text: '2021-10 1 文字文字文字文字文字文字'}, {img: '', text: '2021-10 2 文字文字文字文字文字文字'}, {img: '', text: '2021-10 3 文字文字文字文字文字文字'}, {img: '', text: '2021-10 4 文字文字文字文字文字文字'}, {img: '', text: '2021-10 5 文字文字文字文字文字文字'}, {img: '', text: '2021-10 6 文字文字文字文字文字文字'}, {img: '', text: '2021-10 7 文字文字文字文字文字文字'}, {img: '', text: '2021-10 8 文字文字文字文字文字文字'}, {img: '', text: '2021-10 9 文字文字文字文字文字文字'}, {img: '', text: '2021-10 10 文字文字文字文字文字文字'}, {img: '', text: '2021-10 11 文字文字文字文字文字文字'}, {img: '', text: '2021-10 12 文字文字文字文字文字文字'}, {img: '', text: '2021-10 13 文字文字文字文字文字文字'}, {img: '', text: '2021-10 14 文字文字文字文字文字文字'}, {img: '', text: '2021-10 15 文字文字文字文字文字文字'}], 11: [{img: '', text: '2021-11 1 文字文字文字文字文字文字'}, {img: '', text: '2021-11 2 文字文字文字文字文字文字'}, {img: '', text: '2021-11 3 文字文字文字文字文字文字'}, {img: '', text: '2021-11 4 文字文字文字文字文字文字'}, {img: '', text: '2021-11 5 文字文字文字文字文字文字'}, {img: '', text: '2021-11 6 文字文字文字文字文字文字'}, {img: '', text: '2021-11 7 文字文字文字文字文字文字'}, {img: '', text: '2021-11 8 文字文字文字文字文字文字'}, {img: '', text: '2021-11 9 文字文字文字文字文字文字'}, {img: '', text: '2021-11 10 文字文字文字文字文字文字'}, {img: '', text: '2021-11 11 文字文字文字文字文字文字'}, {img: '', text: '2021-11 12 文字文字文字文字文字文字'}, {img: '', text: '2021-11 13 文字文字文字文字文字文字'}, {img: '', text: '2021-11 14 文字文字文字文字文字文字'}, {img: '', text: '2021-11 15 文字文字文字文字文字文字'}, {img: '', text: '2021-11 16 文字文字文字文字文字文字'}], 12: [{img: '', text: '2021-12 1 文字文字文字文字文字文字'}, {img: '', text: '2021-12 2 文字文字文字文字文字文字'}, {img: '', text: '2021-12 3 文字文字文字文字文字文字'}, {img: '', text: '2021-12 4 文字文字文字文字文字文字'}, {img: '', text: '2021-12 5 文字文字文字文字文字文字'}, {img: '', text: '2021-12 6 文字文字文字文字文字文字'}, {img: '', text: '2021-12 7 文字文字文字文字文字文字'}, {img: '', text: '2021-12 8 文字文字文字文字文字文字'}, {img: '', text: '2021-12 9 文字文字文字文字文字文字'}, {img: '', text: '2021-12 10 文字文字文字文字文字文字'}, {img: '', text: '2021-12 11 文字文字文字文字文字文字'}, {img: '', text: '2021-12 12 文字文字文字文字文字文字'}, {img: '', text: '2021-12 13 文字文字文字文字文字文字'}, {img: '', text: '2021-12 14 文字文字文字文字文字文字'}, {img: '', text: '2021-12 15 文字文字文字文字文字文字'}, {img: '', text: '2021-12 16 文字文字文字文字文字文字'}, {img: '', text: '2021-12 17 文字文字文字文字文字文字'}], },
  //   }

  //   const dataY = data[option.data.year]
  //   if (dataY === undefined) return option.fail && option.fail('找不到資料。'), option.complete && option.complete()
    
  //   const dataM = dataY[option.data.month]
  //   if (dataM === undefined) return option.fail && option.fail('找不到資料。'), option.complete && option.complete()
    
  //   return setTimeout(_ => {
  //     option.done && option.done({ boxs: dataM }), option.complete && option.complete()
  //   }, 100)
  // }

  // $('.banner3').each(function() {
  //   let $banner = $(this)

  //   let $prev = $banner.find('.prev')
  //   let $next = $banner.find('.next')
  //   let $input = $banner.find('input')
  //   let $year = $banner.find('.year').empty()
  //   let $months = $banner.find('.months').empty()
  //   let timer = null

  //   let $boxs = $banner.find('.boxs')
  //   let total = 0
  //   let MaxPage = 0

  //   let getDate = ({ y = 0, m = 0 } = {}) => ({
  //     y: parseInt($banner.attr('y'), 10) + y,
  //     m: parseInt($banner.attr('m'), 10) + m,
  //   })


  //   let getPage = n => parseInt($banner.attr('p'), 10) + n
  //   let setPage = p => $input.val($banner.attr('p', p).attr('p'))

  //   let initBoxs = boxs => {
  //     let initBox = box => $('<div />').addClass('box').append(
  //       $('<img />').attr('src', box.img)).append(
  //       $('<span />').text(box.text))

  //       $boxs.empty()

  //       for (let box of boxs)
  //         $boxs.append(initBox(box))

  //       total = boxs.length
  //       MaxPage = Math.ceil(total / 6)

  //       $banner.find('.page').text(MaxPage)
  //       setPage(1)
  //       $banner.removeAttr('empty')
  //     }

  //     let setDate = ({ y = null, m = null }) => {
  //       y && $year.text($banner.attr('y', y).attr('y'))
  //       m && $banner.attr('m', m)
        
  //       timer = setTimeout(_ => {

  //         const { y: year, m: month } = getDate()
  //         $banner.attr('empty', '')

  //         // 呼叫 Ajax，傳入參數 year, month
  //         Ajax({
  //           data: { year, month },
  //           done: ({ boxs }) => initBoxs(boxs),
  //           fail: message => $banner.attr('empty', message)
  //         })

  //       }, 500, clearTimeout(timer))
  //     }

  //     let y  = parseInt($banner.attr('y') || new Date().getFullYear(), 10)
  //     let m = parseInt($banner.attr('m') || new Date().getMonth() + 1, 10)

  //     setDate({ y })
  //     setDate({ m })

  //     for (let i = 0; i < 12; i++)
  //       $months.append($('<label />').click(function() {
  //         setDate({ m: $(this).index() + 1 })
  //       }))

  //     $banner.find('.left-y').click(_ => setDate(getDate({ y: -1 })))
  //     $banner.find('.right-y').click(_ => setDate(getDate({ y: +1 })))

  //     $input.keyup(function() {
  //       let p = getPage(0)
  //       setPage(isNaN(p) || p > MaxPage || MaxPage < 1 ? 1 : p)
  //     })

  //     $prev.click(_ => {
  //       let p = getPage(-1)
  //       setPage(p < 1 ? MaxPage : p)
  //     })
  //     $next.click(_ => {
  //       let p = getPage(+1)
  //       setPage(p > MaxPage ? 1 : p)
  //     })

  //     $banner.find('.first').click(_ => setPage(1))
  //     $banner.find('.last').click(_ => setPage(MaxPage))
  //     $banner.find('.left').click(_ => $prev.click())
  //     $banner.find('.right').click(_ => $next.click())
  //   })



  $('.weekBoxs').each(function() {
    let $banner = $(this)
    let $moBox = $banner.find('.moBox')
    let $moBoxs = $banner.find('.moBox .mo')
    let $weekCent = $banner.find('.weekCent')
    let index = $moBoxs.filter('.now').index()

    let $left = $banner.find('.left').click(_ => {
      $moBoxs.filter('.now').removeClass('now')
      $moBoxs.eq(index = (index == 0 ? $moBoxs.length : index) - 1).addClass('now')
      $weekCent.removeClass('show').eq(index).addClass('show')
      if (index > 6)
        $moBox.attr('n2', '1')
      else
        $moBox.removeAttr('n2', '1')
    })
    let $right = $banner.find('.right').click(_ => {
      $moBoxs.filter('.now').removeClass('now')
      $moBoxs.eq(index = (index == $moBoxs.length - 1 ? 0 : (index + 1))).addClass('now')
      $weekCent.removeClass('show').eq(index).addClass('show')
      
      if (index >= 6)
        $moBox.attr('n2', '1')
      else
        $moBox.removeAttr('n2', '1')
    })

    $moBoxs.filter(':not(.future)').click(function() {
      index = $(this).index()
      $moBoxs.filter('.now').removeClass('now')
      $moBoxs.eq(index).addClass('now')
      $weekCent.removeClass('show').eq(index).addClass('show')
      if (index > 6)
        $moBox.attr('n2', '1')
      else
        $moBox.removeAttr('n2', '1')
    });

    $weekCent.removeClass('show').eq(index).addClass('show')

  })

});



