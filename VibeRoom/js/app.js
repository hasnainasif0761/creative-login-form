const ham = document.querySelector('#ham')
const nav = document.querySelector('.nav');
const mainNav = document.querySelector('nav');

console.log(mainNav)

ham.addEventListener('click', () => {
    nav.classList.toggle('active');
    ham.classList.toggle('ri-menu-fill');
    ham.classList.toggle('ri-close-fill');
})

window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
        mainNav.classList.add('nav-bg');
        console.log('Huwa scroll')
    }else{
        mainNav.classList.remove('nav-bg');
        console.log('Nahe Huwa scroll')
    }
})