const imagesSrc = document.querySelectorAll('.img-box img');

Array.from(imagesSrc).forEach(img =>{
    img.addEventListener('click', ()=>{
        let main = document.querySelector('.main-image img');
        
        main.src = img.src;
    })
});