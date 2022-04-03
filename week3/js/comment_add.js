const comment_text = document.querySelector('#comment_text');
const comment_btn = document.querySelector('#comment_btn');
comment_btn.addEventListener('click', (event) => {
    if (comment_text.value == "") {
        return;
    }
    const postId = Number(document.querySelector('.feed_detail_modal').dataset.id);
    const now = new Date();
    fetch("/instagram/feed_comment/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            postId: postId,
            text: comment_text.value,
            data_num: (now.getTime() % 10000)
        })
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector('#comment_list').innerHTML = "";
            let comment_list = '';
            for (let j = 0; j < data.length; j++) {
                comment_list += `<li data-num="${data[j].data_num}">`;
                comment_list += `<div class="user_container"><img class="comment_profileImg" src=${data[j].profileImg}>`;
                comment_list += `<div class="userId">${data[j].userid}</div></div>`;
                comment_list += data[j].text;
                if (data[0].sessionId == data[j].userid) {
                    comment_list += '<div class="comment_delete">삭제</div>';
                }
                else {
                    comment_list += '<div class="comment_emptybox"></div>';
                }
                comment_list += '</li>';
            }
            document.querySelector('#comment_list').innerHTML = comment_list;
        })
        .catch(error => console.log(error));

    comment_text.value = "";
})