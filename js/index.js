/**
 * Created by user on 2016/12/16.
 */
var slider=document.getElementsByClassName("slider")[0];
var main_img=document.getElementsByClassName("main-img")[0];
var imgs=main_img.children;
var ctrl=document.getElementsByClassName("ctrl")[0];

//创建span
for(var i=0;i<imgs.length;i++){
    var span=document.createElement("span");
    span.innerHTML=i+1;
    span.className="ctrl-icon";
    ctrl.appendChild(span);
}
//第一个span
var spans=ctrl.children;
spans[2].setAttribute("class","ctrl-icon current");

var scrollleft=slider.clientWidth;
for(var i=1;i<imgs.length;i++){
    imgs[i].style.left=scrollleft+"px";
}
//遍历三个按钮
var key=0;
for(var k in spans){
    spans[k].onclick=function(){
        if(this.className=="ctrl-prev") {
            animate(imgs[key], {left: scrollleft});
            --key<0?key=imgs.length-1:key;
            imgs[key].style.left = -scrollleft + "px";
            animate(imgs[key], {left: 0});
            setColor();
        }else if(this.className=="ctrl-next"){
            autoplay();
        }else{
            var that=this.innerHTML-1;
            if(that>key){
                animate(imgs[key],{left:-scrollleft});
                imgs[that].style.left=scrollleft+"px";
            }else if(that<key){
                animate(imgs[key],{left:scrollleft});
                imgs[that].style.left=-scrollleft+"px";
            }
            key=that;
            animate(imgs[that],{left:0});
            setColor();
            }
    }
}
//按钮颜色变化
function setColor(){
    for(var i=2;i<spans.length;i++){
        spans[i].className="ctrl-icon";
    }
    spans[key+2].className="ctrl-icon current";
}
//自动播放
var timer=null;
timer=setInterval(autoplay,2000);
function autoplay(){
    animate(imgs[key],{left:-scrollleft});
    ++key>imgs.length?key=0:key;
    imgs[key].style.left=scrollleft+"px";
    animate(imgs[key],{left:0});
    setColor();
}

slider.onmouseover=function(){
    clearInterval(timer);
}
slider.onmouseout=function(){
    clearInterval(timer);
    timer=setInterval(autoplay,2000);
}