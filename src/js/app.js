import ValidationForm from './ValidationForm';

const formSection = document.getElementsByClassName('form-section')[0];
const validationForm = new ValidationForm(formSection);
validationForm.bindToDOM();
// validationForm.addEventListeners();
