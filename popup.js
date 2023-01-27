let popup = document.getElementById('popup');
let close = document.getElementsByClassName('popup__close')[0];

document.addEventListener('mouseup', (event) => {
    if (window.getComputedStyle(popup).visibility !== "hidden" && !event.target.closest('.popup__content'))
        close.click();
});
