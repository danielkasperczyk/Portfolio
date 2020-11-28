const mainBtn = document.getElementById('nav-btn');
const menu = document.getElementById('menu');


mainBtn.addEventListener('click', e =>{
    if(menu.checked === false){
        menu.checked = true
    }else{
        menu.checked = false;
    }

});