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
const submitFormButton = wrapper.querySelector(".popup_prifile-edit");

const popup = wrapper.querySelector(".popup");

const closePopupButtonIcons = wrapper.querySelectorAll(".popup__closed");

//все попапы
const popupEditPrifile = wrapper.querySelector(".popup_prifile-edit");
const popupAddCard = wrapper.querySelector(".popup_add-card");
const popupZoom = wrapper.querySelector(".popup_zoom");

const profileTitle = wrapper.querySelector(".profile__title");
const profileSubtitle = wrapper.querySelector(".profile__subtitle");
const profileEditButton = wrapper.querySelector(".profile__button");
const popupEditSubmitButton = popupEditPrifile.querySelector(".popup__submit_edit_submit");
const profileAddCardButton = wrapper.querySelector(".profile__add-card");
// инпуты редактиорвания карты
const nameInputEditForm = wrapper.querySelector(".popup__input_edit_name");
const jobInputEditForm = wrapper.querySelector(".popup__input_edit_job");
//инпуты добавления карточки
const inputCardName = popupAddCard.querySelector(".popup__input_card_name");
const inputCardLink = popupAddCard.querySelector(".popup__input_card_link");

const elementsList = document.querySelector(".elements");
const templateCard = document.querySelector(".template__card").content;

// //функция добавления карточки
function addCard(object) {
  const element = templateCard.cloneNode(true);
  setNewListeners(element);
  element.querySelector(".element__image").src = object.link;
  element.querySelector(".element__title").textContent = object.name;
  element.querySelector(".element__image").alt = object.name;

  return element;
}

function zoomPopupImage(image) {
  document.querySelector(".popup__zoom-title").textContent = image.target.alt;
  document.querySelector(".popup__zoom-image").alt = image.target.alt;
  document.querySelector(".popup__zoom-image").src = image.target.src;
  popupZoom.classList.toggle("popup_opened");
}

//функция добавление карточек по умолчанию
initialCards.forEach(renderCard);

function renderCard(object) {
  const element = addCard(object);
  elementsList.prepend(element);
}

//функция отправки формы после нажатия сабмита
function handleCardSubmit(evt) {
  evt.preventDefault();

  const object = { name: inputCardName.value, link: inputCardLink.value };

  renderCard(object);

  closePopup();
  evt.target.reset();
}
popupAddCard.addEventListener("submit", handleCardSubmit);

function setNewListeners(event) {
  event.querySelector(".element__button").addEventListener("click", addLike);
  event
    .querySelector(".element__image")
    .addEventListener("click", zoomPopupImage);
  event
    .querySelector(".element__button-trash")
    .addEventListener("click", handleCardDelete);
}

// функция открытие попапа
function openPopup() {
  popup.classList.add("popup_opened");
}

function openPopupFormEdit() {
  openPopup();
  nameInputEditForm.value = profileTitle.textContent;
  jobInputEditForm.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener("click", openPopupFormEdit);

// функция закрытия попапа
function closePopup() {
  popupAddCard.classList.remove("popup_opened");
  popupEditPrifile.classList.remove("popup_opened");
  popupZoom.classList.remove("popup_opened");
}

// в этой функции присваеваем данные введеные с инпута в профиль
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInputEditForm.value;
  profileSubtitle.textContent = jobInputEditForm.value;

  closePopup();
}
popupEditSubmitButton.addEventListener("submit", handleFormSubmit);

profileAddCardButton.addEventListener("click", () => {
  popupAddCard.classList.add("popup_opened");
});

closePopupButtonIcons.forEach((el) => {
  el.addEventListener("click", () => closePopup());
});

function addLike(item) {
  const likeBtn = item.target;
  likeBtn.classList.toggle("element_button-active");
}
function handleCardDelete(item) {
  const removeBtn = item.target.closest(".element");
  removeBtn.remove();
}
