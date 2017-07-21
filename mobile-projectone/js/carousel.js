
var carousel = document.querySelector('#carousel');
var imageLis = document.querySelectorAll('#carousel .imageList li');
var spanLis = document.querySelectorAll('.circle span');
// console.log(spanLis);

var idx = 0;
var next = 1;
var prev = imageLis.length-1;

var timer = setInterval(function(){
  showNext();
},3000);
//批量绑定小圆点
for(var i = 0; i<spanLis.length;i++){
  (function(i){
    spanLis[i].addEventListener('touchstart',function(){
      clearInterval(timer);
      setCurrentImage(i);
    },false);
  })(i);
}

function setCurrentImage(_idx){
  idx = _idx;
  prev = idx-1;
  if(prev === -1){prev = imageLis.length-1};
  next = idx + 1;
  if(next>imageLis.length-1){next = 0};

  init();//设置一下当前的图片合适的位置和小圆点合适的位置

  clearInterval(timer);

  timer = setInterval(function(){
    showNext();
  },3000);
}



var windowWidth;
init();
window.onresize = init;

function init(){
  windowWidth = document.documentElement.clientWidth;
  carousel.style.height = windowWidth/(360/113) + 'px';

  for(var i = 0;i<imageLis.length;i++){
    imageLis[i].style.webkitTransform = 'translateX('+windowWidth+'px)';
  }

  changepic();
  setPoint();
}

//事件监听
carousel.addEventListener('touchstart',touchstartHander,false);
carousel.addEventListener('touchmove',touchmoveHander,false);
carousel.addEventListener('touchend',touchendHander,false);

var startX,startTime;

function touchstartHander(event){
  event.preventDefault();
  clearInterval(timer);
  //记录偏移量
  startX = event.touches[0].clientX;
  console.log(startX);
  //时间戳
  startTime = new Date();
  imageLis[prev].style.transition = 'none';
  imageLis[idx].style.transition = 'none';
  imageLis[next].style.transition = 'none';
}

function touchmoveHander(event){
  event.preventDefault();
  //得到坐标x
  var clientX = event.touches[0].clientX;
  console.log(clientX-startX);
  //改变图片位置
  imageLis[idx].style.webkitTransform = 'translateX('+(clientX-startX)+'px)';
  imageLis[next].style.webkitTransform = 'translateX('+(windowWidth+(clientX-startX))+'px)';
  imageLis[prev].style.webkitTransform = 'translateX('+(-windowWidth+(clientX-startX))+'px)';
}

function touchendHander(event){
  event.preventDefault();
  var distance = event.changedTouches[0].clientX - startX;
  var time = new Date() - startTime;

  if(distance>=windowWidth/2||(distance>30&&time<300)){
    showPrev();
  }else if (distance<=-windowWidth/2||(distance<-30&&time<300)) {
    showNext();
  }else{
    console.log('不成功');

    //移动
    imageLis[prev].style.webkitTransform = 'translateX('+-windowWidth+'px)';
    imageLis[idx].style.webkitTransform = 'translateX(0px)';
    imageLis[next].style.webkitTransform = 'translateX('+windowWidth+'px)';

    imageLis[prev].style.transition = 'all 0.3s ease 0s';
    imageLis[next].style.transition = 'all 0.3s ease 0s';
    imageLis[idx].style.transition = 'all 0.3s ease 0s';
  }

  clearInterval(timer);
  timer = setInterval(function(){
    showNext();
  },3000);
}

function showPrev(){
  next = idx;
  idx = prev;
  prev--;
  if(prev<0) prev = imageLis.length-1;
  changepic();
  setPoint();
  imageLis[prev].style.transition = 'none';
  imageLis[next].style.transition = 'all 0.3s ease 0s';
  imageLis[idx].style.transition = 'all 0.3s ease 0s';
}

function showNext(){
  prev = idx;
  idx = next;
  next++;
  if(next>imageLis.length-1) next = 0;
  changepic();
  setPoint();
  imageLis[prev].style.transition = "all 0.3s ease 0s";
  imageLis[idx].style.transition = "all 0.3s ease 0s";
  imageLis[next].style.transition = "none";
}

function changepic(){
  imageLis[idx].style.webkitTransform = 'translateX(0px)';
  imageLis[next].style.webkitTransform = 'translateX('+ windowWidth + 'px)';
  imageLis[prev].style.webkitTransform = 'translateX('+ - windowWidth + 'px)';
}

function setPoint(){
  for(var i = 0;i<spanLis.length;i++){
    spanLis[i].className = '';
  }
  spanLis[idx].className = 'current';
}




var sectionCarousel = document.querySelector('.section-carousel')
var newIdx = 1;
timer1 = setInterval(function(){
  newIdx++;
  if(newIdx>3) newIdx = 1;
  sectionCarousel.style.backgroundImage = 'url(image/carousel'+newIdx+'.jpg)';
},3000)
