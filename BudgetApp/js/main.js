//BUDGET CONTROLLER
let budgetController = (function() {
  let budget = {
    sum: 0,
    total: {
      inc: 0,
      exp: 0
    },
    items: {
      inc: [],
      exp: []
    }
  };

  updateTotal = () => {
    budget.total.inc = budget.items.inc.reduce((a, b) => a + b);
  };

  return {
    itemToBudget: item => {
      item.typeOfItem === true
        ? budget.items.inc.push(item.inputValue)
        : budget.items.exp.push(item.inputValue);
    },

    returnBalance: () => {
      if (budget.items.inc.length > 0) {
        budget.total.inc = parseFloat(
          budget.items.inc.reduce((a, b) => a + b).toFixed(2)
        );
      } else {
        budget.total.inc = 0;
      }
      if (budget.items.exp.length > 0) {
        budget.total.exp = parseFloat(
          budget.items.exp.reduce((a, b) => a + b).toFixed(2)
        );
      } else {
        budget.total.exp = 0;
      }
      budget.sum = parseFloat((budget.total.inc - budget.total.exp).toFixed(2));
      return budget;
    },
    updateAfterDelete: (price, type) => {
      const typeTotal = type === true ? "inc" : "exp";
      const newPrice = parseFloat(price);
      const indexOfItem = budget.items[typeTotal].indexOf(newPrice);
      budget.items[typeTotal].splice(indexOfItem, 1);
    }
  };
})();

//UI CONTROLLER
let UIController = (function() {
  const DOM = {
    color: {
      colorSlider: ".color__slider",
      sliderMoveLeft: "color__slider-dot--move-left"
    },
    type: {
      typeSlider: ".type__slider",
      typeSliderMove: "type__slider-dot--move-left"
    },
    things: {
      items: ".things",
      field: ".things__field",
      input: ".things__input",
      cost: ".things__cost",
      button: ".things__btn"
    },
    items: {
      inc: ".items__inc",
      exp: ".items__exp"
    },
    bank: {
      inc: ".income",
      exp: ".spent"
    },
    balance: ".balance__sum"
  };

  let typeOfItem = true; // true = income, false = expanse

  return {
    getDOM: DOM,

    changeColor: () => {
      const slider = document.querySelector(DOM.color.colorSlider).children[0];
      slider.classList.toggle(DOM.color.sliderMoveLeft);
      if (slider.classList.contains(DOM.color.sliderMoveLeft)) {
        document.body.style.backgroundColor = "#888";
      } else {
        document.body.style.backgroundColor = "#fff";
      }
    },
    //change type of item and color of input border and button background color
    changeType: () => {
      const slider = document.querySelector(DOM.type.typeSlider).children[0];
      const things = Array.from(
        document.querySelector(DOM.things.items).children
      );
      slider.classList.toggle(DOM.type.typeSliderMove);
      if (slider.classList.contains(DOM.type.typeSliderMove)) {
        typeOfItem = false;

        slider.parentElement.style.backgroundColor = "#e40f0f";
        things.forEach(item =>
          item.tagName === "INPUT"
            ? (item.style.borderColor = "#e40f0f")
            : (item.style.backgroundColor = "#e40f0f")
        );
      } else {
        typeOfItem = true;

        slider.parentElement.style.backgroundColor = "#2cde56";
        things.forEach(item =>
          item.tagName === "INPUT"
            ? (item.style.borderColor = "#2cde56")
            : (item.style.backgroundColor = "#2cde56")
        );
      }
    },
    getValue: () => {
      items = {
        inputName: document.querySelector(DOM.things.input).value,
        inputValue: parseFloat(
          parseFloat(document.querySelector(DOM.things.cost).value).toFixed(2)
        ),
        typeOfItem
      };
      if (
        items.inputName !== "" &&
        items.inputValue !== "" &&
        !isNaN(items.inputValue)
      ) {
        return items;
      }
    },
    clearFields: () => {
      document
        .querySelectorAll(DOM.things.field)
        .forEach(field => (field.value = ""));
      document.querySelector(DOM.things.field).focus();
    },
    createMarkup: item => {
      let parent = document.querySelector(
        item.typeOfItem === true ? DOM.items.inc : DOM.items.exp
      );
      let markup = `
      <div class="expenses margin-y-small ${
        item.typeOfItem === true ? "greenGradient" : "redGradient"
      }">
        <div class="expenses__item">
          <div class="expenses__item-name">
            <p>${item.inputName}</p>
          </div>
          <div class="expenses__item-price">
            <p>${item.inputValue}</p>
          </div>
        </div>
        <div class="expenses__delete">
          <i class="fas fa-trash-alt button--delete"></i>
        </div>
      </div>
    `;
      parent.insertAdjacentHTML("beforeend", markup);
    },
    updateBank: item => {
      document.querySelector(DOM.balance).innerHTML = item.sum.toString(10);
      document.querySelector(DOM.bank.inc).innerHTML = item.total.inc.toString(
        10
      );
      document.querySelector(DOM.bank.exp).innerHTML = item.total.exp.toString(
        10
      );
    },
    deleteElement: item => {
      const itemParent = item.parentElement;
      itemParent.removeChild(item);
    }
  };
})();

//GLOBAL CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {
  const DOMstring = UICtrl.getDOM;

  // change document color after click
  document
    .querySelector(DOMstring.color.colorSlider)
    .addEventListener("click", e => UICtrl.changeColor());

  //Change type of item (expanse or income)
  document
    .querySelector(DOMstring.type.typeSlider)
    .addEventListener("click", e => UICtrl.changeType());

  //Get name of spend/income and value of it
  document
    .querySelector(DOMstring.things.button)
    .addEventListener("click", e => {
      e.preventDefault();
      let item;

      if (UICtrl.getValue() !== undefined) {
        item = UICtrl.getValue();
        UICtrl.clearFields();
        UICtrl.createMarkup(item);
        budgetCtrl.itemToBudget(item);
        budgetCtrl.returnBalance();
        UICtrl.updateBank(budgetCtrl.returnBalance());
      }
    });

  // Delete items from UI and update budget
  document.addEventListener("click", e => {
    if (e.target.classList.contains("button--delete")) {
      const parent = e.target.parentElement.parentElement;
      const type = parent.classList.contains("greenGradient") ? true : false;
      //Price of item below
      const price = parent.children[0].children[1].children[0].innerHTML;

      UICtrl.deleteElement(parent, type);
      //Updated balance nad income/spent
      budgetCtrl.updateAfterDelete(price, type);
      budgetCtrl.returnBalance();
      UICtrl.updateBank(budgetCtrl.returnBalance());
    }
  });
})(budgetController, UIController);
