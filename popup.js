let popup = document.getElementById('popup');
let close = document.getElementsByClassName('popup__close')[0];

document.addEventListener('mouseup', (event) => {
    if (!event.target.closest('.popup__content'))
        close.click();
});
