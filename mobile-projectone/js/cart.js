var editisopen = true;
$('.nav-btn').click(function(){
  if(editisopen){
    $('.nav-btn').text('完成');
    $('.numDiv').slideDown(300);
    $('input[class="checkbox"]').prop('checked',false);
  }else{
    $('.nav-btn').text('编辑');
    $('.numDiv').slideUp(300);
  }
  editisopen = !editisopen;
})



function updateCartInfo(goods_id, goods_number, callback) {
  $.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
    "type": "POST",
    "data": {
      "goods_id": goods_id,
      "number": goods_number
    },
    "dataType": "json",
    "success": function(response) {
      console.log(response);
      //加入购物车了之后把商品ID和对应的数量存储到本地
      localStorage.setItem('cart'+goods_id, goods_number);
      callback(response);
    }
  });
}

$.ajax({
  'url':'http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.getItem('token'),
  'type':'get',
  'dataType':'json',
  'success':function(response) {
    for (var i = 0; i < response.data.length; i++) {
      var obj = response.data[i];
      $('.cart-goods').append('<li class="oLi">'
          + '<input class="checkbox" type="checkbox">'
          + '<input type="hidden" class="goods_id" value="'
          + obj.goods_id
          +'">'
          + '<div class="goodsDiv">'
          + '<img src="'
          + obj.goods_thumb
          + '">'
          + '<h3>'
          + obj.goods_name
          + '</h3>'
          + '<span class="priceSpan goods_price"> ¥'
          + obj.goods_price
          + '</span>'
          + '</div>'
          + '<div class="numDiv">'
          + '<button class="reduce minus" onselectstart="return false" id="'
          + obj.goods_id
          + '"onclick="minusGoods(this)">-</button>'
          + '<input class="inputNum goods_number" type="text" value="'
          + obj.goods_number
          + '"  onblur="setGoods(this)" onkeyup="stepSetGoods(this, event)" >'
          + '<button class="add plus"  onselectstart="return false" id="'
          + obj.goods_id
          +'"onclick="plusGoods(this)">+</button>'
          + '<span class="priceSpan1"> ¥'
          + obj.goods_price
          + '</span>'
          +' <span class="delete" onclick="deleteGoods(this)">删除</span>'
          + '</div>'
          + '<span class="priceAdd subtotal"> ×'
          + obj.goods_number
          + '</span>'
          + '</li>'
      )
    }
  }

});
