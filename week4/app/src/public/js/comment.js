const form = document.querySelector('#comment-form');
const btn = document.querySelector('#post-modal-comment-button');
const input = document.querySelector('#post-modal-comment-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

btn.addEventListener('click', addComment);
input.addEventListener('input', () => {
  if (input.value != "") {
    btn.style.color = 'rgba(0, 140, 255)';
  }
})


function addComment() {
  const comment = document.createElement('div');
  comment.setAttribute('class', 'comment');

  const img = document.createElement('img');
  img.setAttribute('class', 'comment-profile-image');
  img.setAttribute('src', '../image/my_profile.jpg');

  const nickname = document.createElement('div');
  nickname.setAttribute('class', 'comment-profile-nickname');
  nickname.innerHTML = 'min._.jingjing';

  const comment_content = document.createElement('div');
  comment_content.setAttribute('class', 'comment-content');

  const reply = document.createElement('div');
  reply.setAttribute('class', 'reply-bar');
  reply.innerHTML = "지금 답글달기"
  const reply_button = document.createElement('img');
  reply_button.setAttribute('src', '../image/dots3_icon.png');
  reply_button.setAttribute('class', 'reply-button');
  reply.appendChild(reply_button);

  let heart_img = document.createElement('img');
  heart_img.setAttribute('src', '../image/heart.png');
  heart_img.setAttribute('class', 'comment-heart-icon');
  reply.appendChild(heart_img);


  comment.appendChild(img);
  comment.appendChild(nickname);
  comment.appendChild(comment_content);
  comment.appendChild(reply);

  let value = input.value

  if (value != "") {
    const comment_container = document.querySelector('#post-modal-comment-container');
    comment_content.innerHTML = value;
    comment_container.appendChild(comment);
    input.value = "";
    btn.style.color = 'rgba(0, 140, 255,0.336)';
  }
  const commentList = document.querySelectorAll('.comment');

  for (let i = 0; i < commentList.length; i++) {

    let btn = commentList[i].querySelector('.reply-button');
    let modal = document.querySelector('#comment-modal-wrapper');

    commentList[i].addEventListener('mouseover', () => {
      btn.style.display = "inline-block";
    });
    commentList[i].addEventListener('mouseout', () => {
      btn.style.display = "none";
    });

    btn.addEventListener('click', (e) => {
      //버튼을 눌렀을 때로 바꿔야함
      modal.style.display = "flex";

      delete_btn = modal.querySelector('#button-delete');
      delete_btn.addEventListener('click', () => {
        comment.parentNode.removeChild(e.target.parentNode.parentNode);
        modal.style.display = "none";
      })
      cancel_btn = modal.querySelector('#button-cancel');
      cancel_btn.addEventListener('click', () => {
        modal.style.display = "none";
      })
    });



  }

}


