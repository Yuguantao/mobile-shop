var goBack = document.querySelector('.go-back');
console.log(goBack);
goBack.onclick = function(){
  location.href = "index.html";
}
$('#forget-pwd').click(function(){
  $('#retrive-pwd-mask').css('display','block');
  $('#retrive-pwd').slideDown(500);
})
$('#retrive-pwd-mask').click(function(){
  $('#retrive-pwd').slideUp(500);
  $('#retrive-pwd-mask').css('display','none');
})
$('#cancel-retrive').click(function(){
  $('#retrive-pwd').slideUp(500);
  $('#retrive-pwd-mask').css('display','none');
})

$('#btn-login').click(function(){
  var username = $('input[name="username"]').val();
  var password = $('input[name="password"]').val()
  console.log([username, password]);
  shop.api.login(username,password,function(response){
    if (response.code === 0) {
      var data = response.data;
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          localStorage.setItem(prop, data[prop]);
        }
      }
      //判断有callbackurl则跳回到指定的callbackurl页面, 否则跳到首页
      var callbackurl = location.hash.substr(13);
      if (callbackurl) {
        location.assign(callbackurl);
      } else {
        location.assign('index.html');
      }
    }
  })
})
