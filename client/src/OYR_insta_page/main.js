

const postingLocation = document.querySelector('.postingLocation');


export async function showPostings(postings){
    postings.forEach(posting=>{
        const listTage = document.createElement('li');
        listTage.innerHTML=`<div class="postingBoard">
        <div class="pb_header">
        <div class="userInfo">
            <img src="./images/peaches.png">
            <p class="userName"><strong>Peaches.Uni</strong></p>
        </div>
        <img class="pb_menu" onclick="openMenu('pb_menu')" src="./images/menu.png">
    </div>

    <div class="imageZone">
        <img src="${posting.img}">
    </div>

    <div class="pb_footer">
        <div class="pb_f_header">
            <ul>
                <li><img class="icon0" src="./images/pb0.png" onmouseover="this.src='./images/main11.png'" onmouseout="this.src='./images/pb0.png'"></li>
                <li><img class="viewPosting" src="./images/pb1.png" onmouseover="this.src='./images/main2.png'" onmouseout="this.src='./images/pb1.png'"></li>
                <li><img src="./images/pb2.png" onmouseover="this.src='./images/main3.png'" onmouseout="this.src='./images/pb2.png'"></li>

            </ul>
            <img class="icon3" src="./images/pb3.png" onmouseover="this.src='./images/main4.png'" onmouseout="this.src='./images/pb3.png'">
        </div>
        <div class="like_cnt"> 좋아요 ${posting.like_cnt}개</div>
        <div class="pb_f_main">
            <p class="userName"><strong>Peaches.Uni</strong></p>
            <p>${posting.posting}</p>
        </div>

        <div class="pb_f_footer">
            <img src="./images/faceEmg.png">
            <input placeholder="댓글 달기...">
        </div>
    </div>
    </div>`;
        postingLocation.appendChild(listTage);
    })
}


export async function writeComment(comments){
    const commentLocation = document.querySelector('.commentLocation');
    comments.forEach(comment => {
        console.log(comment.comment);
        const listTag = document.createElement('li');
        listTag.innerHTML=`<div class="commentZone">
        <div class="comment">
            <div class="userInfo">
                <img src="./images/noneicon.png">
                <p class="userName"><strong>starlight.do8</strong></p>
            </div>
            <div class="co_context"><p>${comment.comment}</p></div>
        </div>
    </div>`;
        commentLocation.appendChild(listTag);
    });
    
}

export async function showAposting(posting){
    const commentModal = document.querySelector('.commentModal');
    commentModal.innerHTML=`<div class="postingView">
    <div class="pv_Photo">
        <img src="${posting.posting.img}">
    </div>
    <div class="pv_Describe">
        <div class="pv_userCompo">
            <div class="userInfo">
                <img src="./images/peaches.png">
                <p class="userName"><strong>Peaches.Uni</strong></p>
            </div>
            <img class="pb_menu" onclick="openMenu('pb_menu')" src="./images/menu.png">
        </div>

        <div class="pv_textCompo">
            <div class="userInfo">
                <img src="./images/peaches.png">
                <p class="userName"><strong>Peaches.Uni</strong></p>
            </div>
            <div class="pv_context">
                <p>${posting.posting.posting}</p>
            </div>
        </div>

        

        <ul class="commentLocation"></ul>

        <div class="pv_footer">
            <div class="pb_f_header">
                <ul>
                    <li><img class="icon0" src="./images/pb0.png" onclick="clickLi(0)" onmouseover="this.src='./images/main11.png'" onmouseout="this.src='./images/pb0.png'"></li>
                    <li><img src="./images/pb1.png" onmouseover="this.src='./images/main2.png'" onmouseout="this.src='./images/pb1.png'"></li>
                    <li><img src="./images/pb2.png" onmouseover="this.src='./images/main3.png'" onmouseout="this.src='./images/pb2.png'"></li>

                </ul>
                <img class="icon3" onclick="clickLi(3)" src="./images/pb3.png" onmouseover="this.src='./images/main4.png'" onmouseout="this.src='./images/pb3.png'">
            </div>
            <div class="like_cnt"> 좋아요${posting.posting.like_cnt}개</div>

            <div class="pv_w_Comment">
                <img src="./images/faceEmg.png">
                <input class="commentInput" placeholder="댓글 달기...">
                <p class="buttonP enterInput">게시</p>
            </div>
        </div>
        
    </div>
`;
}


export async function activeLike(cnt, index){
    const like_cnt = document.querySelectorAll('.like_cnt');
    like_cnt[index].innerHTML = `<b>좋아요 ${cnt.like_cnt}개</b>`;
    console.log(like_cnt.innerHTML);
    

}

