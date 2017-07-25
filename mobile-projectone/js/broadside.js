var menuBtn = document.getElementById('menu');
var broadside = document.querySelector('.broadside')
// console.log(menuBtn,broadside);
// menuBtn.onclick = function(){
//   broadside.style.transform = "translateX(0)";
// };
document.addEventListener('click',function(event){
  // console.log(event.target);
  if(event.target === menuBtn){
    broadside.style.transform = "translateX(0)";
  }
  if(event.target !== broadside && event.target !== menuBtn){
    broadside.style.transform = "translateX(-100%)";
  }
})
