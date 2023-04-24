// Global scope variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');

// Functions
function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    // Create delete button and icon and append to list item
    const button = createButton('remove-item, btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    // Clear input
    itemInput.value = '';

}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        // Traverse DOM to remove list item
        e.target.parentElement.parentElement.remove();
    };
}

function clearItems(e) {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
}

// Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);



























