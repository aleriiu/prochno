'use strict';

function handleFormSubmit(event) {
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault()
  formBtn.style.backgroundColor = "#FFF";
  formBtn.innerText = "Отправлено!";
  formBtn.style.color = "#028164";
  nameInput.value = '';
  phoneInput.value = '';
  formBtn.disabled = true;
  formBtn.style.cursor = "auto";
}

const applicantForm = document.querySelector('.form');
const formBtn = applicantForm.querySelector('button');
const nameInput = applicantForm.querySelector('.input-name');
const phoneInput = applicantForm.querySelector('.input-phone');

applicantForm.addEventListener('submit', handleFormSubmit);


