const contactMe = document.querySelector('#contactMeForm'); 
const sendContactMe = document.querySelector('#sendContactMe');
const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]'); 
sendContactMe.addEventListener('click', event => { 
    event.preventDefault(); 
    if (validateForm(contactMe)) { 
      const data = { 
                name: name.value,
                email: email.value, 
                message: message.value}
          const xhr = new XMLHttpRequest(); 
          xhr.responseType = 'json';
          xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail'); 
          xhr.send(JSON.stringify(data));
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
      field.nextElementSibling.textContent = "Заполните это поле"; 
      return false; 
  } else { 
      field.nextElementSibling.textContent = ''; 
      return  true;
  } 
  
} 