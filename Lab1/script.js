

var clock=document.getElementById('clock');
var date=document.getElementById('date');
function hexoClock(){
    var time=new Date();
    var h=time.getHours().toString();
    var m=time.getMinutes().toString();
    var s=time.getSeconds().toString();
    var d=time.getDate().toString();
    var mon=time.getMonth().toString();
    var y=time.getFullYear().toString();
    if(h.length<2){
        h='0'+h;
    }
    if(m.length<2){
        m='0'+m;
    }
    if(s.length<2){
        s='0'+s;
    }
    if(d.length<2){
        d='0'+d;
    }
    if(mon.length<2){
        mon='0'+mon;
    }
    var clockString=h+':'+m+':'+s;
    clock.textContent=clockString;
    var dateString=d+'/'+mon+'/'+y;
    date.textContent=dateString;
}
hexoClock();
setInterval(hexoClock,1000);



const nextIcon='<img src="Images/next.png" alt= "next">'

const prevIcon='<img src="Images/prev.png" alt= "prev">'


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({  
     
  loop:true,
  nav:true,
  navText:[
    
      prevIcon,
        nextIcon
  ]});

});
hs.graphicsDir = 'Highslide/graphics/';
hs.wrapperClassName = 'borderless';
