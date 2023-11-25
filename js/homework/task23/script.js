// create table
const createTableBtn = document.querySelector('#create_table');
const columnInput = document.querySelector('#column');
const rowInput = document.querySelector('#row');
const createTableResult = document.querySelector('#create_table_result');

if (createTableBtn) {
    createTableBtn.addEventListener('click', () => {
        if (columnInput && rowInput) {
            let columnValue = parseInt(columnInput.value);
            let rowValue = parseInt(rowInput.value);

            const table = document.createElement('table');
            table.classList.add('table', 'table-bordered');
            const tbody = document.createElement('tbody');
            table.append(tbody);

            let rowValueDec = rowValue; //for inner text counting
            while (rowValueDec) {
                const row = document.createElement('tr');
                let columnValueDec = columnValue;

                while (columnValueDec) {
                    const column = document.createElement('td');
                    column.textContent = `[${rowValue - rowValueDec + 1}, ${columnValue - columnValueDec + 1}]`;
                    row.append(column);
                    columnValueDec--;
                }

                tbody.append(row);
                rowValueDec--;

                createTableResult.innerHTML = '';
                createTableResult.append(table);
            }
        }
    });
}

// select year
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const year = document.querySelector('#year');

(() => {
    const option = document.createElement('option');
    for (let i = 2010; i <= 2023; i++) {
        const optionClone = option.cloneNode();
        optionClone.value = i;
        optionClone.textContent = i;
        if (year) {
            year.appendChild(optionClone);
        }
    }
})();


if (previousBtn) {
    previousBtn.addEventListener('click', () => {
        if (year.selectedIndex) {
            year.selectedIndex--;
        } else {
            year.selectedIndex = year.length - 1;
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (year.selectedIndex != year.length - 1) {
            year.selectedIndex++;
        } else {
            year.selectedIndex = 0;
        }
    });
}

//create boxes
const createBoxBtn = document.querySelector('#create_box');
const innerText = document.querySelector('#inner_text');
const boxCount = document.querySelector('#box_count');
const createBoxResult = document.querySelector('#create_box_result');

if (createBoxBtn) {
    createBoxBtn.addEventListener('click', () => {
        createBoxResult.innerHTML = '';
        if (innerText && boxCount) {
            const box = document.createElement('div');
            box.classList.add('d-flex', 'justify-content-center', 'align-items-center');
            box.style.width = '200px';
            box.style.height = '200px';
            box.style.backgroundColor = 'gray';
            box.textContent = innerText.value;
            for (let i = 0; i < parseInt(boxCount.value); i++) {
                createBoxResult.append(box.cloneNode(true));
            }
        }
    });
}

//create boxes with given params
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const color = document.querySelector('#color');
const createBoxColorBtn = document.querySelector('#create_box_color');
const createBoxColorResult = document.querySelector('#create_box_color_result');

if (createBoxColorBtn) {
    createBoxColorBtn.addEventListener('click', () => {
        createBoxColorResult.innerHTML = '';
        if (width && height && color) {
            const boxColor = document.createElement('div');
            boxColor.style.width = `${width.value}px`;
            boxColor.style.height = `${height.value}px`;
            boxColor.style.backgroundColor = color.value;

            createBoxColorResult.append(boxColor);
        }
    });
}