var image = document.querySelector(".image");
var main_card = document.querySelector(".main_card");
var buttonClass = document.querySelector(".buttonClass");
var knowmore = document.querySelector("#knowmore");
var heart_shape = document.querySelector(".heart-shape");


var flag = 0;

buttonClass.addEventListener("click",function(){
    if(flag===0){
        image.style.top = "-50%";
        knowmore.innerHTML = "Know Less"
        flag = 1;
    }
    else{
        image.style.top = "0%";
        knowmore.innerHTML = "Know More"
        flag = 0;
    }
})

heart_shape.addEventListener("click",function(){
    heart_shape.style.backgroundColor = "red";
})