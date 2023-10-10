const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

function loadFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedData) {
    emailInput.value = savedData.email;
    messageTextarea.value = savedData.message;
  }
}

feedbackForm.addEventListener('input', () => {
  const formData = { email: emailInput.value, message: messageTextarea.value };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = { email: emailInput.value, message: messageTextarea.value };
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  emailInput.value = '';
  messageTextarea.value = '';
  console.log(formData);
});
