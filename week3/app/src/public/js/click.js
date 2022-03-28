let heart = document.querySelectorAll('.post-icon-heart');
console.log(heart);
for (icon of heart) {
  icon.addEventListener('click', function (event) {
    let target = event.target;
    let target_class = target.className;
    if (target_class == "post-icon post-icon-heart") {
      target.setAttribute("class", "post-icon clicked-heart-icon");
    }
    else {
      target.setAttribute("class", "post-icon post-icon-heart");
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


