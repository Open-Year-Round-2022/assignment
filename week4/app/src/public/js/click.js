let heart = document.querySelectorAll('.post-icon-heart');

for (icon of heart) {
  icon.addEventListener('click', function (event) {
    let target = event.target;
    let target_class = target.className;
    let post = target.parentNode.parentNode;
    let like = post.querySelector('.like-cnt');

    if (target_class == "post-icon post-icon-heart") {
      target.setAttribute("class", "post-icon clicked-heart-icon");
      like.innerHTML = parseInt(like.innerHTML) + 1;
    }
    else {
      target.setAttribute("class", "post-icon post-icon-heart");
      like.innerHTML = parseInt(like.innerHTML) - 1;
    }
  });
}

let store = document.querySelectorAll('.post-icon-store');
console.log(store);
for (icon of store) {
  icon.addEventListener('click', function (event) {
    let target = event.target;
    let target_class = target.className;

    if (target_class == "post-icon post-icon-store") {
      target.setAttribute("class", "post-icon post-icon-store-clicked");
    }
    else {
      target.setAttribute("class", "post-icon post-icon-store");
    }
  });
}


