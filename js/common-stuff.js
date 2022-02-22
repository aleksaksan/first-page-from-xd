/*
const burger = document.querySelector('.hamburger')
const navPanel = document.querySelector('header');

function toggleBurger(){
    burger.classList.toggle('is-active');
    navPanel.classList.toggle('is-visible');
}
*/
const header = document.querySelector('header');

window.onscroll() = function(e){
    if (window.scrollY > 1079+372-177){
        if (!header.classList.contains('altered')){
            header.classList.add('altered');
        }
    } else {
        header.classList.remove('altered');
    }
    console.log('scrolling');
}
