const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

 
  
  function checkValidEmail(email) {
    if(email.validity.valueMissing) {  
      showAlertError(email, `${email.id} is required!`);
    } else if(email.validity.typeMismatch) {      
      showAlertError(email, `Entered value needs to be an e-mail address`);  
    } else {
      showAlertSuccess(email);
    }
  }

  function checkUsername(input, min, max) {
    if (input.value.trim() === '') {
      showAlertError(input, `${input.id} is required!`);
    } else
    if (input.value.length < min ) {
      showAlertError(input, `${input.id} must be at least ${min} characters`);
    } else if (input.value.length > max) {      
        showAlertError(input, `${input.id} must NOT be more than ${max} characters`);
      } else {
        showAlertSuccess(input);
      }
  }

  function showAlertSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';

  }

  function showAlertError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.textContent = message;
  }

  function checkPassword(input, input2, min) {

    if (input.value === '' && input2.value === '') {
      showAlertError(input, `Password is required!`);
      showAlertError(input2, `Password is required!`);
    }
    if (input.value === '' && input2.value !== '') {
      showAlertError(input, `Password is required!`);
    }
    if (input.value !== '' && input2.value === '') {
      showAlertError(input2, `Password is required!`);
    }
    if (input.value !== '' && input2.value !== '') {
      if (input.value.length < min ) {
        showAlertError(input, `${input.id} must contain at least ${min} characters`); 
      } else if (input.value.length >= min ) {   
        if (input.value !== input2.value) {
        showAlertError(input2, `The two passwords are not similar!`);  
        } else {
          showAlertSuccess(input);
          showAlertSuccess(input2);
        }
      }
    }
  }

form.addEventListener('submit', function(e) {
  e.preventDefault();
 
  checkUsername(username, 4, 15);
  checkValidEmail(email);
  checkPassword(password, password2, 8, 15);
});