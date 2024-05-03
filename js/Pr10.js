const objects = [];

function addObject() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;

    if (!validateInput(name, price)) {
        document.getElementById('error-message').innerText = 'Пожалуйста, введите корректные данные.';
        return;
    }

    const object = {
        name: name,
        price: parseFloat(price),
        category: category
    };

    objects.push(object);
    displayObjects();
}

function deleteObject(index) {
    objects.splice(index, 1);
    displayObjects();
}

function editObject(index) {
    const newName = document.getElementById('name').value;
    const newPrice = document.getElementById('price').value;
    const newCategory = document.getElementById('category').value;

    if (!validateInput(newName, newPrice)) {
        document.getElementById('error-message').innerText = 'Пожалуйста, введите корректные данные.';
        return;
    }
    // Добавить через второй if/else проверку что если данные совпадают то этот эллемент будет равен = ""

    objects[index].name = newName;
    objects[index].price = parseFloat(newPrice);
    objects[index].category = newCategory;

    displayObjects();
}

function displayObjects() {
    const list = document.getElementById('entity-list');
    const emptyMessage = document.getElementById('empty-message');
    list.innerHTML = '';

    if (objects.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
        objects.forEach((object, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<strong>${object.name}</strong> - Цена: ${object.price} - Категория: ${object.category} 
                                  <button class="btn btn-sm btn-primary mr-2" onclick="editObject(${index})">Изменить</button>
                                  <button class="btn btn-sm btn-danger" onclick="deleteObject(${index})">Удалить</button>`;
            list.appendChild(listItem);
        });
    }
}

function validateInput(name, price) {
    if (!name || !price || isNaN(price) || price <= 0) {
        return false;
    }
    return true;
}
