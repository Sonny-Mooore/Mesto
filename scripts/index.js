//карточки 
const initialCards = [
  {
    name: 'Tokyo, Japan',
    link: 'https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80'
  },
  {
    name: 'Fuji, Japan',
    link: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  },
  {
    name: 'Bali, Indonesia',
    link: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1338&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Norway, Hemsedal',
    link: 'https://images.unsplash.com/photo-1503394186783-bdcdf2f6d0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  },
  {
    name: 'Kyoto, Japon',
    link: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  }
];

// console.log(initialCards);


const wrapper = document.querySelector('.wrapper')
//кнопки редактирования 
const addCardPopup = wrapper.querySelector('.popup_add-card');
const editFormPopup = wrapper.querySelector('.popup__form');

const profileButton = wrapper.querySelector('.profile__button');
const popup = wrapper.querySelector('.popup');
const closePopupBtns = wrapper.querySelectorAll('.popup__closed');
const nameInput = wrapper.querySelector('.popup__input_edit_name');
const jobInput = wrapper.querySelector('.popup__input_edit_job');

const profileTitle = wrapper.querySelector('.profile__title');
const profileSubtitle = wrapper.querySelector('.profile__subtitle');






//updates 
// const elementCard = wrapper.querySelector('.element');


const profileAddCard = wrapper.querySelector('.profile__add-card');

const popupEditPrifile = wrapper.querySelector('.popup_prifile-edit');
const popupAddCard = wrapper.querySelector('.popup_add-card');

const inputCardName = popupAddCard.querySelector('.popup__input_card_name');
const inputCardLink = popupAddCard.querySelector('.popup__input_card_link');

const elementOfList = wrapper.querySelectorAll('.element');
const elementsList = document.querySelector('.elements');
// const elementBtnLike = document.querySelectorAll('.element__button');
const elementTrashButton = elementsList.querySelectorAll('.element__button-trash');


//template test 
// const template = document.getElementById('templateCard').content;
// const elementAbout = document.querySelector('.element__about')

// const clone = template.cloneNode(true);
// // clone.append(clone)
// elementsList.appendChild(clone)


// console.log(template);

// console.log(elementsList);

// const setLike = () => elementBtnLike.classList.toggle('.element_button-active');




// elementsList.addEventListener('click', function (event) {
//   if (event.target.closest('.element__button')) {
//       elementBtnLike.forEach(function(element){
//       }) 
//     }
// });


//кнопка лайка
const elementBtnLike = document.querySelectorAll('.element__button')

// вот это сделано коряво мог сделать по человекчесики,
//эта колбэек фнукция по идее должна сначала находить все добавленные кнопки в карточках, и менять стили
// НО ЕСЛИ Я ВЫВОЖУ В КОНСОЛЬ ЛОГ ПЕРЕМЕННУЮ С ЛАЙКОМ, то почему то он не находит все эти кнопки 
console.log(elementBtnLike); /* nodelist пустой ?? */
elementBtnLike.forEach(elementBtnLike => {
  elementBtnLike.addEventListener('click', function () {
    console.log('sd');
    elementBtnLike.classList.toggle('.element_button-active')
  })
});



//кнопка добавления карточки
const handleCardButton = addCardPopup.querySelector('.popup__submit_card_submit');
//кнопка редактирования профиля 
const handleEditButton = addCardPopup.querySelector('.popup__submit_edit_submit');

//функция добавлениякарточки
function addCard(name, link) {

  const divCard = document.createElement('div');
  divCard.classList.add('element');

  const imgCard = document.createElement('img');
  imgCard.classList.add('element__image');
  imgCard.setAttribute('src', link,)
  divCard.append(imgCard);

  const buttonCardTrash = document.createElement('button');
  buttonCardTrash.classList.add('element__button-trash');
  buttonCardTrash.setAttribute('type', 'button');
  divCard.append(buttonCardTrash);

  const div = document.createElement('div');
  div.classList.add('element__about');
  divCard.append(div);

  const h2Card = document.createElement('h2');
  h2Card.classList.add('element__title');
  h2Card.innerText = name;
  div.append(h2Card);

  const buttonCardLike = document.createElement('button');
  buttonCardLike.classList.add('element__button');
  buttonCardTrash.setAttribute('type', 'button');
  div.append(buttonCardLike);

  return elementsList.prepend(divCard)
};


// const deleteCard = () => elementsList.remove();

// elementTrashButton.forEach((el) => {
//   // console.log(el);
// });
// console.log(elementTrashButton );

// function openPopupCard(){

// }


//функция отправки формы через нажатия кнопки
function handleCardSubmit(evt) {
  evt.preventDefault()

  let nameCardValue = inputCardName.value;
  let linkCardValue = inputCardLink.value;

  addCard(nameCardValue, linkCardValue)
  evt.target.reset()
  closePopup()
};

// function clearForm() {

// }

popupAddCard.addEventListener('submit', handleCardSubmit);


// функция закрытия формы редактирваия 
function closePopup() {
  popupAddCard.classList.remove('popup_opened')
  popupEditPrifile.classList.remove('popup_opened')
};

// функция открытие формы редактирваия 
function openPopup() {
  popup.classList.add('popup_opened')

  nameInput.value = profileTitle.textContent
  jobInput.value = profileSubtitle.textContent
};

profileButton.addEventListener('click', openPopup);

// в этой функции присваеваем данные введеные с инпута в профиль
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup()
};

