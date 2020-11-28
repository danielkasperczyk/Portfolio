(function(){
    const addBtn = document.querySelectorAll('.addToCart');
    console.log(addBtn);
    addBtn.forEach(btn =>{
        btn.addEventListener('click', e=>{
            e.preventDefault();
            const demoItemImg = document.querySelector('.front-item').src.indexOf('images');
            const itemImg = document.querySelector('.front-item').src.slice(demoItemImg); 
            const itemName = document.querySelector('.item-name').innerHTML;
            const itemPrice = document.querySelector('.price-container').children[0].innerHTML.slice(1);
            show(itemImg, itemName, itemPrice);
        })
    })
    function show(gImg, gName, gPrice){
        const shopList = document.querySelector('.main-list');
        

        let item = {
            img : gImg,
            name : gName,
            price : gPrice
        };
        
        let newItem = document.createElement('div');
        newItem.classList.add('list-item-container');
        newItem.innerHTML = `
        <div class="list-item-img">
            <img src="${item.img}" alt="">
        </div>
        <div class="list-item-text">
            <p>${item.name}</p>
        </div>
        <div class="list-item-price">
            <p>${item.price}</p>
        </div>`
        
        shopList.appendChild(newItem);
        
        
        let itemsCounter = shopList.children.length;
        count(itemsCounter);
        sumPrice(item.price);
        alert('item added');
  
    }
    function count(counter){
        let list = document.querySelector('.list-items-counter p');
        list.innerHTML = 'Items in Cart: ' + counter;
        
    }


    function sumPrice(price){
        let demoSum = document.querySelector('.list-items-price').children[0].innerHTML.slice(1)
        let sum = parseFloat(demoSum);
        itemPrice = price;
        itemPrice = itemPrice;
        itemPrice = parseFloat(itemPrice);
        sum += itemPrice;
        sum = Math.round(sum*100)/100;
        let priceCont = document.querySelector('.list-items-price p');
        priceCont.innerHTML = '$ '+ sum;
    }
})();
