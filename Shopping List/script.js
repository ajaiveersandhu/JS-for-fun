const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

function formSubmit(e) {
  e.preventDefault();
  console.log('Submitted');
}

shoppingForm.addEventListener('submit', formSubmit);
