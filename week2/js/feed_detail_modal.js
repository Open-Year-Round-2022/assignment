const bubble_img = document.getElementsByClassName("bubble_img");
const feed_detail_modal = document.querySelector('.feed_detail_modal');
const feed_detail_modal_close = document.querySelector('.feed_detail_modal_close');
const feed_detail_modal_box = document.querySelector('.feed_detail_modal_box');
const feed_img = document.getElementsByClassName('feed_img');
const feed_detail_left_img = document.getElementById('feed_detail_left_img');
const header_top = document.querySelectorAll('.top');
const detail_top = document.querySelector('.detail_top');
const likes_text = document.querySelectorAll('.likes');
const detail_likes_text = document.querySelector('.detail_likes');

for (let i = 0; i < bubble_img.length; i++) {
    bubble_img[i].addEventListener('click', () => {
        feed_detail_modal.style.display = "flex";
        feed_detail_left_img.src = feed_img[i].src;
        detail_top.innerHTML = header_top[i].innerHTML;
        detail_likes_text.innerHTML = likes_text[i].innerHTML;
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