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
const addCardPopup = wrapper.querySelector(".popup_add-card");
const editFormPopup = wrapper.querySelector(".popup__form");

const profileButton = wrapper.querySelector(".profile__button");
const popup = wrapper.querySelector(".popup");
const closePopupBtns = wrapper.querySelectorAll(".popup__closed");
const nameInput = wrapper.querySelector(".popup__input_edit_name");
const jobInput = wrapper.querySelector(".popup__input_edit_job");

const profileTitle = wrapper.querySelector(".profile__title");
const profileSubtitle = wrapper.querySelector(".profile__subtitle");

//updates
const profileAddCard = wrapper.querySelector(".profile__add-card");

const popupEditPrifile = wrapper.querySelector(".popup_prifile-edit");
const popupAddCard = wrapper.querySelector(".popup_add-card");

const inputCardName = popupAddCard.querySelector(".popup__input_card_name");
const inputCardLink = popupAddCard.querySelector(".popup__input_card_link");

const elementOfList = wrapper.querySelectorAll(".element");
const elementsList = document.querySelector(".elements");

const popupZoom = wrapper.querySelector(".popup_zoom");
const template = document.querySelector(".template__card").content;

//кнопка добавления карточки
const handleCardButton = addCardPopup.querySelector(
  ".popup__submit_card_submit"
);
//кнопка редактирования профиля
const handleEditButton = addCardPopup.querySelector(
  ".popup__submit_edit_submit"
);



// //функция добавления карточки
function addCard(object) {

  const element = template.cloneNode(true);
  
  element.querySelector(".element__image").src = object.link;

  element.querySelector(".element__title").textContent = object.name;
  element.querySelector(".element__image").alt = object.name;
  setNewListeners(element);
  return element; 

}

function zoomPopupImage(image) {
  wrapper.querySelector(".popup__zoom-title").textContent = image.target.alt;
  wrapper.querySelector(".popup__zoom-image").src = image.target.src;
  popupZoom.classList.toggle("popup_opened");
}



//функция добавление карточек по умолчанию
initialCards.forEach(renderCard);

function renderCard(object,) {
  const element = addCard(object)
  elementsList.prepend(element);
}

//функция отправки формы после нажатия сабмита
function handleCardSubmit(evt) {
  evt.preventDefault();

  let object = {name:inputCardName.value, link:inputCardLink.value}

  renderCard(object);

  closePopup();
  evt.target.reset();
}

popupAddCard.addEventListener("submit", handleCardSubmit);


function setNewListeners(event) {
  event.querySelector(".element__button").addEventListener("click", addLike);
  event.querySelector(".element__image").addEventListener("click", zoomPopupImage);
  event.querySelector(".element__button-trash").addEventListener("click", cardDelete);
}







// функция закрытия формы редактирваия
function closePopup() {
  popupAddCard.classList.remove("popup_opened");
  popupEditPrifile.classList.remove("popup_opened");
  popupZoom.classList.remove("popup_opened");
}

// функция открытие формы редактирваия
function openPopup() {
  popup.classList.add("popup_opened");

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

profileButton.addEventListener("click", openPopup);

// в этой функции присваеваем данные введеные с инпута в профиль
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup();
}

editFormPopup.addEventListener("submit", handleFormSubmit);

profileAddCard.addEventListener("click", () => {
  popupAddCard.classList.add("popup_opened");
});

closePopupBtns.forEach((el) => {
  el.addEventListener("click", () => closePopup());
});


function addLike(item) {
  let likeBtn = item.target;
  likeBtn.classList.toggle("element_button-active");
}
function cardDelete(item) {
  let removeBtn = item.target.closest(".element");
  removeBtn.remove();
}

