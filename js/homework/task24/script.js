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
    item.addEventListener('focusout', validateName);
});

function validateName(event) {
    const element = event.target;
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
    emailInput.addEventListener('focusout', validateEmail);
}

function validateEmail(event) {
    const element = event.target;
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
    element.addEventListener('focusout', validateNumber);

    element.addEventListener('keypress', (event) => {
        if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
            event.preventDefault();
        }
    });
}

function validateNumber(event) {
    const element = event.target;
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
            const clonedCardNumberInput = clonedCardField.querySelector('.cardNumberInput');

            clonedCardNumberInput.addEventListener('keypress', changeCardFormat);
            clonedCardNumberInput.addEventListener('focusout', validateCardNumber);

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

function changeCardFormat(e){
    if (e.keyCode >= 48 && e.keyCode <= 57 && e.target.value.length < 19) {
        const element = e.target;
        element.value = element.value.replace(/\W/g, '').replace(/(\d{4})/g, '$1 ');
    } else {
        e.preventDefault();
    }
}

const cardNumberInput = document.querySelector('.cardNumberInput');
if (cardNumberInput) {
    cardNumberInput.addEventListener('keypress', changeCardFormat);
    cardNumberInput.addEventListener('focusout', validateCardNumber);
}

function validateCardNumber(event) {
    const element = event.target;
    submitValidation['cardNumberInput'] = false;
    clearErrorFiled(element);

    const value = element.value.replace(/ /g, '');
    if (value && value.length < 16) {
        createErrorFiled(element, 'Should be 16 number!');
        console.log(submitValidation);
        return;
    }

    submitValidation['cardNumberInput'] = true;
    console.log(submitValidation);
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

function createUserObject(inputs) {
    const userInfo = {};
    userInfo['id'] = Date.now(); // use for unique id
    userInfo['creditCardIds'] = [];

    inputs.forEach(elements => {
        elements.forEach(element => {
            userInfo[element.id] = element.value;
        });
    });

    return userInfo;
}

function showUserObject(userInfo) {
    for(let key in userInfo){
        const element = document.querySelector(`#${key}`);
        if(element){
            element.value = userInfo[key];
            submitValidation[key] = true; // after reload set value true for second submit
        }
    }
}

function showCardObject(creditCards) {
    creditCards.forEach((card, key) => {
        if(key){
            addBtn.click();
            const createdElement = creditCardsBlock.querySelectorAll('.form-fields');
            const currentElement = createdElement[createdElement.length - 1];
            for(let key in card){
                const element = currentElement.querySelector(`input[name=${key}]`);
                if(element){
                    element.value = card[key];
                }
            }
        }else{ // first card
            for(let key in card){
                const element = document.querySelector(`input[name=${key}]`);
                if(element){
                    element.value = card[key];
                }
            }
        }

    });
    submitValidation['cardNumberInput'] = true;
}

(()=>{
    const userInfo = localStorage.getItem('user');
    if(userInfo){
        showUserObject(JSON.parse(userInfo));
    }

    const creditCards = localStorage.getItem('creditCards');
    if(creditCards){
        showCardObject(JSON.parse(creditCards));
    }
})();

function createCardObject(userInfo) {
    const creditCardsBlock = document.querySelectorAll('.credit-cards .form-fields');

    const creditCardsInfo = [];
    creditCardsBlock.forEach((elements, key) => {
        const creditCardInputs = elements.querySelectorAll('input');
        const creditCard = {};
        creditCardInputs.forEach(element => {
            creditCard['id'] = Date.now() + key; // use for unique id
            creditCard['userId'] = userInfo.id;
            creditCard[element.name] = element.value;
        });
        userInfo['creditCardIds'].push(creditCard['id']);
        creditCardsInfo.push(creditCard);
    });

    return creditCardsInfo;
}

const submitBtn = document.querySelector('.btn-submit');
if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isValidationPass = Object.values(submitValidation).every(item => item);
        if (isValidationPass) {
            const personalInformation = document.querySelectorAll('.personal-information input');
            const contactDetails = document.querySelectorAll('.contact-details input');
            const addressDetails = document.querySelectorAll('.address-details input');

            const userInfo = createUserObject([personalInformation, contactDetails, addressDetails]);
            const creditCardsInfo = createCardObject(userInfo);
            localStorage.setItem('user', JSON.stringify(userInfo));
            localStorage.setItem('creditCards', JSON.stringify(creditCardsInfo));

            window.location.reload();
        }
    });
}

