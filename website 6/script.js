var feathers_img_top = document.querySelector(".feathers-img-top");
var feathers_img_mid = document.querySelector(".feathers-img-mid");
var feathers_img_btm = document.querySelector(".feathers-img-btm");
var feathers_img_mid_image = document.querySelector(".main-pika")


feathers_img_top.addEventListener('click',function(){
    
    feathers_img_top.style.backgroundColor = "#3F48CC"
    feathers_img_mid_image.style.animation = "pika 1s ease  1  both";
})
