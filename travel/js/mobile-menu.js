const mobileBtn = document.getElementById('menu-toggle');
const mobileMenu = document.querySelector('.menu');

 mobileBtn.addEventListener("click", ()=>{
    mobileMenu.classList.toggle('slide-left');
    mobileBtn.classList.toggle('active');
});

const leftMenu = document.querySelectorAll('.menu-left a');
leftMenu.forEach(btn => btn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('slide-left');
    mobileBtn.classList.remove('active');
}))