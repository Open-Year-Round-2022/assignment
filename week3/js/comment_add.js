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
            userId: "62hoon99", // userId를 전달하는 방법은 고민 해봐야할듯
            data_num: (now.getTime() % 10000)
        })
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector('#comment_list').innerHTML = "";
            let comment_list = '';
            for (let j = 0; j < data.length; j++) {
                comment_list += `<li data-num="${data[j].data_num}">`;
                comment_list += data[j].text;
                comment_list += '<div class="comment_delete">삭제</div>'
                comment_list += '</li>';
            }
            document.querySelector('#comment_list').innerHTML = comment_list;

            // comment_delete_btn = document.querySelectorAll('.comment_delete');
            // for (let j = 0; j < comment_delete_btn.length; j++) {
            //     comment_delete_btn[j].addEventListener('click', (event) => {
            //         fetch("/instagram/feed_comment/delete", {
            //             method: "POST",
            //             headers: {
            //                 "Content-Type": "application/json",
            //             },
            //             body: JSON.stringify({
            //                 data_num: Number(document.querySelector('.feed_detail_modal').dataset.id),
            //                 postId: postId
            //             })
            //         })
            //             .then(response => response.json())
            //             .then(data => {
            //                 document.querySelector('#comment_list').innerHTML = "";
            //                 let comment_list = '';
            //                 for (let k = 0; k < data.length; k++) {
            //                     comment_list += `<li data-num="${data[k].data_num}">`;
            //                     comment_list += data[k].text;
            //                     comment_list += '<div class="comment_delete">삭제</div>'
            //                     comment_list += '</li>';
            //                 }
            //                 document.querySelector('#comment_list').innerHTML = comment_list;
            //             })
            //             .catch(error => console.log(error));
            //     })
            // }
        })
        .catch(error => console.log(error));

    comment_text.value = "";
})