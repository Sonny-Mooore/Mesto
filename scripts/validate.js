//updates validate js

const ValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  invalidInputClass: "popup__form-input_invalid",
  inactiveButtonClass: "popup__submit_invalid",
  activeButtonClass: "popup__submit_valid",
};

const enableValidation = ({ formSelector, ...rest }) => {
  const popupForms = Array.from(document.querySelectorAll(formSelector));

  popupForms.forEach((popupForm) => {
    popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const submitButton = popupForm.querySelector(".popup__submit");
      disableButton(submitButton, rest);
    });
    setEventListeners(popupForm, rest);
  });
};

const setEventListeners = (
  FormToValidate,
  { inputSelector, submitButtonSelector, ...rest }
) => {
  const formInputs = Array.from(FormToValidate.querySelectorAll(inputSelector));
  const formButton = FormToValidate.querySelector(submitButtonSelector);
  disableButton(formButton, rest);
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, rest);
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      }
    });
  });
};

function hasInvalidInput(formInputs) {
  return formInputs.some((item) => !item.validity.valid);
}

const checkInputValidity = (input, { invalidInputClass, ...rest }) => {
  const currentInputError = document.querySelector(`#${input.id}-error`);

  if (input.checkValidity()) {
    currentInputError.textContent = "";
  } else {
    currentInputError.textContent = input.validationMessage;
  }
};

function disableButton(button, { inactiveButtonClass }) {
  button.classList.add(inactiveButtonClass);
  button.setAttribute("disabled", true);
}

function enableButton(button, { inactiveButtonClass }) {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute("disabled");
}

enableValidation(ValidationConfig);
