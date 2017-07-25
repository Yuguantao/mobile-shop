


$('.message').click(function(){
  var oSearchText = document.getElementById('search-text');
  searchText = oSearchText.value;
  var search_text= $.getQueryString('searchText');
  // location.href = 'search.html?search_text='+searchText;
  searchGoods();
})

function searchGoods (){
  shop.api.searchGoods({
    "search_text": searchText,
    "page": 1,
    "pagesize": 10,
    "callback": function(response) {
      var html = '';
      for(var i = 0;i<response.data.length;i++){
        var obj = response.data[i];
        html+='<li>'
        +'<a href="detail.html?goods_id='+ obj.goods_id
        +'">'
        + '<img class="main" src = "'
        + obj.goods_thumb
        +'" alt="">'
        +'<div class="search-down-ul-down">'
        +'<p class="search-down-ul-p">'
        + obj.goods_name
        +'</p>'
        +'<p class="search-down-ul-price">¥ '
        + obj.price
        +'</p>'
        +'</div>'
        +'</a>'
        +'</li>'
      }
      $('.search-down-ul').append(html);
    }
  });
}
