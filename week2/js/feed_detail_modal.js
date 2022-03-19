const bubble_img = document.getElementsByClassName("bubble_img");
const feed_detail_modal = document.querySelector('.feed_detail_modal');
const feed_detail_modal_close = document.querySelector('.feed_detail_modal_close');
const feed_detail_modal_box = document.querySelector('.feed_detail_modal_box');

for (let i = 0; i < bubble_img.length; i++) {
    bubble_img[i].addEventListener('click', () => {
        feed_detail_modal.style.display = "flex";
    })
}

feed_detail_modal_close.addEventListener('click', () => {
    feed_detail_modal.style.display = "none";
});

feed_detail_modal.addEventListener('click', (e) => {
    if (e.target.className == 'feed_detail_modal') {
        feed_detail_modal.style.display = "none";
    }
});