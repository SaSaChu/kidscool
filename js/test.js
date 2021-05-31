// function findOpenTarget(_ul , _li_ary , _selfTop) {
//     var _openTarget = null;
//     var targetInTail;
//     console.log(_selfTop, _li_ary.length)
//     for(var i = 0; i < _li_ary.length; i++) {
//         console.log(i+":"+$(_li_ary[i]).offset().top, _selfTop)
//         if( $(_li_ary[i]).offset().top > _selfTop ){
//             _openTarget = _li_ary[i];//找出高度高於自身的第一個
//             targetInTail = false;//不是插入到最末端
//             break;
//         }
//     }

//     console.log('target:'+ _openTarget )
    
    
//     if(_openTarget == null){//沒有高度大於自身的<LI> 或目前只有一個<LI> , 插入到尾端
//         targetInTail = true;
//         _openTarget = $(_ul).find(' > div').last()[0];
//     }
//     return {
//         inTail:targetInTail,
//         target:_openTarget
//     };
// }

// $(function() {
    

//     $('.knowCent').on('click', function(e) {

//         var newRow = '<div class="infoWrapper"></div>'
//         var _t = e.currentTarget;
//         var _li = $(_t).closest('div')[0];//按鈕所屬的產品<li>
//         var _ul = $(_t).closest('.knowCentBoxs')[0];//產品<li> 所屬的<ul class="list">
//         var item_ary = $(_ul).find('> div').not(_li);//開啟產品<li> 所屬同一清單<ul class="list"> 內的其餘產品<li>
//         var selfTop = $(_li).offset().top;
//         var ans = findOpenTarget(_ul , item_ary , selfTop)
//         var targetInTail = ans.inTail;
//         var _openTarget = ans.target;
        
//         $(newRow)
//         .append($(_li).find(".infoHolder").children())
//         .attr("data-view-id", $(_li).attr("data-view-id")); //將產品內的詳細內容移入展開用的容器內

//         if(targetInTail == false){//插入在開啟產品<li> 的前一個
//             $(newRow).insertBefore(_openTarget).addClass('metest');
//         } else {//插入在開啟產品<li> 的後一個
//             $(newRow).insertAfter(_openTarget).addClass('metest');
//         }
//     })
// });
  
 
$(function() {
    
    var kl = {
        Method: {
            copyInfo: function(e) {
                var _t = e.currentTarget;
                var copy = $(_t).find('.infoHolder').html();
                return copy;
            },
            findOpenTarget : function(_ul , _li_ary , _selfTop) {
                var _openTarget = null;
                var targetInTail;
                for(var i = 0; i < _li_ary.length; i++) {
                    if( $(_li_ary[i]).offset().top > _selfTop ){
                        _openTarget = _li_ary[i];//找出高度高於自身的第一個
                        targetInTail = false;//不是插入到最末端
                        break;
                    }
                }

                if(_openTarget == null){//沒有高度大於自身的<LI> 或目前只有一個<LI> , 插入到尾端
                    targetInTail = true;
                    _openTarget = $(_ul).find(' > div').last()[0];
                }
                return {
                    inTail:targetInTail,
                    target:_openTarget
                };
            },
            showInfo: function (e) {
                
                var newRow = '<div class="infoWrapper"></div>'
                var _t = e.currentTarget;
                var _li = $(_t).closest('div')[0];//按鈕所屬的產品<li>
                var _ul = $(_t).closest('.knowCentBoxs')[0];//產品<li> 所屬的<ul class="list">
                var wrapper = $(_ul).find('.infoWrapper');
                var item_ary = $(_ul).find('> div').not(_li);//開啟產品<li> 所屬同一清單<ul class="list"> 內的其餘產品<li>
                var selfTop = $(_li).offset().top;
                var ans = kl.Method.findOpenTarget(_ul , item_ary , selfTop)
                var targetInTail = ans.inTail;
                var _openTarget = ans.target;

                
                $(newRow).append($(_li).find(".infoHolder").html()); //將產品內的詳細內容移入展開用的容器內
                if(targetInTail == false){//插入在開啟產品<li> 的前一個
                    $(newRow).insertBefore(_openTarget);//.addClass('metest');
                } else {//插入在開啟產品<li> 的後一個
                    $(newRow).insertAfter(_openTarget);//.addClass('metest');
                }
                
                $(_ul).find('.infoWrapper').addClass(($(_ul).attr('data-color')));
                $(_ul).find('.infoWrapper').append($(_li).find('.infoHolder').text());
                
                $(wrapper).remove();                   
            }, 
            hideInfo: function(e) {
                var _t = e.currentTarget;
                var _ul = $(_t).closest('.knowCentBoxs')[0];//產品<li> 所屬的<ul class="list"> 
                var wrapper = $(_ul).find('.infoWrapper');

                $('.infoWrapper .btn-info-close').click(function(e){
                    $(wrapper).remove();  
                })
            }
        },
        init: function() {
            $('.knowCent').click(function(e){
                kl.Method.showInfo(e);
                kl.Method.hideInfo(e);
            })
        }, 
    }
    kl.init();
    
})
  
  