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
// import comment_delete from "./comment_delete.js";

for (let i = 0; i < bubble_img.length; i++) {
    bubble_img[i].addEventListener('click', () => {
        feed_detail_modal.dataset.id = i;
        feed_detail_modal.style.display = "flex";
        feed_detail_left_img.src = feed_img[i].src;
        detail_top.innerHTML = header_top[i].innerHTML;
        detail_likes_text.innerHTML = likes_text[i].innerHTML;

        fetch("/instagram/feed_comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: i
            })
        })
            .then(response => response.json())
            .then(data => {
                let comment_list = '';
                for (let j = 0; j < data.length; j++) {
                    comment_list += `<li data-num="${data[j].data_num}">`;
                    comment_list += data[j].text;
                    comment_list += '<div class="comment_delete">삭제</div>'
                    comment_list += '</li>';
                }
                document.querySelector('#comment_list').innerHTML = comment_list;
            })
            .catch(error => console.log(error));
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