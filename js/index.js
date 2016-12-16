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

//第一个span
    var spans=ctrl.children;
    spans[2].setAttribute("class","ctrl-icon current");

    var scrollleft=slider.clientWidth;
    for(var i=1;i<imgs.length;i++){
        imgs[i].style.left=scrollleft+"px";
    }
}