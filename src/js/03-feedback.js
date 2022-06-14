import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
  submit: document.querySelector('[type="submit"]'),
};

let storedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (storedObject) {
  refs.email.value = storedObject.email;
  refs.message.value = storedObject.message;
}

refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const formElements = event.currentTarget.elements;
  const objectToStore = {
    email: formElements.email.value,
    message: formElements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectToStore));
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (refs.email.value === '') {
    alert('Email empty!!!');
  } else if (refs.message.value === '') {
    alert('Message empty!!!');
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    localStorage.clear();

    event.currentTarget.reset();
  }
}
