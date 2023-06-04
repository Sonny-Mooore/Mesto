import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupClass) {
        super(popupClass)
        this._form = this._popup.querySelector('.popup__form');
        this._popupImage = this._popup.querySelector('.popup__zoom-image')
        this._popupZoomTitle = this._popup.querySelector('.popup__zoom-title')
    }

    open = ({ name, link }) => {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupZoomTitle.textContent = name;
        super.open()
    }
}