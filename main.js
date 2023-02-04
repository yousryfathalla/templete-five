let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px';
    moon.style.top = value * 3+ 'px';
    moon.style.top = value * 3+ 'px';


}

