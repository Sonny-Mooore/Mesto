// //функция добавления карточки
function addCard(object) {
  const element = templateCard.cloneNode(true);
  setNewListeners(element);
  const elementImage = element.querySelector(".element__image");
  const elementTitle = element.querySelector(".element__title");

  elementImage.src = object.link;
  elementTitle.textContent = object.name;
  elementImage.alt = object.name;

  return element;
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
  closePopup(popupAddCard);
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
function openPopup(popup) {
  popup.classList.add("popup_opened");
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
}

// в этой функции присваеваем данные введеные с инпута в профиль
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInputEditForm.value;
  profileSubtitle.textContent = jobInputEditForm.value;

  closePopup(popupEditProfile);
}
popupEditProfile.addEventListener("submit", handleFormSubmit);

profileAddCardButton.addEventListener("click", () => {
  popupAddCard.classList.add("popup_opened");
});

closePopupButtonIcons.forEach((el) => {
  const closebutton = el.closest(".popup");
  el.addEventListener("click", () => closePopup(closebutton));
});

function addLike(item) {
  const likeBtn = item.target;
  likeBtn.classList.toggle("element_button-active");
}
function handleCardDelete(item) {
  const removeBtn = item.target.closest(".element");
  removeBtn.remove();
}
function zoomPopupImage(image) {
  const popupZoomTitle = document.querySelector(".popup__zoom-title");
  const popupZoomImage = document.querySelector(".popup__zoom-image");
  popupZoomTitle.textContent = image.target.alt;
  popupZoomImage.alt = image.target.alt;
  popupZoomImage.src = image.target.src;
  popupZoom.classList.toggle("popup_opened");
}
