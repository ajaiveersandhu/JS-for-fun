const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// maintaing state
let items = [];

function formSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  let html = '';
  items.forEach((item) => {
    html += `<li class="shopping-item">
		<input 
			type="checkbox" 
			value=${item.id} 
			${item.complete && 'checked'}
			/>
		<span class="itemName">${item.name}</span>
		<button 
			value=${item.id} 
			aria-label="Remove ${item.name}">
			&times;
		</button>
		</li>`;
  });

  list.innerHTML = html;
}

function storeDataToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function fetchDataFromLocalStorage() {
  const listItems = JSON.parse(localStorage.getItem('items'));
  if (listItems.length) items.push(...listItems);

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function deleteItem(e) {
  if (e.target.matches('button')) {
    items = items.filter((item) => item.id !== parseInt(e.target.value));
    e.target.parentElement.remove();
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function markedComplete(e) {
  if (e.target.matches('input[type="checkbox"]')) {
    const completeItem = items.find(
      (item) => item.id === parseInt(e.target.value)
    );
    completeItem.complete = !completeItem.complete;
    console.log(completeItem);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

shoppingForm.addEventListener('submit', formSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', storeDataToLocalStorage);
list.addEventListener('click', (e) => {
  deleteItem(e);
  markedComplete(e);
});
window.addEventListener('load', fetchDataFromLocalStorage);
