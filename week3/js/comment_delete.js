const comment_delete_btn = document.querySelectorAll('.comment_delete');

document.addEventListener('click', (e) => {
    if (e.target.className == "comment_delete") {
        const postId = Number(document.querySelector('.feed_detail_modal').dataset.id);

        fetch("/instagram/feed_comment/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data_num: Number(e.target.parentNode.dataset.num),
                postId: postId
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
    }
})