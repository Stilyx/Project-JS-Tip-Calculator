const billInput = document.getElementById('Bill');
const numberpeople = document.getElementById('people');
const buttons = document.querySelectorAll('.porcetage');
const tipeAmount = document.querySelector('.tipe-amount');
const total = document.querySelector('.total');
const custom = document.querySelector('.custom');
const reset = document.querySelector('.reset');
const small = document.querySelector('.small-error');
const peopleError = document.querySelector('#people-error');
const billError = document.querySelector('#bill-error');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const billValue = Number(billInput.value);
    const number = e.target.value;
    const people = Number(numberpeople.value);
    getValue(billValue, number, people);
  });
});

function getValue(number, porcetage, people) {
  billValue = ((number / 100) * porcetage) / people;
  totalValue = (billValue + number) / people;
  const billinValid = number === 0;
  const peopleinValid = people === 0;
  const billAndPeopleValid = number > 0 && people > 0;

  if (billinValid) {
    billError.style.display = 'block';
  } else {
    billError.style.display = 'none';
  }
  if (peopleinValid) {
    peopleError.style.display = 'block';
  } else {
    peopleError.style.display = 'none';
  }

  if (billAndPeopleValid) {
    const fixedBill = `$${billValue.toFixed(2)}`;
    const fixedTotal = `$${totalValue.toFixed(2)}`;

    tipeAmount.innerText = fixedBill;
    total.innerText = fixedTotal;
  }
}

custom.addEventListener('keyup', e => {
  regex = /[1-9]/;
  customNumber = Number(custom.value);
  isNumber = regex.test(customNumber);
  console.log(isNumber);
  const billValue = Number(billInput.value);
  const people = Number(numberpeople.value);
  const iscustomError = customNumber <= 0 || customNumber > 100 || !isNumber;

  if (iscustomError) {
    small.classList.add('custom-error');
    small.style.display = 'block';
  } else {
    getValue(billValue, customNumber, people);
    small.style.display = 'none';
  }
});

reset.addEventListener('click', () => {
  billInput.value = '';
  people.value = '';
  custom.value = '';
  total.innerText = '$0.00';
  tipeAmount.innerText = '$0.00';
  peopleError.style.display = 'none';
  billError.style.display = 'none';
  small.style.display = 'none';
});
