alert("BEM VINDO");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('item-form');
    const itemNameInput = document.getElementById('item-name');
    const itemsTableBody = document.querySelector('#items-table tbody');
    let items = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addItem(itemNameInput.value);
        itemNameInput.value = '';
    });

    function addItem(name) {
        const item = { id: Date.now(), name: name };
        items.push(item);
        renderItems();
    }

    function renderItems() {
        itemsTableBody.innerHTML = '';
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td class="actions">
                    <button class="edit" onclick="editItem(${item.id})">Editar</button>
                    <button class="delete" onclick="deleteItem(${item.id})">Excluir</button>
                </td>
            `;
            itemsTableBody.appendChild(row);
        });
    }

    window.editItem = function(id) {
        const item = items.find(item => item.id === id);
        const newName = prompt('Editar para:', item.name);
        if (newName) {
            item.name = newName;
            renderItems();
        }
    };

    window.deleteItem = function(id) {
        items = items.filter(item => item.id !== id);
        renderItems();
    };
}); 
