import './index.css';
import { initialCards } from "../scripts/utils/constants.js";
import Card from '../scripts/companents/Сard.js'
import FormValidator from '../scripts/companents/FormValidator.js';
import PopupWithImage from '../scripts/companents/PopupWithImage.js';
import Section from "../scripts/companents/Section.js";
import UserInfo from "../scripts/companents/UserInfo.js";
import PopupWithForm from '../scripts/companents/PopupWithForm.js';

const wrapper = document.querySelector(".wrapper");
const popupEditProfileSelector = '.popup_profile-edit';
const popupAddCardSelector = ".popup_add-card"
const popupZoomSelector = '.popup_zoom'
const profileEditButton = wrapper.querySelector(".profile__button");
const profileAddCardButton = wrapper.querySelector(".profile__add-card");
const popupAddCardForm = document.forms.popupAddCardForm;
const popupEditForm = document.forms.popupEditForm;
const elementsListSelector = ".elements"
const templateCardSelector = ".template__card";
const profileTitleSelector = ".profile__title"
const profileSubtitleSelector = ".profile__subtitle"

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  invalidInputClass: "popup__form-input_invalid",
  inactiveButtonClass: "popup__submit_invalid",
  activeButtonClass: "popup__submit_valid",
};

const userInfo = new UserInfo(profileTitleSelector, profileSubtitleSelector)

const formPersonalEditValidaton = new FormValidator(validationConfig, popupEditForm)
formPersonalEditValidaton.enableValidation()

const formAddCardValidaton = new FormValidator(validationConfig, popupAddCardForm)
formAddCardValidaton.enableValidation()


const popupWithImageClass = new PopupWithImage(popupZoomSelector)
popupWithImageClass.setEventListeners()

function createNewCard(element) {
  const elementCard = new Card(element, templateCardSelector, popupWithImageClass.open)
  return elementCard.renderCard();
}
const sectionClass = new Section({
  items: initialCards,
  renderer: (element) => {
    sectionClass.addItem(createNewCard(element))
  }
}, elementsListSelector)
sectionClass.addCardArray()


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
  userInfo.setUserInfo(data)
  popupProfile.close()
})
popupProfile.setEventListeners()

profileEditButton.addEventListener("click", () => {
  formPersonalEditValidaton.resetValidationState()
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
});



