$(function() {

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
    $that.find ('.m-menu-t').click (function () {
      $(this).toggleClass ('s');
    });
  });



  // 切換tab(上面) - 五個顏色
  // 綠色
  $('.knowBtn.btn_green').click(function() {
    $('.knowBtn.btn_green').removeClass ('green_s');
    $(this).addClass ('green_s');

    $('.knowselect').removeClass('knowselect_show');
    $('.knowselect').eq($(this).index()).addClass('knowselect_show');
  });
  $('.knowBtn.btn_green').eq (0).click();

  // 藍色
  $('.knowBtn.btn_blue').click(function() {
    $('.knowBtn.btn_blue').removeClass ('blue_s');
    $(this).addClass ('blue_s');

    $('.knowselect').removeClass('knowselect_show');
    $('.knowselect').eq($(this).index()).addClass('knowselect_show');
  });
  $('.knowBtn.btn_blue').eq (0).click();

  // 紫色
  $('.knowBtn.btn_purple').click(function() {
    $('.knowBtn.btn_purple').removeClass ('purple_s');
    $(this).addClass ('purple_s');

    $('.knowselect').removeClass('knowselect_show');
    $('.knowselect').eq($(this).index()).addClass('knowselect_show');
  });
  $('.knowBtn.btn_purple').eq (0).click();

  // 橘色
  $('.knowBtn.btn_orange').click(function() {
    $('.knowBtn.btn_orange').removeClass ('orange_s');
    $(this).addClass ('orange_s');

    $('.knowselect').removeClass('knowselect_show');
    $('.knowselect').eq($(this).index()).addClass('knowselect_show');
  });
  $('.knowBtn.btn_orange').eq (0).click();

  // 棕色
  $('.knowBtn.btn_brown').click(function() {
    $('.knowBtn.btn_brown').removeClass ('brown_s');
    $(this).addClass ('brown_s');

    $('.knowselect').removeClass('knowselect_show');
    $('.knowselect').eq($(this).index()).addClass('knowselect_show');
  });
  $('.knowBtn.btn_brown').eq (0).click();



  // 切換tab(左邊)
  $('.li_green').click(function() {
    $('.li_green').removeClass ('li_green_s');
    $(this).addClass ('li_green_s');

    $('.knowBoxsRight').removeClass('knowBoxsRight_show');
    $('.knowBoxsRight').eq($(this).index()).addClass('knowBoxsRight_show');
  });

  $('.li_green').eq (0).click();



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
    prve[0].onclick = function () {//上一張
      clearInterval(_timer);//細節處理，關閉定時，防止點切圖和定時器函數衝突
      curIndex--;
      if(curIndex == -1){
        curIndex = img_number-1;
      }
      slideTo(curIndex);
      _timer = setInterval(runFn,2000);//點擊事件處理完成，繼續開啟定時輪播
    }
    
    var next = document.getElementsByClassName("next");
    next[0].onclick = function () {//下一張
      clearInterval(_timer);//細節處理，關閉定時，防止點切圖和定時器函數衝突
      curIndex++;
      if(curIndex == img_number){
        curIndex =0;
      }
      slideTo(curIndex);
      _timer = setInterval(runFn,2000);//點擊事件處理完成，繼續開啟定時輪播
    }
    
    //切換banner圖片 和 按鈕樣式
    function slideTo(index){
      console.log(index)
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
});



