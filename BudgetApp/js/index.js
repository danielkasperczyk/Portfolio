const input = document.querySelector(".things__input");
const valueInput = document.querySelector(".things__cost");
const btn = document.querySelector(".things__btn");
const thingsField = document.querySelectorAll(".things__field");

const typeSlider = document.querySelector(".type__slider");
const typeDot = typeSlider.children[0];

const itemsPlace = document.querySelector(".items");

let side = true;

typeSlider.addEventListener("click", e => {
  side = !side;
  if (typeDot.classList.contains("dot--move-left")) {
    typeDot.classList.remove("dot--move-left");
    typeDot.style.backgroundColor = "#1a5829";
    typeSlider.style.backgroundColor = "#2cde56";
    thingsField.forEach(item => {
      item.style.borderColor = "#2cde56";
    });
    btn.style.backgroundColor = "#2cde56";
  } else {
    typeDot.classList.add("dot--move-left");
    typeDot.style.backgroundColor = "#470e0e";
    typeSlider.style.backgroundColor = "#ef3232";
    thingsField.forEach(item => {
      item.style.borderColor = "#ef3232";
    });
    btn.style.backgroundColor = "#ef3232";
  }
});

btn.addEventListener("click", e => {
  e.preventDefault();
  let income = document.querySelector(".income").innerHTML;
  let spent = document.querySelector(".spent").innerHTML;
  if (
    !isNaN(valueInput.value) &&
    input.value.length > 0 &&
    valueInput.value.length > 0
  ) {
    if (side) {
      let incomeNumber = parseFloat(income) + parseFloat(valueInput.value);
      document.querySelector(".income").innerHTML = incomeNumber;
    } else {
      let spentNumber = parseFloat(spent) + parseFloat(valueInput.value);
      document.querySelector(".spent").innerHTML = spentNumber;
    }
    addNewItem();
    updateBalance();

    input.value = "";
    valueInput.value = "";
  }
});

const updateBalance = () => {
  let balance = parseFloat(document.querySelector(".balance__sum").innerHTML);
  const balanceIncome = parseFloat(document.querySelector(".income").innerHTML);
  const balanceSpent = parseFloat(document.querySelector(".spent").innerHTML);

  balance = balanceIncome - balanceSpent;
  document.querySelector(".balance__sum").innerHTML = balance;
};

const addNewItem = () => {
  const item = `        
  `;
  itemsPlace.innerHTML += item;
  deleteItems;
};

const deleteItems = () => {
  let buttons = [...document.querySelectorAll(".expenses__delete")];
  let newItems = [];
  buttons.forEach(btn =>
    btn.addEventListener("click", e => {
      const newButtons = buttons
        .filter(button => button !== btn)
        .forEach(item => newItems.push(item.parentElement));
      itemsPlace.innerHTML = "";
      newItems.forEach(item => itemsPlace.appendChild(item));
    })
  );
};
