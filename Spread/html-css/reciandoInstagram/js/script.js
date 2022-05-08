setInterval(function(){
    frame1()
},2000);
setInterval(function(){
    frame2()
},4000);
setInterval(function(){
    frame3()
},8000);
setInterval(function(){
    frame4()
},16000);

function frame1(){document.getElementById("slider").src="./img/slider/slider1.png"}
function frame2(){document.getElementById("slider").src="./img/slider/slider2.png"}
function frame3(){document.getElementById("slider").src="./img/slider/slider3.png"}
function frame4(){document.getElementById("slider").src="./img/slider/slider4.png"}
