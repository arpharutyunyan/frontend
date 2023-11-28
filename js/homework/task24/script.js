// object for checking if inputs pass validation
const submitValidation = {
    'firstNameInput': false,
    'lastNameInput': false,
};

// sorry, but have not time for making with createElement :)
const creditCardsBlock = document.querySelector('.credit-cards');
creditCardsBlock.innerHTML = `
    <h3>Credit Cards</h3>
    <div class="form-fields">
      <div class="field-container">
        <label>Name On Card</label>
        <input type="text" class="field cardNameInput" name="creditCardName" placeholder="Name Surname">
      </div>
      <div class="field-container">
        <label>Card Number</label>
        <input type="text" class="field cardNumberInput" name="creditCardNumber" placeholder="xxxx xxxx xxxx xxxx">
      </div>
      <div class="field-container">
        <label>Action</label>
        <button class="btn delete disabled-btn">Delete</button>
      </div>
    </div>
    <button class="btn btn-add">+ credit card</button>`;


const personalInformation = document.querySelectorAll('.personal-information input');

personalInformation.forEach(item => {
    item.addEventListener('focusout', (event) => {
        validateName(event.target);
    });
});

function validateName(element) {
    submitValidation[element.id] = false;
    clearErrorFiled(element);

    if (element.id === 'firstNameInput' || element.id === 'lastNameInput') {
        if (!element.value) {
            createErrorFiled(element, 'This field is required!');
            console.log(submitValidation);
            return;
        }
    }

    if (element.value.length > 128) {
        createErrorFiled(element, 'This field should be max 128 symbols!');
        console.log(submitValidation);

        return;
    }

    submitValidation[element.id] = true;
    console.log(submitValidation);
}

const emailInput = document.querySelector('#emailInput');
if (emailInput) {
    emailInput.addEventListener('focusout', (event) => {
        validateEmail(event.target);
    });
}

function validateEmail(element) {
    submitValidation[element.id] = false;
    clearErrorFiled(element);

    const pattern = /^\w+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
    const match = pattern.test(element.value);

    if (element.value && !match) {
        createErrorFiled(element, 'Invalid Email!');
        console.log(submitValidation);
        return;
    }
    submitValidation[element.id] = true;
    console.log(submitValidation);
}

const phoneNumberInput = document.querySelector('#phoneNumberInput');
if (phoneNumberInput) {
    checkPhoneAndPostCode(phoneNumberInput);
}

const postalCodeInput = document.querySelector('#postalCodeInput');
if (postalCodeInput) {
    checkPhoneAndPostCode(postalCodeInput);
}

function checkPhoneAndPostCode(element) {
    element.addEventListener('focusout', (event) => {
        ValidateNumber(event.target);
    });

    element.addEventListener('keypress', (event) => {
        if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
            event.preventDefault();
        }
    });
}

function ValidateNumber(element) {
    submitValidation[element.id] = false;
    clearErrorFiled(element);

    if (element.value && element.value.length < 4) {
        createErrorFiled(element, 'Please enter at least 4 characters!');
        console.log(submitValidation);
        return;
    }

    submitValidation[element.id] = true;
    console.log(submitValidation);
}

const cardFields = document.querySelectorAll('.credit-cards .form-fields');
let deleteBtn = document.querySelector('.delete');
const addBtn = document.querySelector('.btn-add');
let createdCard = 1;

if (addBtn) {
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (cardFields.length) {
            const [cardField] = cardFields;
            deleteBtn.classList.replace('disabled-btn', 'btn-delete');
            const clonedCardField = cardField.cloneNode(true);
            addBtn.before(clonedCardField);

            const clonedDeleteBtn = clonedCardField.querySelector('.btn-delete');
            if (clonedDeleteBtn) {
                clonedDeleteBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    deleteCard(e);
                });
            }
            createdCard++;
        }
    });
}

if (deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteCard(e);
    });
}

function deleteCard(e) {
    e.currentTarget.closest('.form-fields').remove();
    createdCard--;

    if (createdCard === 1) {
        deleteBtn = document.querySelector('.delete');
        deleteBtn.classList.replace('btn-delete', 'disabled-btn');
    }
}

const cardNumberInputs = document.querySelectorAll('.cardNumberInput');
if (cardNumberInputs.length) {
    cardNumberInputs.forEach(item => {
        item.addEventListener('keypress', (e)=>{
            if (e.keyCode >= 48 && e.keyCode <= 57 && e.target.value.length < 19) {
                validateCardNumber(e.target);
            }else{
                e.preventDefault();
            }
        });
    });
}

function validateCardNumber(element){
    const formattedCardNumber = element.value.replace(/\W/g, '').replace(/(\d{4})/g, '$1 ');

    element.value = formattedCardNumber;
}

function createErrorFiled(elem, msg) {
    const msgFiled = document.createElement('span');
    msgFiled.classList.add('error');
    msgFiled.innerText = msg;
    elem.after(msgFiled);
    elem.classList.add('red-border');
}

function clearErrorFiled(elem) {
    const nextElement = elem.nextElementSibling;

    if (nextElement && nextElement.classList.contains('error')) {
        nextElement.remove();
    }

    elem.classList.remove('red-border');
}

const submitBtn = document.querySelector('.btn-submit');
if(submitBtn){
    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const isvalidationPass = Object.values(submitValidation).every(item => item);
        if(isvalidationPass){
            submitBtn.closest('form').submit();
        }
    })
}
