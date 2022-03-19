const bookmark_img = document.getElementsByClassName("bookmark_img");
const hart_img = document.getElementsByClassName("hart_img");

for (let i = 0; i < hart_img.length; i++) {
    hart_img[i].addEventListener('click', (e) => {
        if (e.target.dataset.clicked == 0) {
            e.target.dataset.clicked = 1;
            hart_img[i].src = "../images/빨간하트.png";
        }
        else {
            e.target.dataset.clicked = 0;
            hart_img[i].src = "../images/하트.png";
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