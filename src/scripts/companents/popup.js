export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._closeIconButton = this._popup.querySelector('.popup__closed');
        
    }

    _handleCloseWithClick = () => {
        this.close()
    }

    _closePopupOverlay = (event) => {
        if (event.target === event.currentTarget) {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._closePopupOverlay)
        this._closeIconButton.addEventListener('click', this._handleCloseWithClick)
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened")
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close()
        }
    }
}


