
let icon=document.getElementById("icon1");
let narve=document.getElementById("narve1");
icon.addEventListener("click",clickme);
function clickme(){
  
   if(narve.style.display=="none"){
    narve.style.display="block"
   }else{
    narve.style.display="none"
   }
}
let logo=document.getElementById("logo");
logo.addEventListener("click",log)
function log(){
   clickme().remove()
}

window.addEventListener("load",loadimg);
function loadimg(){
let setall=setInterval(side,4000)

}


let count=1;
let countlimit=4000;

function side(){
  if(count===1){
    document.getElementById("img1").style.opacity="0px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img1").style.right="0px";
     document.getElementById("img1").style.zIndex="1000px";

       document.getElementById("img2").style.right="-1200px";
     document.getElementById("img2").style.zIndex="1500px";

            document.getElementById("img3").style.right="1200px";
     document.getElementById("img3").style.zIndex="500px";
}
count=2;
document.getElementById("img1").style.opacity="0px";
  }

    else if(count===2){
    document.getElementById("img2").style.opacity="0px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";

       document.getElementById("img1").style.right="-1200px";
     document.getElementById("img1").style.zIndex="1500px";

            document.getElementById("img3").style.right="1200px";
     document.getElementById("img3").style.zIndex="500px";
}
count=3;
document.getElementById("img2").style.opacity="0px";
  }

    else if(count===3){
    document.getElementById("img3").style.opacity="0px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";

       document.getElementById("img3").style.right="-1200px";
     document.getElementById("img3").style.zIndex="1500px";

            document.getElementById("img1").style.right="1200px";
     document.getElementById("img1").style.zIndex="500px";
}
count=1;
document.getElementById("img3").style.opacity="0px";
  }
}


