const bookmark_img = document.getElementsByClassName("bookmark_img");
const hart_img = document.getElementsByClassName("hart_img");

for (let i = 0; i < hart_img.length; i++) {
    hart_img[i].addEventListener('click', (e) => {
        if (e.target.dataset.clicked == 0) {
            e.target.dataset.clicked = 1;
            hart_img[i].src = "../images/빨간하트.png";
            fetch("/instagram/hartclick", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: 1,
                    id: i
                })
            })
                .then(response => response.json())
                .then(data => {
                    document.querySelectorAll(".likes")[i].textContent = `${data.likes}`;
                })
                .catch(error => console.log(error));
        }
        else {
            e.target.dataset.clicked = 0;
            hart_img[i].src = "../images/하트.png";
            fetch("/instagram/hartclick", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: 0,
                    id: i
                })
            })
                .then(response => response.json())
                .then(data => {
                    document.querySelectorAll(".likes")[i].textContent = `${data.likes}`;
                })
                .catch(error => console.log(error));
        }
    })
}

for (let i = 0; i < bookmark_img.length; i++) {
    bookmark_img[i].addEventListener('click', (e) => {
        if (e.target.dataset.clicked == 0) {
            e.target.dataset.clicked = 1;
            bookmark_img[i].src = "../images/까만책갈피.png";
        }
        else {
            e.target.dataset.clicked = 0;
            bookmark_img[i].src = "../images/bookmark.png";
        }
    })
}

const modal_hart = document.querySelector('#modal_hart');
modal_hart.addEventListener('click', (e) => {
    const feed_id = document.querySelector('.feed_detail_modal').dataset.id;
    console.log(feed_id);

    if (e.target.dataset.clicked == 0) {
        e.target.dataset.clicked = 1;
        modal_hart.src = "../images/빨간하트.png";
        fetch("/instagram/hartclick", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: 1,
                id: feed_id
            })
        })
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll(".hart_img")[feed_id].src = "../images/빨간하트.png";
                document.querySelectorAll(".hart_img")[feed_id].dataset.clicked = 1;
                document.querySelectorAll(".likes")[feed_id].textContent = `${data.likes}`;
                document.querySelector('.detail_likes').innerHTML = document.querySelectorAll('.likes_text')[feed_id].innerHTML;
            })
            .catch(error => console.log(error));
    }
    else {
        e.target.dataset.clicked = 0;
        modal_hart.src = "../images/하트.png";
        fetch("/instagram/hartclick", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: 0,
                id: feed_id
            })
        })
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll(".hart_img")[feed_id].src = "../images/하트.png";
                document.querySelectorAll(".hart_img")[feed_id].dataset.clicked = 0;
                document.querySelectorAll(".likes")[feed_id].textContent = `${data.likes}`;
                document.querySelector('.detail_likes').innerHTML = document.querySelectorAll('.likes_text')[feed_id].innerHTML;
            })
            .catch(error => console.log(error));
    }
})