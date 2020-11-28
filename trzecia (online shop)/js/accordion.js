const accordion = document.querySelectorAll('.accordion')
const itemsList = document.getElementById('items');
const panelList = document.getElementsByClassName('panel');
const windowWidth = window.innerWidth;


Array.from(accordion).forEach(acc =>{
    acc.addEventListener('click', e=>{
        hide();
        const panel = acc.nextElementSibling;
        setTimeout(()=>{
            acc.classList.toggle('active-acc');
            panel.classList.toggle('active-panel');
        },160);
        
    });
});

function hide(){
    Array.from(accordion).forEach(acc =>{
        const panel = acc.nextElementSibling;

        acc.classList.toggle('active-acc', false);
        panel.classList.toggle('active-panel', false);
    });
}



