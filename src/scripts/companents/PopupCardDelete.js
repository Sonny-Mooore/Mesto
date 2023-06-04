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
            this._submitFunction({card:this._element,  cardId: this._cardId })
        });
    }



    open = ({card, cardId}) => {
        super.open()
        this._element = card;
        this._cardId = cardId;
    }
} 