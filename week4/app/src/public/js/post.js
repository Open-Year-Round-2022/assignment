
function makePostTitle() {
  let title = document.createElement('div');
  title.setAttribute('class', 'post-title');
  let profile = document.createElement('img');
  profile.setAttribute('class', 'post-profile');
  let nickname = document.createElement('div');
  nickname.setAttribute('class', 'post-nickname');
  let icon = document.createElement('img');
  icon.setAttribute('class', 'post-more post-icon');
  icon.setAttribute('src', '../image/dots3_icon.png');

  title.appendChild(profile);
  title.appendChild(nickname);
  title.appendChild(icon);


  return title;
}

function makePostContentImg() {
  let img = document.createElement('img');
  img.setAttribute('class', 'post-image');

  return img;
}

function makePostIconContainer() {
  let container = document.createElement('div');
  container.setAttribute('class', 'post-icon-container');

  let heartIcon = document.createElement('div');
  heartIcon.setAttribute('class', 'post-icon post-icon-heart');

  let commentIcon = document.createElement('img');
  commentIcon.setAttribute('class', 'post-icon post-icon-comment');
  commentIcon.setAttribute('src', '../image/comment_icon.png');

  let messageIcon = document.createElement('img');
  messageIcon.setAttribute('class', 'post-icon');
  messageIcon.setAttribute('src', '../image/message.png');

  let storeIcon = document.createElement('div');
  storeIcon.setAttribute('class', 'post-icon post-icon-store');

  container.appendChild(heartIcon);
  container.appendChild(commentIcon);
  container.appendChild(messageIcon);
  container.appendChild(storeIcon);

  return container;
}

function makePostLike() {
  let like = document.createElement('div');
  like.setAttribute('class', 'post-like');

  return like;
}

function makePostContentText() {
  let content = document.createElement('div');
  content.setAttribute('class', 'post-content');

  return content;
}

function makePost() {
  let post = document.createElement('div');
  post.setAttribute('class', 'post box');

  let post_title = makePostTitle();
  let post_content_image = makePostContentImg();
  let post_icon_container = makePostIconContainer();
  let post_like = makePostLike();
  let post_content_text = makePostContentText();

  post.appendChild(post_title);
  post.appendChild(post_content_image);
  post.appendChild(post_icon_container);
  post.appendChild(post_like);
  post.appendChild(post_content_text);

  return post;
}

function addPosts() {

  for (let i = 0; i < postList.length; i++) {
    let post = makePost();
    post.setAttribute('id', `post${i}`);
    let parent = document.getElementById('post-container');

    let profile = post.querySelector('.post-profile');
    profile.setAttribute('src', postList[i].profile);

    let nickname = post.querySelector('.post-nickname');
    nickname.innerHTML = postList[i].nickname;

    let image = post.querySelector('.post-image');
    image.setAttribute('src', postList[i].image);

    let postContent = post.querySelector('.post-content');
    console.log(postContent);
    postContent.innerHTML = `${postList[i].nickname} ${postList[i].content}`;

    let like = post.querySelector('.post-like');
    like.innerHTML = `좋아요 <span class="like-cnt">${postList[i].like}</span> 개`;

    parent.appendChild(post);
  }
}


addPosts();


function loadPosts(postId) {
  req = {
    id: postId,
  }
  fetch("/api/comment", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log(res.body);

      } else {
        alert('뭔가 잘못됨');
      }
    })



}