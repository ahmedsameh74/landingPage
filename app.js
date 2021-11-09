const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul a');
const head = document.querySelector('.header.container');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

})
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        head.style.backgroundColor = "#29323c"
    } else{
        head.style.backgroundColor = "transparent";
    }
})
menuItem.forEach((item) => {
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active')
    })
})