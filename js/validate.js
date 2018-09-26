// Validation form

var btnSubmit = document.querySelector('.competition-form__form-button'),
    competitionForm = document.querySelector('.competition-form'),
    popupSend = document.querySelector('.popup-send'),
    popupSendToggle = popupSend.querySelector('.popup-send__button'),
    popupFail = document.querySelector('.popup-fail'),
    popupFailToggle = popupFail.querySelector('.popup-fail__button');


// Form filling check

var formValid = function (e) {
    e.preventDefault();
    if (competitionForm.surname.value && competitionForm.name.value && competitionForm.yourEmail.value ) {
        popupSend.classList.remove('popup-send--closed');
    } else {
        popupFail.classList.remove('popup-fail--closed');
    }
};

btnSubmit.addEventListener('click', formValid);

// Submit form

var formSubmit = function () {
    competitionForm.submit();
};

popupSendToggle.addEventListener('click', formSubmit);

// Not submit form

popupFailToggle.addEventListener('click', function () {
    popupFail.classList.add('popup-fail--closed');
});