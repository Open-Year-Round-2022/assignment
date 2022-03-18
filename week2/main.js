'use strict';
const more = document.querySelector('.post__more');
const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal__cancel')
const like = document.querySelector('.like__btn');
const save = document.querySelector('.save__btn');
const comment = document.querySelector('.post__on')
const postModal = document.querySelector('.post__modal');
const postModalX = document.querySelector('.post__modal--cancel');

more.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modalX.addEventListener('click', ()=> {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if(e.target.className == 'modal'){
        modal.style.display = 'none';
    }
});

like.addEventListener('click', (e) => {
    if(e.target.dataset.clicked == 0){
        e.target.dataset.clicked = 1;
        like.classList.remove('far');
        like.classList.add('fas');
        like.style.color = '#E63145';
        like.classList.remove('post__btn--click');
    } else {
        e.target.dataset.clicked = 0;
        like.classList.remove('fas');
        like.classList.add('far');
        like.style.color = '#000000';
        like.classList.add('post__btn--click');
    }
});

save.addEventListener('click', (e) => {
    if(e.target.dataset.clicked == 0){
        e.target.dataset.clicked = 1;
        save.classList.remove('far');
        save.classList.add('fas');
        save.classList.remove('post__btn--click');
    } else {
        e.target.dataset.clicked = 0;
        save.classList.remove('fas');
        save.classList.add('far');
        save.classList.add('post__btn--click');
    }
});

postModalX.addEventListener('click', () => {
    postModal.style.display = 'none'
});

comment.addEventListener('click', () => {
    postModal.style.display = 'flex'
});