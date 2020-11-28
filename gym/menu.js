const menu = document.getElementById('myNav');
const button = document.getElementById("positionNav").addEventListener('click', e=>{
    e.preventDefault();
    menu.style.width = "100%";


})
const closeButton = document.querySelector('.closebtn').addEventListener('click', e=>{
    e.preventDefault();
    menu.style.width = "0";
});

const aBtns = document.querySelectorAll('.overlay-content a');
aBtns.forEach(btn => btn.addEventListener('click', e=>{
   
    menu.style.width = "0";

}));