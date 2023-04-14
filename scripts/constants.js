//карточки
const initialCards = [
  {
    name: "Tokyo, Japan",
    link: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
  },
  {
    name: "Fuji, Japan",
    link: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    name: "Bali, Indonesia",
    link: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1338&q=80",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Norway, Hemsedal",
    link: "https://images.unsplash.com/photo-1503394186783-bdcdf2f6d0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    name: "Kyoto, Japаn",
    link: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
];
const wrapper = document.querySelector(".wrapper");
//кнопки редактирования
const addCardButton = wrapper.querySelector(".popup_add-card");
// const submitFormButton = wrapper.querySelector(".popup_prifile");

const PopupItem = wrapper.querySelectorAll(".popup");
// allPopup.forEach()
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
// инпуты редактиорвания карты
const nameInputEditForm = wrapper.querySelector(".popup__input_edit_name");
const jobInputEditForm = wrapper.querySelector(".popup__input_edit_job");
//инпуты добавления карточки
const inputCardName = popupAddCard.querySelector(".popup__input_card_name");
const inputCardLink = popupAddCard.querySelector(".popup__input_card_link");

const elementsList = document.querySelector(".elements");
const templateCard = document.querySelector(".template__card").content;

//новые переменные просьба ревью
const element = templateCard.cloneNode(true);
const popupZoomTitle = document.querySelector(".popup__zoom-title");
const popupZoomImage = document.querySelector(".popup__zoom-image");



