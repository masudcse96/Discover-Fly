// function for class quantity count
function handleClassChange(id, isIncrease) {

  const classInput = document.getElementById(id);
  const classCount = parseInt(classInput.value);
  let classNewCount = classCount;

  isIncrease ? classNewCount = classCount + 1 : classCount ? classNewCount = classCount - 1 : classNewCount = classCount;

  classInput.value = classNewCount;

  if (id == "firstClassQuantity") {
    calculateTotal();
  }

  if (id == "economyClassQuantity") {
    calculateTotal();
  }

}

// function for calculate subtotal, vat, total
function calculateTotal() {

  const firstClassCount = getInputValue('firstClassQuantity');
  const economyClassCount = getInputValue('economyClassQuantity');

  if (firstClassCount >= 0 && economyClassCount >= 0) {

    const totalClassPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('classTotal').innerText = totalClassPrice;

    const tax = totalClassPrice * 0.1;
    document.getElementById('taxAmount').innerText = tax;

    const totalAmount = totalClassPrice + tax;
    document.getElementById('totalAmount').innerText = totalAmount;
  }

}

// function for getting input value
function getInputValue(id) {

  const input = document.getElementById(id);
  const count = input.value;
  return count;

}

// function for booking confirmation
function bookConfirmed(){
  document.getElementById('bookConfirmed').style.display = "block";
}