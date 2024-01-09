const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let tl = gsap.timeline()

tl.from("#container", {
    y: '100vh',
    duration: 2,
})