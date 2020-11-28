const accordion = document.querySelectorAll('.filter-acc')

const sortList = document.querySelector('.sort-list');
const sortBy = document.querySelector('.sort-by button')

const filterBtn = document.querySelector('.filter button');
const filter = document.querySelector('.filter-content');
const filterCont = document.querySelector('.filter-content .container');
const filterTextBtn = document.querySelector('.filter-text button');

sortList.style.display = "none";
filterCont.style.display = "none";

Array.from(accordion).forEach(acc =>{
    acc.addEventListener('click', ()=>{
        const panel = acc.nextElementSibling;

        if(!(panel.classList.contains('active-filter-panel'))){
           panel.classList.add('active-filter-panel');
        }
        else{
            panel.classList.remove('active-filter-panel');
        }
        
    });
});

sortBy.addEventListener('click', ()=>{
    if(sortList.style.display == "none"){
        sortList.style.display = "block";
    }
    else{
        sortList.style.display = "none";
    }
});

filterBtn.addEventListener('click', ()=>{
    filterCont.style.display = "block";
    filter.classList.add('active-filter');

});

filterTextBtn.addEventListener('click', ()=>{
    filter.classList.remove('active-filter');
    filterCont.style.display = "none";
});


