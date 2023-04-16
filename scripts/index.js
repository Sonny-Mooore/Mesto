// //функция добавления карточки
function addCard(cardData) {
  const element = templateCard.cloneNode(true);
  setCardListeners(element);
  const elementImage = element.querySelector(".element__image");
  const elementTitle = element.querySelector(".element__title");

  elementImage.src = cardData.link;

  elementTitle.textContent = cardData.name;
  elementImage.alt = cardData.name;

  return element;
}

//функция добавление карточек по умолчанию
initialCards.forEach(renderCard);

function renderCard(cardData) {
  const element = addCard(cardData);
  elementsList.prepend(element);
}

//функция отправки формы после нажатия сабмита
function handleCardSubmit(evt) {
  evt.preventDefault();
  const object = { name: inputCardName.value, link: inputCardLink.value };
  renderCard(object);
  closePopup(popupAddCard);
  evt.target.reset();
}
popupAddCard.addEventListener("submit", handleCardSubmit);

function setCardListeners(event) {
  event.querySelector(".element__button").addEventListener("click", toggleLike);
  event
    .querySelector(".element__image")
    .addEventListener("click", zoomPopupImage);
  event
    .querySelector(".element__button-trash")
    .addEventListener("click", handleCardDelete);
}

// функция открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  popup.addEventListener("mousedown", closePopupOverlay);
}

function openPopupFormEdit() {
  openPopup(popupEditProfile);
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
  openPopup(popupAddCard);
});

closePopupButtonIcons.forEach((el) => {
  const closebutton = el.closest(".popup");
  el.addEventListener("click", () => closePopup(closebutton));
});

function toggleLike(item) {
  const likeBtn = item.target;
  likeBtn.classList.toggle("element_button-active");
}
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
