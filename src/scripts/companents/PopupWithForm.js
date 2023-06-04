import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector)
        this._submitFunction = submitFunction
        this._form = this._popup.querySelector('.popup__form')
        this._inputs = this._form.querySelectorAll('.popup__input')
        this._submitButton = this._form.querySelector('.popup__submit')
        this._defaultTextButton = this._submitButton.textContent

    }

    _getInputValues() {
        this._values = {};

        this._inputs.forEach((input => {
            this._values[input.name] = input.value
        }))
        return this._values
    }

    setInputValues(userData) {
        this._inputs.forEach((input) => {
            input.value = userData[input.name]
        })
    }

    setDefaultTextButton(){
        this._submitButton.textContent = this._defaultTextButton
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._submitButton.textContent = `${this._submitButton.textContent}...`
          this._submitFunction(this._getInputValues());
        });
      }

    close() {
        super.close()
        this._form.reset()
    }
}