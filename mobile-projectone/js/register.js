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
