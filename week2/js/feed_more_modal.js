const open = document.querySelectorAll('.feed_more_bttn');
const closebttn = document.querySelector('.feed_more_close');
const layout = document.querySelector('.feed_more_modal_wrapper');

for (let i = 0; i < open.length; i++) {
    open[i].addEventListener('click', function () {
        layout.style.display = "flex";
    });
}

closebttn.addEventListener('click', function () {
    layout.style.display = "none";
});

layout.addEventListener('click', (e) => {
    if (e.target.className == 'feed_more_modal_wrapper') {
        layout.style.display = "none";
    }
});