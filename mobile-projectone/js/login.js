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
