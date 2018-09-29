window.onload = function(){
    var oBox = document.getElementById("fd");
    var num = 0;//计数
    var size = 1;//控制字体改变大小
    var temp = null;

    oBox.style.fontSize = "15px";

    oBox.onmousemove=function () {
        oBox.style.fontSize = parseInt(oBox.style.fontSize) + size + 'px';
        num++;
        if( num%4 == 0 ){
            size = size * (-1);
        }
    }

}