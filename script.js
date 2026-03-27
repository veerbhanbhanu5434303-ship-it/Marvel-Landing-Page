const scroll = new LocomotiveScroll();

gsap.from(".info h1",{
    opacity:0,
    x:-500,
    duration:1,
    delay:0.4
})
gsap.from(".marvel",{
    opacity:0,
    x:500,
    duration:1,
    delay:1.4
})