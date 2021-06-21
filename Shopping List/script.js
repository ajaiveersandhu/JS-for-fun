const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// maintaing state
const items = [];

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

  list.dispatchEvent(new CustomEvent('itemUpdated'));
}

function displayItems() {
  let html = '';
  items.forEach((item) => {
    html += `<li class="shopping-item">
		<input type="checkbox"/>
		<span class="itemName">${item.name}</span>
		<button aria-label="Remove ${item.name}">&times;</button>
		</li>`;
  });

  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', formSubmit);
list.addEventListener('itemUpdated', displayItems);
