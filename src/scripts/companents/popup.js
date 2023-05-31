export default class Popup{
    constructor(popupClass){
        this._popupClass = document.querySelector(popupClass)
        this._closeIconButton = this._popupClass.querySelector('.popup__closed') 
    }

    _handleCloseWithClick = () => {
        this.close()
    }

    _closePopupOverlay = (event) =>{
        if (event.target === event.currentTarget) {
            this.close() 
            } 
    }
    
    setEventListeners(){
        this._popupClass.addEventListener('click', this._closePopupOverlay)
        this._closeIconButton.addEventListener('click', this._handleCloseWithClick)
    }
    
    open(){
        this._popupClass.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close(){
        this._popupClass.classList.remove("popup_opened")
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close()
          }          
    }
}


// // // функция открытие попапа
// function openPopup(popup) {
//     popup.classList.add("popup_opened");
//     document.addEventListener("keydown", closePopupEscape);
//     popup.addEventListener("mousedown", closePopupOverlay);
//   }

//   // функция закрытия попапа
// function closePopup(popup) {
//     popup.classList.remove("popup_opened");
//     document.removeEventListener("keydown", closePopupEscape);
//     popup.removeEventListener("mousedown", closePopupOverlay);
//   }

//   // функции закрития попапа с помошью ESC и кликом на оверлей
// const closePopupEscape = (event) => {
//     if (event.key === "Escape") {
//       const openPopup = document.querySelector(".popup_opened");
  
//       closePopup(openPopup);
//     }
//   };

//  const closePopupOverlay = (event) => {
    //   if (event.target === event.currentTarget) {
    //     closePopup(event.currentTarget);
    //   }
    // };