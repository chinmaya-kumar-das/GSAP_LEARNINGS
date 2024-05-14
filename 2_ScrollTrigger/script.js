// const tl=gasp.timeline();
//install scrolltriger cdn then animate it


// gsap.from("#page1 #box",{
//     duration:2,
//     scale:0,
//     delay:1,
//     rotate:360,
//     scale:0,
//     scrub:true
// })
// gsap.from("#page2 h1",{
//     duration:2,
//     opacity:0,
//     x:500,
//     scrub:true,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%",
       
//     }
// })
// gsap.from("#page2 h2",{
//     duration:2,
//     opacity:0,
//     x:-500,
//     scale:0,
//     scrub:true,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%"
//     }
// })

gsap.to("#page3 h1",{
    Transform:"translateX(-150%)",
  
    scrollTrigger:{
        trigger:"#page3 ",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2
    }
})
