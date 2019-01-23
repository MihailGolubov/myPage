const form = document.getElementsByTagName('form');
const sendContactMe = document.querySelector('#sendContactMe');
const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');


sendContactMe.addEventListener('click', function (event) {
      if(name.value != 0 && email.value !=0 && message.value !=0){
        const data = {
            name: name.value,
            email: email.value,
            message: message.value
      }
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
      xhr.send(JSON.stringify(data));
    }
  });