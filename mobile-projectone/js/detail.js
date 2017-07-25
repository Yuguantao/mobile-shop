var goods_id = $.getQueryString('goods_id');
var shopDetail = document.createElement('div');
console.log(goods_id);
shop.api.fetchGoodsDetail(goods_id, function(response){
    var html = '';
    var addtoCart = '';
    for(var i = 0;i<1;i++){
      var obj = response.data[i];
      html+='<div class="detail-img">'
      +'<img src = "'
      + obj.goods_thumb
      +'" alt="">'
      +'<p>'
      + obj.goods_name
      +'</p>'
      +'</div>'
      +'<p class="detail-price">　¥ '
      +obj.price
      +'</p>';
      addtoCart+='<div class="thumb-img">'
      +'<img src = "'
      + obj.goods_thumb
      +'" alt="">'
      +'<p> ¥'
      + obj.price
      +'</p>'
      +'<p>'
      + obj.goods_name
      +'</p>'
      +'</div>'
    }
    shopDetail.innerHTML = html;
    $('.content').append(shopDetail);
    $('.infos').append(addtoCart);
  })
  var dropdownisopen = true;
  $('.dropdown').click(function(){
    if(dropdownisopen){
      $('.dropdown').css('backgroundImage','url(image/收起1.png)');
      $('.discount-folder-parent').slideDown(500);
    }else{
      $('.dropdown').css('backgroundImage','url(image/下拉1.png)');
      $('.discount-folder-parent').slideUp(500);
    }
    dropdownisopen = !dropdownisopen;
  })

  $('#addtoCart').click(function(){
    $('.add-cart').slideDown(500);
  })
  $('.close-cart').click(function(){
    $('.add-cart').slideUp(500);
  })
  var oNumber = $('input[name=number]').val();
  $('.reduce').click(function(){
      oNumber--;
      if(oNumber<1) oNumber = 1;
      $('input[name=number]').val(oNumber);
  })
  $('.add').click(function(){
      oNumber++;
      $('input[name=number]').val(oNumber);
  })
  $('.btn').click(function(){
    if (!localStorage.token) {
      location.href = 'login.html#callbackurl='+location.href;
      return;
    }
    var goods_number = localStorage.getItem('cart'+goods_id);
    goods_number = goods_number ? parseInt(goods_number)+1 : 1;
    updateCartInfo(goods_id, goods_number, function(response){
      location.href = 'cart.html?';
    });
  })
