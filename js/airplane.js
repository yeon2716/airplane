gsap.registerPlugin(ScrollTrigger);

let airplane=document.querySelector('.airplane');
let airplaneScrollTimeline=document.querySelector('.airplane-scroll-timeline')
let animation =0;

animation=gsap.to(airplane,{
    offsetDistance: '0%',
    scrollTrigger:{
        trigger:".track",
        start:"top top",
        end:"bottom 90%",
        scrub:true,
        markes:true,
        onUpdate:animationUpdate,
    }
})


function animationUpdate(){
    console.log(animation.progress())
    let tb1=document.querySelector('.tb1');
    let tb2=document.querySelector('.tb2');
    let jeju=document.querySelector('.hello-jeju')
    let pg = animation.progress()
    if(pg>=0.15){
        jeju.style.transform=`scale(1.3)`;
    }else{
        jeju.style.transform=`scale(1)`;
    }
}



/////////////////////////////
//비행기의 방향
window.addEventListener("wheel",myFunction)

function myFunction(event){
    let y=event.deltaY;
    //console.log(y)

    if(y>0){
        airplane.style.transform=`rotate(180deg)`;
    }else{
        airplane.style.transform=`rotate(0deg)`;
    }

}