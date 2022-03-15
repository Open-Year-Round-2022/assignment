const open = document.querySelector('.feed_more_bttn');

const close = document.querySelector('.feed_more_close');

const layout = document.querySelector('.modal-wrapper');

const heart_empty = document.querySelector('#empty_hart');

open.addEventListener('click', function () {

    layout.style.display = "flex";

});

close.addEventListener('click', function () {

    layout.style.display = "none";

});

heart_empty.addEventListener('click', function () {
    heart_empty.src = "../images/heart_full.png";
});