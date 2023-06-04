export default class Card {
    constructor(cardData, templateSelector, zoomPopupImage, deletePopapOpen, changeLike, cardId){
      // console.log(cardData);
      const {likes, link, myid, name, owner, _id } = cardData
      this._templateSelector = templateSelector;
      this._zoomPopupImage = zoomPopupImage;
      this._deletePopapOpen = deletePopapOpen;
      this._changeLike = changeLike
      this._cardId = _id 

      this._likesArray = likes.length
      this._elementCloneCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true)
      this._likeCounter = this._elementCloneCard.querySelector('.element__button_like-counter')
      this._name = name;
      this._link = link;
      this._userId = _id
      this._ownerId = owner;
      this._likes = likes;
      this._myId = myid;

    }
  
    _isLikedByOwner(){ 
      if (this._myId === this._owner) {
        this._elementTrashButton.style.display ='block'
      } else {
        this._elementTrashButton.style.display ='none'
      }
    }
  
    renderCard(){
      this._elementlikeButton = this._elementCloneCard.querySelector('.element__button')
      this._elementImage = this._elementCloneCard.querySelector('.element__image')
      this._elementTrashButton = this._elementCloneCard.querySelector('.element__button-trash')
      this._elementTitle = this._elementCloneCard.querySelector('.element__title')
      this._elementImage.src = this._link
      this._elementImage.alt = this._name
      this._elementTitle.textContent = this._name
      this._isLikedByOwner()
      this._checklikeStatus()
      this._setEventListeners()
      return this._elementCloneCard;
    }
  
    _toggleLike = () => {
      this._changeLike(this._elementlikeButton, this._cardId)
    }
  
    _deleteCardButton = () => {
      this._deletePopapOpen({card: this, cardId: this._cardId})
    }
    
    toggleLikes(arrayLikes){
      this._elementlikeButton.classList.toggle("element_button-active");

      this._likeCounter.textContent = arrayLikes.length
    }
  
    _handlezoomPopupImage = () => this._zoomPopupImage({name: this._name, link: this._link})
  
    _setEventListeners(){
      this._elementlikeButton.addEventListener("click", this._toggleLike);
      this._elementImage.addEventListener("click", this._handlezoomPopupImage);
      this._elementTrashButton.addEventListener("click", this._deleteCardButton);
    }  

    cardRemove(){
      this._elementCloneCard.remove()
    }


    _checklikeStatus(){
      this._likes.forEach(element => {
        if (element._id === this._myId) {
          this._elementlikeButton.classList.toggle("element_button-active");
          return
        } else {
          this._likeCounter.textContent = this._likesArray 
        }
      });
    }



  }