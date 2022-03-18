function setModalButtonEvent() {
  let more_modal_wrapper = document.getElementById("more-modal-wrapper");
  let more_icon_list = document.querySelectorAll(".post-more");
  let cancel_button = document.getElementById('more-modal-button-cancel');

  for (let icon of more_icon_list) {
    icon.addEventListener('click', function () {
      more_modal_wrapper.style.display = "flex";
    })
  };

  cancel_button.addEventListener('click', function () {
    more_modal_wrapper.style.display = "none";
  });

  /*모달창 밖 눌러도 꺼지게 */
  more_modal_wrapper.addEventListener('click', function (event) {
    if (event.target == event.currentTarget && more_modal_wrapper.style.display != "none") {
      more_modal_wrapper.style.display = "none";
    }
  });

  let nav = document.getElementById("nav-container");
  let section = document.getElementById("content");
  let post_modal_wrapper = document.getElementById("post-modal-wrapper");
  let comment_icon_list = document.querySelectorAll(".post-icon-comment");

  for (let icon of comment_icon_list) {
    icon.addEventListener('click', function (event) {
      console.log(event);
      post_modal_wrapper.style.display = "flex";
      nav.style.display = "none";
      section.style.display = "none";
    });
  }

  let post_modal_x = document.getElementById("post-modal-x");
  post_modal_x.addEventListener('click', function () {
    post_modal_wrapper.style.display = "none";
    section.style.display = "flex";
    nav.style.display = "flex";
  });


}

setModalButtonEvent();

