// console.log('Hello World');

const first_name = document.querySelector('#first-name-input');
const first_span = document.querySelector('#first-name-span');
const first_img = document.querySelector('.first-name-img');

const last_name = document.querySelector('#last-name-input');
const last_span = document.querySelector('#last-name-span');
const last_img = document.querySelector('.last-name-img');

const email = document.querySelector('#email-input');
const email_span = document.querySelector('#email-span');
const email_img = document.querySelector('.email-img');

const password = document.querySelector('#password-input');
const password_span = document.querySelector('#password-span');
const password_img = document.querySelector('.password-img');

const emptyAlert = (e) => {
  e.preventDefault();
  if (first_name.value === '') {
    first_span.style.display = 'block';
    first_img.style.display = 'block';
    first_name.style.borderColor = 'red';
    setTimeout(() => {
      first_span.style.display = 'none';
      first_img.style.display = 'none';
      first_name.style.borderColor = '';
    }, 2000);
  } else if (last_name.value === '') {
    last_span.style.display = 'block';
    last_img.style.display = 'block';
    last_name.style.borderColor = 'red';
    setTimeout(() => {
      last_span.style.display = 'none';
      last_img.style.display = 'none';
      last_name.style.borderColor = '';
    }, 2000);
  } else if (email.value === '') {
    email_span.style.display = 'block';
    email_img.style.display = 'block';
    email.style.borderColor = 'red';
    setTimeout(() => {
      email_span.style.display = 'none';
      email_img.style.display = 'none';
      email.style.borderColor = '';
    }, 2000);
  } else if (password.value === '') {
    password_span.style.display = 'block';
    password_img.style.display = 'block';
    password.style.borderColor = 'red';
    setTimeout(() => {
      password_span.style.display = 'none';
      password_img.style.display = 'none';
      password.style.borderColor = '';
    }, 2000);
  }
};

document.querySelector('.form-btn').addEventListener('click', emptyAlert);
