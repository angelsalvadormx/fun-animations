const loader = document.getElementById('loader');
const circle = document.getElementById('circle');
const circle_center = document.getElementById('circle_center');
let event = null;
circle_center.addEventListener('animationend',(e)=>{
    circle.style.transform = "scale(10)";
    event = e;
    circle.addEventListener('transitionend',circleTransition);
});
const circleTransition = ()=>{
    circle.style.opacity = "0";
    circle.style.transform = "scale(0)";
    setTimeout(()=>{
        circle.style.opacity = "1";
        circle.style.transform = "scale(1)";
        let num = event.animationName == 'center' ? 2 : 1;
        loader.setAttribute('animation',num);
        circle.removeEventListener('transitionend',circleTransition);
    },900)
}

