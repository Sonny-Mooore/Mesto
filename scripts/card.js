export default class Card {
    constructor(object, templateSelector, PopupImage ){
      this._object = object;
      this._name = object.name;
      this._link = object.link;
      this._templateSelector = templateSelector;
      this._zoomPopupImage = PopupImage;
    }
  
    _tempateItemClone(){
      return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true)
    }
  
    addCard(){
      this._elementCloneCard = this._tempateItemClone()
      this._elementlikeButton = this._elementCloneCard.querySelector('.element__button')
      this._elementImage = this._elementCloneCard.querySelector('.element__image')
      this._elementTrashButton = this._elementCloneCard.querySelector('.element__button-trash')
      this._elementTitle = this._elementCloneCard.querySelector('.element__title')
      this._elementImage.src = this._link
      this._elementImage.alt = this._name 
      this._elementTitle.textContent = this._name 
      this._setEventListeners()
  
      return this._elementCloneCard;
    }
  
    _toggleLike = () => this._elementlikeButton.classList.toggle("element_button-active");
  
    _deleteCardButton = () => this._elementCloneCard.remove();
  
    _zoomPopupImage = () => this._zoomPopupImage;
  
    _setEventListeners(){
      this._elementlikeButton.addEventListener("click", this._toggleLike);
      this._elementImage.addEventListener("click", this._zoomPopupImage);
      this._elementTrashButton.addEventListener("click", this._deleteCardButton);
    }  
  }