const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



//HERO SERCTION ANIMATION
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from(".nav", {
        y:'15',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    tl.to(".boundingelm",{
        y:'0',
        duration:2,
        delay:-1,
        ease: Expo.easeInOut,
        stagger:0.2
    })
    tl.to(".boundingelm",{
        y:'-10',
        duration:2,
        delay:-1,
        ease: Expo.easeInOut,
        stagger:0.2
    })
    tl.to(".boundingelm1",{
        y:'0',
        duration:1.8,
        delay:-1.5,
        ease: Expo.easeInOut,
        stagger:0.2
    })


    .from(".hero_btm",{
        y:'10',
        opacity:0,
        duration:1.8,
        delay:-1.3,
        ease: Expo.easeInOut
    })
}

firstPageAnim();

//HERO SECTION ANIMATION ENDED


//MOUSE FOLLOWER CIRCLE 
//for sqeezing
var timeout;

function mfSqueezing(){
    //define default 
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);

        xscale= gsap.utils.clamp(0.8,1.2, dets.clientX- xprev);
        yscale= gsap.utils.clamp(0.8,1.2, dets.clientY- yprev);



        xprev=dets.clientX;
        yprev= dets.clientY;

       // console.log(gsap.utils.clamp(0.8,1.2, xdiff), gsap.utils.clamp(0.8,1.2,ydiff))
       miniMouseFollower(xscale,yscale);

       timeout = setTimeout(function(){
        document.querySelector(".mouseFollower").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

       },50);

    });
}
mfSqueezing();


//for movement
function miniMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".mouseFollower").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

miniMouseFollower();
//movement animation ended
