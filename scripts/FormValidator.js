export default class FormValidator {
    constructor(ValidateConfig, Form){
      this._inputSelector =  ValidateConfig.inputSelector; 
      this._submitButtonSelector =ValidateConfig.submitButtonSelector;
      this._invalidInputClass  = ValidateConfig.invalidInputClass;
      this._inactiveButtonClass = ValidateConfig.inactiveButtonClass;
      this._activeButtonClass = ValidateConfig.activeButtonClass;
      this._form = Form
      this._submitButton =  this._form.querySelector(this._submitButtonSelector)
      this._inputs =  this._form .querySelectorAll(this._inputSelector)
    }
  
    _enableButton(){
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
    _disableButton(){
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);
    }
  
    _hasInvalidInput() {
      return Array.from(this._inputs).some((input) => !input.validity.valid);
    }
  
    _toggleButtonClass(){
      this._hasInvalidInput() ? this._disableButton() : this._enableButton()
    }
  
    enableValidation(){
      this._setEventListener()
    }
  
    _setEventListener = () =>{
      this._inputs.forEach((input)=>{
        input.addEventListener('input',() =>{
          this._checkInputValidity(input)
          this._toggleButtonClass()
        })
      })
    }
    
    _hideErrorInput = (spanErrorElement,input)=>{
      input.classList.remove(this._invalidInputClass)
      spanErrorElement.textContent = ''
    }
    _showInputError = (spanErrorElement,input)=>{
      input.classList.add(this._invalidInputClass)
      spanErrorElement.textContent = input.validationMessage
    }
  
    _checkInputValidity = (input) => {
      const spanErrorElement = this._form.querySelector(`#${input.id}-error`)
      input.validity.valid ? this._hideErrorInput(spanErrorElement,input) : this._showInputError(spanErrorElement,input)
    }
  
  
    resetErrorInput(){
      this._inputs.forEach((input) => {
        const spanErrorElement = this._form.querySelector(`#${input.id}-error`)
        if (!input.validity.valid) {
          this._hideErrorInput(spanErrorElement,input)
        }
      })  
      this._disableButton()
    }
  }