gsap.to(".block",{
    scrollTrigger:{
        trigger:".block",
        start:"-100% 70%",

        end:"40% 40%",
        scrub:true
       
    },
    height:"400px",
    width:"400px",
    ease:Expo.easeInOut,
    duration:3

})
gsap.to(".block svg",{
    scrollTrigger:{
        trigger:".block svg",
        start:"10% 70%",
        end:"200% 20%",
        scrub:true
       
    },
    rotate:"360deg",
    ease:Expo.easeInOut,
    duration:4
})