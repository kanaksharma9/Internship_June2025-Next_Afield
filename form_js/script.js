const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const clearBtn = document.getElementById('clear');


window.onload = () => {
  const savedData = JSON.parse(localStorage.getItem('formData'));
  if (savedData) {
    nameInput.value = savedData.name || '';
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  }
};


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem('formData', JSON.stringify(data));
  alert('Form data saved to Local Storage!');
});


clearBtn.addEventListener('click', () => {
  localStorage.removeItem('formData');
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  alert('Form data cleared!');
});
