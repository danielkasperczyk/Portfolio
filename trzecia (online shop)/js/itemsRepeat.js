const menContainer = document.querySelector('.men');
const womenContainer = document.querySelector('.women');
const watchesContainer = document.querySelector('.watches');
const shoesContainer = document.querySelector('.shoes');

function createMenItem(text){
    let item = document.createElement('div');
    item.classList.add('item-container');
    item.innerHTML = text;
    return item;
}

    /* ITEMS */
const men = `
    <div class="item-container-hover">
        <img class="front-item item" src="images/koszula.jpg" alt="">
        <img class="back-item item" src="images/koszula2.jpg" alt="">
        <div class="quick-view">
            <a href="quickView.html">QUICK VIEW</a>
        </div>
    </div>
    <p class="item-name">Formal Shirt</p>
    <div class="price-container">
        <p>$35.99</p>
        <p>$60.99</p>
    </div>
    <button class="button-cart">ADD TO CART</button>
`
const women = `
    <div class="item-container-hover">
        <img class="front-item item" src="images/sukienka1.jpg" alt="">
        <img class="back-item item" src="images/sukienka2.jpg" alt="">
        <div class="quick-view">
            <a href="quickView.html">QUICK VIEW</a>
        </div>
    </div>
    <p class="item-name">Dress</p>
    <div class="price-container">
        <p>$35.99</p>
        <p>$60.99</p>
    </div>
    <button class="button-cart">ADD TO CART</button>`;

const watch = `
    <div class="item-container-hover">
        <img class="front-item item" src="images/zegarek1.jpg" alt="">
        <img class="back-item item" src="images/zegarek2.jpg" alt="">
        <div class="quick-view">
            <a href="quickView.html">QUICK VIEW</a>
        </div>
    </div>
    <p class="item-name">Watch</p>
    <div class="price-container">
        <p>$35.99</p>
        <p>$60.99</p>
    </div>
    <button class="button-cart">ADD TO CART</button>`;

const shoes =
`
<div class="item-container-hover">
<img class="front-item item" src="images/buty1.jpg" alt="">
<img class="back-item item" src="images/buty2.jpg" alt="">
<div class="quick-view">
    <a href="quickView.html">QUICK VIEW</a>
</div>
</div>
<p class="item-name">Shoes</p>
<div class="price-container">
<p>$35.99</p>
<p>$60.99</p>
</div>
<button class="button-cart">ADD TO CART</button>
`;

function addItems(parent, children){
    children.forEach( child=>{
        parent.append(child)
    });
}

const menItems = [
    createMenItem(men),
    createMenItem(men),
    createMenItem(men),
    createMenItem(men),
    createMenItem(men),
    createMenItem(men)
];
const womenItems = [
    createMenItem(women),
    createMenItem(women),
    createMenItem(women),
    createMenItem(women),
    createMenItem(women),
    createMenItem(women)
];
const watchesItems = [
    createMenItem(watch),
    createMenItem(watch),
    createMenItem(watch),
    createMenItem(watch),
    createMenItem(watch),
    createMenItem(watch)
];
const shoesItems = [
    createMenItem(shoes),
    createMenItem(shoes),
    createMenItem(shoes),
    createMenItem(shoes),
    createMenItem(shoes),
    createMenItem(shoes)
]
addItems(menContainer, menItems);
addItems(womenContainer, womenItems);
addItems(watchesContainer, watchesItems);
addItems(shoesContainer, shoesItems);