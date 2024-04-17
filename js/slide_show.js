var index=1
changeImage=function(){
    
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    document.getElementById('img').src=imgs[index]
    index++
    if(index==5){
        index=0
    }

}

function pre(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    if(index==0){
        index=4 
        document.getElementById('img').src=imgs[index]
    }
    index--
    document.getElementById('img').src=imgs[index]
}
function next(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    if(index==4){
        index=0 
        document.getElementById('img').src=imgs[index]
    }
    index++
    document.getElementById('img').src=imgs[index]
}
function btnshow1(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    document.getElementById('img').src=imgs[0]
}
function btnshow2(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    document.getElementById('img').src=imgs[1]
}
function btnshow3(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    document.getElementById('img').src=imgs[2]
}
function btnshow4(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    document.getElementById('img').src=imgs[3]
}
function btnshow5(){
    var imgs=["../img/hignland.png","../img/hignland2.png","../img/hignland3.png","../img/gongcha.png","../img/phuclong.png"]
    document.getElementById('img').src=imgs[4]
}

setInterval(changeImage,4000)