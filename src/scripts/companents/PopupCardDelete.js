import Popup from "./Popup.js";

export default class PopupCardDelete extends Popup {
    constructor(popupSelector, submitFunction ) {
        super(popupSelector);
        this._submitFunction = submitFunction;

    }


    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => { 
            event.preventDefault()
            this._submitFunction(this._element)
        });
    }



    open = (element) => {
        super.open()
        this._element = element;
    }
} 