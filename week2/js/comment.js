const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");
instaForm.addEventListener("submit", function (e) {
    console.log(click);
    e.preventDefault();
    const commentInput = instaForm.elements.comment;
    addComment(commentInput.value);
    commentInput.value = "";
});

const addComment = (comment) => {
    const newComment = document.createElement("li");
    newComment.append(`- ${comment}`);
    commentsContainer.append(newComment);
};