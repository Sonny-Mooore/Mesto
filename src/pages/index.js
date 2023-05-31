import './index.css'; 
import { initialCards } from "../scripts/utils/constants.js";
import Card from '../scripts/companents/card.js'
import FormValidator from '../scripts/companents/FormValidator.js';
import PopupWithImage from '../scripts/companents/PopupWithImage.js';
import Section from "../scripts/companents/section.js";
import UserInfo from "../scripts/companents/UserInfo.js";
import PopupWithForm from '../scripts/companents/PopupWithForm.js';

const wrapper = document.querySelector(".wrapper");
const addCardButton = wrapper.querySelector(".popup_add-card");
const popupItems = wrapper.querySelectorAll(".popup");
const closePopupButtonIcons = wrapper.querySelectorAll(".popup__closed");
const popupEditProfile = wrapper.querySelector(".popup_profile-edit");
const popupEditProfileSelector = '.popup_profile-edit';
const popupAddCard = wrapper.querySelector(".popup_add-card");
const popupAddCardSelector = ".popup_add-card"
const popupZoom = wrapper.querySelector(".popup_zoom");
const popupZoomSelector = '.popup_zoom'
const profileTitle = wrapper.querySelector(".profile__title");
const profileSubtitle = wrapper.querySelector(".profile__subtitle"); 
const profileEditButton = wrapper.querySelector(".profile__button");
const popupEditSubmitButton = popupEditProfile.querySelector(".popup__submit_edit_submit");
const profileAddCardButton = wrapper.querySelector(".profile__add-card");
const nameInputEditForm = wrapper.querySelector(".popup__input_edit_name");

const jobInputEditForm = wrapper.querySelector(".popup__input_edit_job");
const popupAddCardForm = document.forms.popupAddCardForm;
const popupEditForm = document.forms.popupEditForm;
const inputCardName = popupAddCard.querySelector(".popup__input_card_name");
const inputCardLink = popupAddCard.querySelector(".popup__input_card_link");

const elementsList = document.querySelector(".elements");
const elementsListSelector = ".elements"

const templateCard = ".template__card";

const popupZoomTitle = document.querySelector(".popup__zoom-title");
const popupZoomImage = document.querySelector(".popup__zoom-image");

const profileTitleSelector =  ".profile__title"
const profileSubtitleSelector = ".profile__subtitle"



// console.log(userInfo);

const validationConfig = {
  // formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  invalidInputClass: "popup__form-input_invalid",
  inactiveButtonClass: "popup__submit_invalid",
  activeButtonClass: "popup__submit_valid",
};

const userInfo = new UserInfo(profileTitleSelector, profileSubtitleSelector)
// console.log(userInfo);
//функция добавления карточки
const formPersonalEditValidaton = new FormValidator(validationConfig, popupEditForm)
formPersonalEditValidaton.enableValidation()
// console.log(formPersonalEditValidaton);
const formAddCardValidaton = new FormValidator(validationConfig, popupAddCardForm)
formAddCardValidaton.enableValidation()


const PopupWithImageClass = new PopupWithImage(popupZoomSelector)
PopupWithImageClass.setEventListeners()

// const popupClass = new Popup(popupEditProfileSelector)
// popupClass.setEventListeners()
// console.log(popupClass);

// function addCard(container, card) {
//   container.prepend(card);
// }

// function createCard(element) {
//   const elementCard = new Card(element, templateCard, PopupWithImageClass.open)
//   const cardElement = elementCard.addCard();
//   return cardElement
// }
function createNewCard(element) {
    const elementCard = new Card(element, templateCard, PopupWithImageClass.open) 
    // console.log(elementCard);
    return elementCard.addCard();
}
const sectionClass = new Section({
  items: initialCards,
  renderer:(element)=> {
    sectionClass.addItem(createNewCard(element))
  }
}, elementsListSelector)
sectionClass.addCardArray()



const popupAddCardClass = new PopupWithForm(popupAddCardSelector, (data) => {
  sectionClass.addItem(createNewCard(data))
  popupAddCardClass.close()
})
popupAddCardClass.setEventListeners()
 
// console.log(popupAddCardClass);

profileAddCardButton.addEventListener("click", () => {
  formAddCardValidaton.resetErrorInput()

  popupAddCardClass.open()
});




const popupProfile = new PopupWithForm(popupEditProfileSelector, (data) => {

  userInfo.setUserInfo(data)
  popupProfile.close()
})
popupProfile.setEventListeners()
// console.log(popupProfile);


profileEditButton.addEventListener("click", ()=>{
  formPersonalEditValidaton.resetErrorInput()
  // popupProfile.getInputsValue(userInfo.getUserInfo())
  popupProfile.setInputValue(userInfo.getUserInfo())
  popupProfile.open()
});



