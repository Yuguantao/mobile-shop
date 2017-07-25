var imgCheck = document.getElementById('img-check');
var imgCheckImg = imgCheck.getElementsByTagName('img');
console.log(imgCheck,imgCheckImg);
var count = 0;
for(var i = 0;i<imgCheckImg.length;i++){
  imgCheckImg[i].onclick = function(event){
    console.log(event.target);
    count++;
    if(event.target !== event.target) count = 0;
    $(this).css("transform",'rotateZ('+90*count+'deg)');
  }
}

$('.sendmessage').click(function(){
  $('.sendmessage').css('display','none');
})

$('.name').blur(function(){
  console.log( $(this).val() );
  shop.api.checkUsernameUnique($(this).val(), function(response){
      console.log(response);
      if (response.code === 0) {
        $('.sendmessage').css('display','block');
        $('.sendmessage').text('用户名可用');
        var data = response.data;
        for(var prop in data){
          if (data.hasOwnProperty(prop)) {
            localStorage.setItem(prop, data[prop]);
          }
        }
      } else if(response.code === 2001){//用户名已存在
        $('.sendmessage').css('display','block');
        $('.sendmessage').text('用户名已存在');
      }
  });
});

$('.phone-num').blur(function(){
  var phoneNum = $('.phone-num').val();
  if(!/^1[34578]\d{9}$/.test(phoneNum)){
    $('.sendmessage').css('display','block');
    $('.sendmessage').text('请输入正确的手机号');
    return false;
  }
})

$('.register-a').click(function(){
  var phoneNum = $('.phone-num').val();
  var username = $('.name').val();
  var password = $('.password').val();
  console.log(phoneNum);
  if(!/^1[34578]\d{9}$/.test(phoneNum)){
    $('.sendmessage').css('display','block');
    $('.sendmessage').text('请输入正确的手机号');
    return false;
  }
  if (password.length < 6 || password.length > 20) {
    $('.sendmessage').css('display','block');
    $('.sendmessage').text('密码长度在6到20位');
    return;
  }
  shop.api.register(username, password, function(response){
    if (response.code === 0) {
      var data = response.data;
      console.log(data);
      for(var prop in data){

        if (data.hasOwnProperty(prop)) {
          localStorage.setItem(prop, data[prop]);
        }
      }
    location.href = 'index.html';
    }
  });
});
