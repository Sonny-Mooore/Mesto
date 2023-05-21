import { initialCards } from "./constants.js";
import Card from './card.js'
import FormValidator from './FormValidator.js';

const wrapper = document.querySelector(".wrapper");
//кнопки редактирования
const addCardButton = wrapper.querySelector(".popup_add-card");

const popupItems = wrapper.querySelectorAll(".popup");

const closePopupButtonIcons = wrapper.querySelectorAll(".popup__closed");

//все попапы
const popupEditProfile = wrapper.querySelector(".popup_profile-edit");
const popupAddCard = wrapper.querySelector(".popup_add-card");
const popupZoom = wrapper.querySelector(".popup_zoom");

const profileTitle = wrapper.querySelector(".profile__title");
const profileSubtitle = wrapper.querySelector(".profile__subtitle");
const profileEditButton = wrapper.querySelector(".profile__button");
const popupEditSubmitButton = popupEditProfile.querySelector(
  ".popup__submit_edit_submit"
);
const profileAddCardButton = wrapper.querySelector(".profile__add-card");

const nameInputEditForm = wrapper.querySelector(".popup__input_edit_name");
const jobInputEditForm = wrapper.querySelector(".popup__input_edit_job");
const popupAddCardForm = document.forms.popupAddCardForm;
const popupEditForm = document.forms.popupEditForm;

const inputCardName = popupAddCard.querySelector(".popup__input_card_name");
const inputCardLink = popupAddCard.querySelector(".popup__input_card_link");

const elementsList = document.querySelector(".elements");

const templateCard = ".template__card";

const popupZoomTitle = document.querySelector(".popup__zoom-title");
const popupZoomImage = document.querySelector(".popup__zoom-image");

const validationConfig = {
  // formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  invalidInputClass: "popup__form-input_invalid",
  inactiveButtonClass: "popup__submit_invalid",
  activeButtonClass: "popup__submit_valid",
};

// //функция добавления карточки
const formPersonalEditValidaton = new FormValidator(validationConfig, popupEditForm)

formPersonalEditValidaton.enableValidation()

const formAddCardValidaton = new FormValidator(validationConfig, popupAddCardForm)

formAddCardValidaton.enableValidation()

function addCard(container, card) {
  container.prepend(card);
}

function createCard(card) {

  const elementCard = new Card(card, templateCard, zoomPopupImage);
  const cardElement = elementCard.addCard();
  return cardElement

}

// функция отправки формы после нажатия сабмита
function handleCardSubmit(evt) {
  evt.preventDefault();

  const object = { name: inputCardName.value, link: inputCardLink.value };


  addCard(elementsList, createCard(object))
  

  closePopup(popupAddCard);

  evt.target.reset();
}
popupAddCard.addEventListener("submit", handleCardSubmit);


initialCards.forEach((item) => {
  addCard(elementsList, createCard(item))
});

// // функция открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  popup.addEventListener("mousedown", closePopupOverlay);
}

function openPopupFormEdit() {
  openPopup(popupEditProfile);
  formPersonalEditValidaton.resetErrorInput()
  nameInputEditForm.value = profileTitle.textContent;
  jobInputEditForm.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener("click", openPopupFormEdit);

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
  popup.removeEventListener("mousedown", closePopupOverlay);
}

// в этой функции присваеваем данные введеные с инпута в профиль
function submitEditProfileForm(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInputEditForm.value;
  profileSubtitle.textContent = jobInputEditForm.value;

  closePopup(popupEditProfile);
}
popupEditProfile.addEventListener("submit", submitEditProfileForm);

profileAddCardButton.addEventListener("click", () => {
  formAddCardValidaton.resetErrorInput()
  openPopup(popupAddCard);
});

closePopupButtonIcons.forEach((el) => {
  const closebutton = el.closest(".popup");
  el.addEventListener("click", () => closePopup(closebutton));
});


function handleCardDelete(item) {
  const removeBtn = item.target.closest(".element");
  removeBtn.remove();
}
function zoomPopupImage(image) {
  popupZoomTitle.textContent = image.target.alt;
  popupZoomImage.alt = image.target.alt;
  popupZoomImage.src = image.target.src;
  openPopup(popupZoom);
}

// функции закрития попапа с помошью ESC и кликом на оверлей
const closePopupEscape = (event) => {
  if (event.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");

    closePopup(openPopup);
  }
};

const closePopupOverlay = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
};
