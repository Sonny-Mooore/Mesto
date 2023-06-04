import './index.css';
import { initialCards, validationConfig } from "../scripts/utils/constants.js";
import Card from '../scripts/companents/Сard.js'
import FormValidator from '../scripts/companents/FormValidator.js';
import PopupWithImage from '../scripts/companents/PopupWithImage.js';
import Section from "../scripts/companents/Section.js";
import UserInfo from "../scripts/companents/UserInfo.js";
import PopupWithForm from '../scripts/companents/PopupWithForm.js';
import PopupCardDelete from '../scripts/companents/PopupCardDelete.js';
import Api from '../scripts/companents/Api.js';

const wrapper = document.querySelector(".wrapper");

const profileEditButton = wrapper.querySelector(".profile__button");
const profileAddCardButton = wrapper.querySelector(".profile__add-card");
//forms
const popupAddCardForm = document.forms.popupAddCardForm;
const popupEditForm = document.forms.popupEditForm;
const popupAvatarEditForm = document.forms.avatarProfile
//selectors
const popupEditProfileSelector = '.popup_profile-edit';
const popupAddCardSelector = ".popup_add-card"
const popupZoomSelector = '.popup_zoom'

const elementsListSelector = ".elements"
const templateCardSelector = ".template__card";
const profileTitleSelector = ".profile__title"
const profileSubtitleSelector = ".profile__subtitle"
const popupEditAvatarSelector = '.popup_edit_avatar'
const popupCardDeleteSelector = '.popup_delete-popup'
const profileAvatarSelector = '.profile__avatar'
//

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '8a43f496-a272-4f91-9a30-3f0499453648',
    'Content-Type': 'application/json'
  }
})


const userInfo = new UserInfo(profileTitleSelector, profileSubtitleSelector,profileAvatarSelector)
//экземпляры валидации 
const formAvatarEditValidaton = new FormValidator(validationConfig,popupAvatarEditForm)
formAvatarEditValidaton.enableValidation()

const formPersonalEditValidaton = new FormValidator(validationConfig, popupEditForm)
formPersonalEditValidaton.enableValidation()

const formAddCardValidaton = new FormValidator(validationConfig, popupAddCardForm)
formAddCardValidaton.enableValidation()
//

function createNewCard(element) {
  const elementCard = new Card(element, templateCardSelector, popupWithImageClass.open, PopupCardDeleteClass.open, (likeItem,cardId) => {
    if (likeItem.classList.contains('element_button-active')) {
      api.deleteLike(cardId).then(res =>{
        console.log(res);
        elementCard.toggleLikes(res.likes)
      }).catch((error => console.error(`Ошибка при убирания лайка ${error}`))) 
    } else {
      api.setLike(cardId).then(res =>{
        elementCard.toggleLikes(res.likes)
      }).catch((error => console.error(`Ошибка при создании лайка ${error}`))) 
    }
  
  })
  return elementCard.renderCard();

}

const sectionClass = new Section({items: initialCards, renderer: (element) => {
  sectionClass.addItem(createNewCard(element))
    }
  }, elementsListSelector)
  
  
 
const PopupCardDeleteClass = new PopupCardDelete(popupCardDeleteSelector, ({card,cardId}) => {
  api.deteteCard(cardId).then( () =>{
    card.cardRemove()
    PopupCardDeleteClass.close()
  }).catch((error => console.error(`Ошибка при удаления карты ${error}`))).finally() 



})

PopupCardDeleteClass.setEventListeners()


const popupWithImageClass = new PopupWithImage(popupZoomSelector)
popupWithImageClass.setEventListeners()



const popupAddCardClass = new PopupWithForm(popupAddCardSelector, (data) => {
  api.addCard(data).then(dataCard =>{
    dataCard.myid = userInfo.getId()
    sectionClass.addItem(createNewCard(dataCard))
     popupAddCardClass.close()
  }).catch((error => console.error(`Ошибка при создании новой создания карточки ${error}`)).finally(()=>popupAddCardClass.setDefaultTextButton())
)})

popupAddCardClass.setEventListeners()

profileAddCardButton.addEventListener("click", () => {
  formAddCardValidaton.resetValidationState()
  popupAddCardClass.open()
});





// api.getUserInfo().then(res => console.log(res))

// api.getDefaultCards().then(res => console.log(res))

Promise.all([api.getUserInfo(), api.getDefaultCards()]).then(([dataUser, dataCard]) => {

  dataCard.forEach( (item) => { item.myid = dataUser._id})
  
  userInfo.setUserInfo({userName: dataUser.name, userjob: dataUser.about, avatar: dataUser.avatar})

  sectionClass.addCardArray(dataCard)
  

}).catch((error)=> console.error(`Ошибка при создании данных ${error}`))



const popupProfile = new PopupWithForm(popupEditProfileSelector, (data) => {
  api.setUserInfo(data).then((res) => {
     userInfo.setUserInfo({userName: res.name, userjob: res.about, avatar: res.avatar})
     popupProfile.close()
  }).catch((error)=> console.error(`Ошибка ${error}`)).finally(()=>popupProfile.setDefaultTextButton())

})

popupProfile.setEventListeners()

profileEditButton.addEventListener("click", () => {
  formPersonalEditValidaton.resetValidationState()
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
});



const popupEditAvatarClass = new PopupWithForm(popupEditAvatarSelector, (data)=>{
  api.setAvatar(data).then(res => {

    userInfo.setUserInfo({name: res.name, job: res.about, avatar: res.avatar})})
    popupEditAvatarClass.close()
    .catch((error)=> console.error(`Ошибка при запросе на обновления Аватара ${error}`)).finally(()=> popupEditAvatarClass.setDefaultTextButton())
  

})
popupEditAvatarClass.setEventListeners()


const buttonAvatarOverlay  = document.querySelector('.profile__avatar-overlay').addEventListener('click', ()=> {
  
  formAvatarEditValidaton.resetValidationState()
  
  popupEditAvatarClass.open()
})

