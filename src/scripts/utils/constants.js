//карточки
export const initialCards = [
  {
    title: "Tokyo, Japan",
    link: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
  },
  {
    title: "Fuji, Japan",
    link: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "Bali, Indonesia",
    link: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1338&q=80",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Norway, Hemsedal",
    link: "https://images.unsplash.com/photo-1503394186783-bdcdf2f6d0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "Kyoto, Japаn",
    link: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
];

export const wrapper = document.querySelector(".wrapper");

export const profileEditButton = wrapper.querySelector(".profile__button");
export const profileAddCardButton = wrapper.querySelector(".profile__add-card");
//forms
export const popupAddCardForm = document.forms.popupAddCardForm;
export const popupEditForm = document.forms.popupEditForm;
export const popupAvatarEditForm = document.forms.avatarProfile
//selectors
export const popupEditProfileSelector = '.popup_profile-edit';
export const popupAddCardSelector = ".popup_add-card"
export const popupZoomSelector = '.popup_zoom'

export const elementsListSelector = ".elements"
export const templateCardSelector = ".template__card";
export const profileTitleSelector = ".profile__title"
export const profileSubtitleSelector = ".profile__subtitle"
export const popupEditAvatarSelector = '.popup_edit_avatar'
export const popupCardDeleteSelector = '.popup_delete-popup'
export const profileAvatarSelector = '.profile__avatar'
export const defaultTextDelete = 'Да'

export const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  invalidInputClass: "popup__form-input_invalid",
  inactiveButtonClass: "popup__submit_invalid",
  activeButtonClass: "popup__submit_valid",
};