editFormPopup.addEventListener('submit', handleFormSubmit);


profileAddCard.addEventListener('click', () => {
  popupAddCard.classList.add('popup_opened')
});

closePopupBtns.forEach((el) => {
  el.addEventListener('click', () => closePopup());
});

//цикл, добавляющий из массива initialCards в разметку, в тег elements
for (let i = 0; i < initialCards.length; i++) {

  const element = initialCards[i];
  //переменные для взятия конкретных свойств из массива 
  const nameCard = initialCards[i].name
  const linkCard = initialCards[i].link

  elementsList.insertAdjacentHTML('beforeEnd', `
  <div class="element">
    <img class="element__image" src="${linkCard}" alt="картинка">
    <button type="button" class="element__button-trash"></button>
    <div class="element__about">
      <h2 class="element__title">${nameCard}</h2>
      <button type="button" class="element__button"></button>
    </div>
  </div>
`)
};



// initialCards.forEach((element)=>{
//   const nameCard = initialCards.name
//   const linkCard = initialCards.link
//    elementsList.insertAdjacentHTML('afterbegin'`
//                   <div class="element">
//                       <img class="element__image" src="${linkCard}" alt="Гора Эльбрус">
//                       <button type="button" class="element__button-trash"></button>
//                       <div class="element__about">
//                           <h2 class="element__title">${nameCard}</h2>
//                           <button type="button" class="element__button"></button>
//                       </div>
//                   </div>`
//   // console.log(nameCard,linkCard);
// })


//функция отрисовки карты 
// function renderCard() {
//    elementsList.insertAdjacentHTML('afterbegin'`
//                   <div class="element">
//                       <img class="element__image" src="${linkCard}" alt="Гора Эльбрус">
//                       <button type="button" class="element__button-trash"></button>
//                       <div class="element__about">
//                           <h2 class="element__title">${nameCard}</h2>
//                           <button type="button" class="element__button"></button>
//                       </div>
//                   </div>`
// )}

//   initialCards.forEach();

  //template способ
    // const cardTemplate = document.getElementById('templateCard').content;
    // console.log(cardTemplate);

    // const CardHtml = cardTemplate.cloneNode(true);
    //   console.log(cardTemplate.querySelector('.element__title').textContent = 'text');
    //   elementsList.append(CardHtml)
  //  



