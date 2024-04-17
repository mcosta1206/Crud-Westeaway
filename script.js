// Seleciona elementos do DOM
const itemForm = document.getElementById('item-form');
const itemNameInput = document.getElementById('item-name');
const itemTable = document.getElementById('item-table');
const tbody = itemTable.querySelector('tbody');

// Adiciona evento de submit ao formulário
itemForm.addEventListener('submit', addItem);

// Função para adicionar um novo item
function addItem(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém o valor do input
    const itemName = itemNameInput.value;

    // Verifica se o nome do item está vazio
    if (itemName === '') {
        alert('Please enter an item name');
        return;
    }

    // Cria uma nova linha na tabela para o novo item
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${generateID()}</td>
        <td>${itemName}</td>
        <td>
            <button onclick="editItem(this)">Edit</button>
            <button onclick="deleteItem(this)">Delete</button>
        </td>
    `;

    // Adiciona a nova linha à tabela
    tbody.appendChild(newRow);

    // Limpa o campo de entrada
    itemNameInput.value = '';
}

// Função para gerar um ID único para cada item
function generateID() {
    return Math.floor(Math.random() * 1000);
}

// Função para editar um item
function editItem(button) {
    const row = button.closest('tr');
    const nameCell = row.cells[1];
    const newName = prompt('Enter the new item name:', nameCell.textContent);
    if (newName !== null) {
        nameCell.textContent = newName;
    }
}

// Função para exibir itens existentes (se houver)
function displayItems() {
    // Aqui você pode carregar itens existentes do banco de dados e exibi-los na tabela
}

// Função para atualizar um item
function updateItem(button) {
    const row = button.closest('tr');
    const nameCell = row.cells[1];
    const newName = prompt('Enter the new item name:', nameCell.textContent);
    if (newName !== null) {
        nameCell.textContent = newName;
    }
}

// Função para excluir um item
function deleteItem(button) {
    const row = button.closest('tr');
    row.remove();
}
