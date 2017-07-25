var cat_id = $.getQueryString('cat_id');

shop.api.fetchGoodsCategory(function(response){
  var html = '';
  for(var i = 0;i<response.data.length;i++){
    var obj = response.data[i];
    html+='<a class="list-left-ul-a" href="list.html?cat_id='+obj.cat_id
    +'">'
    +'<li>'
    +obj.cat_name
    +'</li>'
    +'</a>'
  }
  $('.list-left-ul').append(html);
})

shop.api.fetchGoodsListByCatId(cat_id,function(response){
   var html = '';
   for(var i = 0;i<response.data.length;i++){
     var obj = response.data[i];
     html+='<li>'
     +'<a href="detail.html?goods_id='+ obj.goods_id
     +'">'
     + '<img class="main" src = "'
     + obj.goods_thumb
     +'" alt="">'
     +'<div class="list-right-ul-li-down">'
     +'<p class="listAjax-ul-p">'
     + obj.goods_name
     +'</p>'
     +'<p class="list-right-price">¥ '
     + obj.price
     +'</p>'
     +'</div>'
     +'</a>'
     +'</li>'
   }
   $('.list-right-ul').append(html);
})

window.oninput = function(){
  location.href = 'search.html'
}
