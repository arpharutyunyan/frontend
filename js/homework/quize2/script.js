const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#list');
const todoText = document.querySelector('#todo-text');

if (addBtn) {
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        createElement();

        todoText.value = '';
    });
}

function createElement() {
    let task;
    if (todoText) {
        task = todoText.value;
    }

    const itemBlock = document.createElement('div');
    itemBlock.classList.add('item');
    const taskText = document.createElement('p');
    taskText.textContent = task;
    const tools = document.createElement('div');
    tools.classList.add('tools');
    const buttonComplete = document.createElement('button');
    buttonComplete.classList.add('complete-btn');
    buttonComplete.textContent = 'Completed';
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('del-button');
    buttonDel.textContent = 'X';


    // const item = `
    //     <div class="item">
    //         <p>${task}</p>
    //         <div class="tools">
    //           <button class="complete-btn">Completed</button>
    //           <button class="del-button">X</button>
    //         </div>
    //     </div>`;

    if (list) {
        tools.append(buttonComplete, buttonDel);
        itemBlock.append(taskText, tools);
        list.append(itemBlock);
        // list.innerHTML += item;
    }

    makeCompleted(itemBlock);
    deleteItem(itemBlock);
}

function makeCompleted(item) {
    const complete = item.querySelector('.complete-btn');
    complete.addEventListener('click', () => {
        item.classList.toggle('done');
        if (item.classList.contains('done')) {
            complete.textContent = 'Cancel';
        } else {
            complete.textContent = 'Completed';
        }
    });
}

function deleteItem(item) {
    const deleteItem = item.querySelector('.del-button');
    deleteItem.addEventListener('click', () => {
        item.classList.toggle('done');
        item.remove();
    });
}

const filterType = document.querySelectorAll('input[name="filter"]');
if (filterType.length) {
    filterType.forEach(element => {
        element.addEventListener('click', (e) => {
            filterItems(e);
        });
    });
}

function filterItems(e) {
    let filterTypeValue = e.target.value;
    const items = document.querySelectorAll('.item');

    if (items) {
        items.forEach(item => {
            item.classList.remove('hide');
            if (filterTypeValue === 'active' && item.classList.contains('done')) {
                item.classList.add('hide');
            } else if (filterTypeValue === 'completed' && !item.classList.contains('done')) {
                item.classList.add('hide');
            }
        });
    }
}


