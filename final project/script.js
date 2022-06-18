gsap.to(".circle img:nth-child(1)",{
    scrollTrigger:{
        trigger:".two",
        start:"0% center",
        end:"30% center",
        scrub:true
    },
    rotate:"460deg",
    ease:Expo.easeInOut,
    duration:5

})
gsap.to(".circle img:nth-child(2)",{
    scrollTrigger:{
        trigger:".two",
        start:"0% center",
        end:"30% center",
        scrub:true
    },
    rotate:"-460deg",
    ease:Expo.easeInOut,
    duration:5
})
gsap.to(".circle img:nth-child(3)",{
    scrollTrigger:{
        trigger:".two",
        start:"0% center",
        end:"30% center",
        scrub:true
    },
    rotate:"460deg",
    ease:Expo.easeInOut,
    duration:5
})
gsap.to(".circle2",{
    scrollTrigger:{
        trigger:".block",
        start:"100% center",
        end:"200% center",
        
        scrub:true
    },
    height:"100px",
    width:"100px",
    fontSize:"60px",
    rotate:"360deg"
})
gsap.to(".circle2 h2",{
    scrollTrigger:{
        trigger:".block",
        start:"100% center",
        end:"200% center",
        scrub:true
    },
    opacity:1
})
gsap.set(".one img:nth-child(1)",{
    bottom:"-30vh"
})
gsap.to(".one img:nth-child(1)",{
    scrollTrigger:{
        trigger:".two",
        start:"0% 100%",
        end:"0% 70%",
        scrub:4  
    },
    top:"-10vh",
    rotate:"-160deg",
    ease:Power3,
    duration:5
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".imageSection",
        start:"center center",
        end:"110% center",
        scrub:2,
        pin:true
    }
})
tl
.to(".baseImg",{
    bottom:"15%",
    rotate:"720deg",
    ease:Power3,
    right:"50%"
})
.to(".imgSeries",{
    right:"0%",
    ease:Power3
})
.to(".rightDiv",{
    right:"100%"
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".four",
        start:"center center",
        pin:true,
        scrub:3,
    }
})
.to(".animate",{
    opacity:1,
    stagger:.3,
    rotate:("-10deg"),
    ease:Power0.easeInOut

},"a")
.to(".animate",{
    opacity:0,
    stagger:.3,
    ease:Power0.easeInOut

},"a")
.to(".four h1 span",{
    y:"-50",
    ease:Power0.easeInOut,
    stagger:.3
},"a")
.to(".four h1 span",{
    y:"0",
    ease:Power0.easeInOut,
    stagger:.3,
    delay:.2
},"a")


ScrollTrigger.create({
    onUpdate:function(prg){
        gsap.to(".progress",{
            width: Math.floor(prg.progress*100)+"%"
        });
    }
})

var classs = "";
var imageIndex = "";

var animateFunction = function(classs,imageIndex){
    document.querySelector("."+classs).addEventListener("mousemove",function(){
        $("."+classs).css({
            "transform": "translateY(-40px)"
        })
        var t = gsap.timeline(
        )
        .to(".animate:nth-child("+imageIndex+")",{
            opacity:1,
            stagger:.1,
            rotate:("-10deg"),
            ease:Power0.easeInOut
        },"aa")
        

        document.querySelector("."+classs).addEventListener("mouseout",function(){
            $("."+classs).css({
                "transition-delay": ".5",
                "transform": "translateY(0px)"

            })
            t.to(".animate:nth-child("+imageIndex+")",{
                
                opacity:0,
                stagger:.1,
                rotate:("0deg"),
                ease:Power0.easeInOut
            },"aa")
        })
    })
}



document.querySelector("#main").addEventListener("mousemove",function(dets){
    switch(dets.target.getAttribute('class')){
        case "hero":
            animateFunction("hero","1");
            break;
        case "mero":
            animateFunction("mero","2");
            break;
        case "kero":
            animateFunction("kero","3");
            break;
        case "zero":
            animateFunction("zero","4");
            break;
        case "lero":
            animateFunction("lero","5");
            break;
        case "fero":
            animateFunction("fero","6");
            break;
        case "eero":
            animateFunction("eero","7");
            break;
        case "pero":
            animateFunction("pero","8");
            break;
        case "sero":
            animateFunction("sero","9");
            break;
        case "nero":
            animateFunction("nero","10");
            break;
    }
})




document.querySelector("#main").addEventListener("click",function(dets){
    switch(dets.target.dataset.index){
        case "0":
            document.querySelector(".imageDiv").style.backgroundColor = "red"
            document.querySelector(".MenuImg").style.backgroundColor = "red"
            
            break;
        case "1":
            document.querySelector(".imageDiv").style.backgroundColor = "blue"
            document.querySelector(".MenuImg").style.backgroundColor = "blue"
            break;
        case "2":
            document.querySelector(".imageDiv").style.backgroundColor = "green"
            document.querySelector(".MenuImg").style.backgroundColor = "green"
    }
})


document.querySelector(".nav i").addEventListener("click",()=>{
    
    document.querySelector(".menuDiv").style.top = "0%";
    
    document.querySelector(".menuDiv").style.padding = "50px";
})


document.querySelector(".ri-close-line").addEventListener("click",()=>{
    document.querySelector(".menuDiv").style.top = "-100%";
   
    document.querySelector(".menuDiv").style.padding = "0px";
    document.querySelector(".MenuImg").style.backgroundColor = "initial"
    
})

