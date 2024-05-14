
gsap.to("#box1",{
        
        duration:3,
        delay:1,
        x:700,
        scale:0.5,
        backgroundColor:"red",
        stagger:0.5,
        repeat:-1,
       
        yoyo:true
})
gsap.from("#box2",{
        y:-500,
        borderRadius:"150",
        duration:4,
        delay:1,
       
        scale:0.5,
       repeat:5,
       rotate:360,
       
})



