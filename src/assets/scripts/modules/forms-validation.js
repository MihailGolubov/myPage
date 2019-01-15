
const contactMe = document.querySelector('#contactMeForm');
const sendContactMe = document.querySelector('#sendContactMe');

sendContactMe.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(contactMe)) {
        console.log('все ок');
    }

});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.email)) {
        valid = false;
    }

    if (!validateField(form.elements.message)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if(!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
    } else {
        field.nextElementSibling.textContent = '';
        
        return  true;
    }
}