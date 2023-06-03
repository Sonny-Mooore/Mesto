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
const userInfo = new UserInfo(profileTitleSelector, profileSubtitleSelector,profileAvatarSelector)
//экземпляры валидации 
const formAvatarEditValidaton = new FormValidator(validationConfig,popupAvatarEditForm)
formAvatarEditValidaton.enableValidation()

const formPersonalEditValidaton = new FormValidator(validationConfig, popupEditForm)
formPersonalEditValidaton.enableValidation()

const formAddCardValidaton = new FormValidator(validationConfig, popupAddCardForm)
formAddCardValidaton.enableValidation()
//
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '8a43f496-a272-4f91-9a30-3f0499453648',
    'Content-Type': 'application/json'
  }
})

// api.getUserInfo().then(res => console.log(res))

// api.getDefaultCards().then(res => console.log(res))

Promise.all([api.getUserInfo(), api.getDefaultCards()]).then(([dataUser, dataCard]) => {

  dataCard.forEach( (item) => { item.myid = dataUser._id})
  
  userInfo.setUserInfo({userName: dataUser.name, userjob: dataUser.about, avatar: dataUser.avatar})


  sectionClass.addCardArray(dataCard)
  

})
 
const PopupCardDeleteClass = new PopupCardDelete(popupCardDeleteSelector, (item) => {
  item.cardRemove()
  PopupCardDeleteClass.close()
})

PopupCardDeleteClass.setEventListeners()


const popupWithImageClass = new PopupWithImage(popupZoomSelector)
popupWithImageClass.setEventListeners()




function createNewCard(element) {
  const elementCard = new Card(element, templateCardSelector, popupWithImageClass.open, PopupCardDeleteClass.open)
  return elementCard.renderCard();
}

const sectionClass = new Section({items: initialCards, renderer: (element) => {
sectionClass.addItem(createNewCard(element))
  }
}, elementsListSelector)


const popupAddCardClass = new PopupWithForm(popupAddCardSelector, (data) => {
  sectionClass.addItem(createNewCard(data))
  popupAddCardClass.close()
})
popupAddCardClass.setEventListeners()

profileAddCardButton.addEventListener("click", () => {
  formAddCardValidaton.resetValidationState()
  popupAddCardClass.open()
});



const popupProfile = new PopupWithForm(popupEditProfileSelector, (data) => {
  // console.log(data);

  api.setUserInfo(data).then((res) => console.log(res))

  // userInfo.setUserInfo(data)

  popupProfile.close()
})
popupProfile.setEventListeners()

profileEditButton.addEventListener("click", () => {
  formPersonalEditValidaton.resetValidationState()
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
});





const popupEditAvatarClass = new PopupWithForm(popupEditAvatarSelector, (data)=>{
  document.querySelector('.profile__avatar').src = data.avatar
  popupEditAvatarClass.close()
})
popupEditAvatarClass.setEventListeners()


const buttonAvatarOverlay  = document.querySelector('.profile__avatar-overlay').addEventListener('click', ()=> {
  
  formAvatarEditValidaton.resetValidationState()
  
  popupEditAvatarClass.open()
})

