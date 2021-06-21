const filters = Array.from(document.querySelectorAll('[name="filter"]'));
const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');

const filterOptions = {
  sarcastic() {
    console.log('sarcastic');
  },
  funky() {
    console.log('funky');
  },
  unable() {
    console.log('unbal');
  },
};

function transforText(text) {
  const filter = filters.find((input) => input.checked).value;
  const changedText = Array.from(text).map(filterOptions[filter]);
}

textArea.addEventListener('input', (e) => transforText(e.target.value));
