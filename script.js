let clouds = document.getElementById('clouds');
let mountain_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    clouds.style.left = value * 0.25 + 'px';
    mountains_back.style.top = value * 0.25 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.8 + 'px';
    header.style.top = value *0.5 + 'px';


})