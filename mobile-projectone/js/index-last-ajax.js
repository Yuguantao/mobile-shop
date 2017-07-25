var lastAjax = document.querySelector('.last-ajax');
var lastAjaxUl = document.querySelector('.last-ajax-ul');
// console.log(lastAjax,lastAjaxUl);
var page = 1;
var pagesize = 20;

$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  var scrollHeight = $(document).height();
  var windowHeight = $(this).height();
  // console.log(scrollTop,scrollHeight,windowHeight);
  if(scrollTop + windowHeight >= scrollHeight){
      page++;
      console.log(page);
      if(page > 4){
          page = 4;
          return;
      }
      shop.api.fetchHotGoods(page,20,function(response){
        var html = '';
        for(var i = 0;i<response.data.length;i++){
          var obj = response.data[i];
          html+='<li>'
          +'<a href="detail.html?goods_id='+ obj.goods_id
          +'">'
          + '<img class="main" src = "'
          + obj.goods_thumb
          +'" alt="">'
          +'<div class="last-ajax-ul-li-down">'
          +'<p class="lastAjax-ul-p">'
          + obj.goods_name
          +'</p>'
          +'<p class="last-ajax-price">¥ '
          + obj.price
          +'</p>'
          +'</div>'
          +'</a>'
          +'</li>'
        }
        $('.last-ajax-ul').append(html);
      })
      if(page>=4){
        $('body').append('<span class="goTop"></span>');
      }
      $('.goTop').click(function(scrollTop){
          $("html body").animate({scrollTop:0}, 500);
          $('.goTop').css("display","none");
      })
  }
});
