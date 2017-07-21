var recommendDiv = document.querySelector('.recommend-Ajax');
var recommendUl = document.querySelector('.recommend-ul');
// console.log(recommendDiv,recommendUl);
shop.api.fetchHotGoods(1,20,function(response){
  var html = '';
  for(var i = 0;i<response.data.length;i++){
    var obj = response.data[i];
    html+='<li>'
    +'<a href="#">'
    + '<img src = "'
    + obj.goods_thumb
    +'" alt=""></a>'
    +'<p>¥ '
    +obj.price
    +'</p>'
    +'<p>'
    + obj.goods_name
    +'</p>'
    +'</li>'
  }
  recommendUl.innerHTML = html;
})
