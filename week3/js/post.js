
function makePost(profile, nickname, image, like, content) {
  let post = document.createElement('div');
  post.setAttribute('class', 'post box');

  post.innerHTML = `
  <div class="post-title">
  <img src=${profile} class="post-profile"><div class="post-nickname"><b>${nickname}</b></div>
  <img class="post-more post-icon" src="../image/dots3_icon.png">
  </div>
  <div><img src=${image} class="post-image"></div>

  <div class="post-icon-container">
  <div class="post-icon post-icon-heart"></div>
  <img class="post-icon post-icon-comment" src="../image/comment_icon.png">
  <img class="post-icon" src="../image/message.png">
  <div class="post-icon post-icon-store"></div>
  </div>

  <div class="post-like">좋아요 ${like}개</div>
  <div class="post-content"><b>${nickname}</b>  ${content}</div>
  
  `;

  return post;
}

function addPosts() {

  for (let i = 0; i < postList.length; i++) {
    let post = makePost(postList[i].profile, postList[i].nickname, postList[i].image, postList[i].like, postList[i].content);
    let parent = document.getElementById('post-container');

    parent.appendChild(post);
  }
}

addPosts();