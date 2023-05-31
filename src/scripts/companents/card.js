export default class Card {
    constructor(cardData, templateSelector, zoomPopupImage ){
      this._title = cardData.title;
      this._link = cardData.link;
      this._templateSelector = templateSelector;
      this._zoomPopupImage = zoomPopupImage;

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
      this._elementImage.alt = this._title
      this._elementTitle.textContent = this._title
      this._setEventListeners()
      return this._elementCloneCard;
    }
  
    _toggleLike = () => this._elementlikeButton.classList.toggle("element_button-active");
  
    _deleteCardButton = () => this._elementCloneCard.remove();
  
    _handlezoomPopupImage = () => this._zoomPopupImage({name:this._title, link:this._link})
  
    _setEventListeners(){
      this._elementlikeButton.addEventListener("click", this._toggleLike);
      this._elementImage.addEventListener("click", this._handlezoomPopupImage);
      this._elementTrashButton.addEventListener("click", this._deleteCardButton);
    }  
  }