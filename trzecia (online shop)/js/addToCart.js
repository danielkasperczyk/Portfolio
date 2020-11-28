(function(){
    const shopBtn = document.getElementById('shop-btn');
    const shopList = document.querySelector('.shop-list')
    shopBtn.addEventListener('click', ()=>{
        shopList.classList.toggle('shop-list-active');
    });
})();

(function(){
    const addBtn = document.querySelectorAll('.button-cart')
    
    addBtn.forEach(btn =>{
        btn.onclick = ()=>{
            const btnParent = btn.parentElement;
            const demoItemImg = btnParent.children[0].children[0].src;
            const textIndex = demoItemImg.indexOf('images');
            const itemImg = demoItemImg.slice(textIndex);
           
            const itemName = btnParent.children[1].textContent;
            const itemPrice = btnParent.children[2].children[0].textContent
            
            show(itemImg, itemName, itemPrice);
           
        }
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
        let demoSum = document.querySelector('.list-items-price').children[0].innerHTML.slice(1);
    
        let sum = parseFloat(demoSum);
        
        itemPrice = price;
        itemPrice = itemPrice.slice(1);
        itemPrice = parseFloat(itemPrice);
        sum += itemPrice;
        sum = Math.round(sum*100)/100;
        let priceCont = document.querySelector('.list-items-price p');
        priceCont.innerHTML = '$ '+ sum;
    }
})();