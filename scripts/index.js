const wrapper = document.querySelector('.wrapper')
const popup = wrapper.querySelector('.popup');
const profileButton = wrapper.querySelector('.profile__button');
const closePopupBtn = wrapper.querySelector('.popup__closed');
const formPopup = popup.querySelector('.popup__form');
const nameInput = formPopup.querySelector('.popup__input_type_name');
const jobInput = formPopup.querySelector('.popup__input_type_job');
const profileTitle = wrapper.querySelector('.profile__title');
const profileSubtitle = wrapper.querySelector('.profile__subtitle');

function openPopup(){
    popup.classList.add('popup_opened')
    nameInput.value = profileTitle.textContent 
    jobInput.value = profileSubtitle.textContent 
}
profileButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened')
}

closePopupBtn.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
    evt.preventDefault(); 

    profileTitle.textContent = nameInput.value 
    profileSubtitle.textContent = jobInput.value 

    closePopup()   
}
formPopup.addEventListener('submit', handleFormSubmit);