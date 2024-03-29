import Popup from "./Popup.js";

export default class PopupCardDelete extends Popup {
    constructor(popupSelector, submitFunction ) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitFunction = submitFunction;
        this.submitButton = this._form.querySelector('.popup__submit')
    }


    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => { 
            event.preventDefault()
            this.submitButton.textContent =`${this.submitButton.textContent}...`
            this._submitFunction({card:this._element,  cardId: this._cardId })
        });
    }



    open = ({card, cardId}) => {
        super.open()
        this._element = card;
        this._cardId = cardId;
    }
} 