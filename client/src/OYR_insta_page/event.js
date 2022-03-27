import { disLike, getAposting, getPostings, plusLike, postComment } from './fetches.js';
import { activeLike, writeComment, showPostings, showAposting } from './main.js';
export let postings_len = 0;
let cnt1 = 0;
let cnt2 = 0;


async function loadPosting(){
    const postings = await getPostings();
    postings_len = postings.length;
    showPostings(postings);
}


async function eventSetter(){
    const heartIcon = document.querySelectorAll('.icon0');
    const bookMark = document.querySelectorAll('.icon3');
    const commentModal = document.querySelectorAll('.commentModal');
    const viewPosting = document.querySelectorAll('.viewPosting');

    
    async function convertHeart(index){
        console.log(index);
        if(cnt1 === 0){
            heartIcon[index].setAttribute('src', './images/main1.png');
            heartIcon[index].setAttribute('onmouseout', "this.src='./images/main1.png'");
            heartIcon[index].setAttribute('onmouseover', "this.src='./images/main1.png'");
            
            const like_cnt = await plusLike(index+1);
            console.log(like_cnt);
            activeLike(like_cnt, index);
            cnt1 = 1;
        }
        else{
            heartIcon[index].setAttribute('src', './images/pb0.png');
            heartIcon[index].setAttribute('onmouseout', "this.src='./images/pb0.png'");
            heartIcon[index].setAttribute('onmouseover', "this.src='./images/main11.png'");
            const like_cnt = await disLike(index+1);
            activeLike(like_cnt, index);
            cnt1 = 0;
        }
    }
    async function convertBookMark(index){
        if(cnt2 === 0){
            bookMark[index].setAttribute('src', './images/main5.png');
            bookMark[index].setAttribute('onmouseout', "this.src='./images/main5.png'");
            bookMark[index].setAttribute('onmouseover', "this.src='./images/main5.png'");
            cnt2 = 1;
        }
        else{
            bookMark[index].setAttribute('src', './images/pb3.png');
            bookMark[index].setAttribute('onmouseout', "this.src='./images/pb3.png'");
            bookMark[index].setAttribute('onmouseover', "this.src='./images/main4.png'");
            cnt2 = 0;
        }
    
    }


    async function removeHidden(){
        console.log('isActive');
        const bg = document.querySelector('.commentModal');
        bg.classList.remove('hidden');
    }

    async function postingModal(index){
        const posting = await getAposting(index+1);
        console.log(posting);
        await showAposting(posting);
        await writeComment(posting.comments);
        await removeHidden();

        const submitBtn = document.querySelector('.enterInput');

        async function submitComment(index){
            const commentInput = document.querySelector('.commentInput').value;
            const data = await postComment(index+1, commentInput);
            console.log(data);
            writeComment(data);
        }

        submitBtn.addEventListener('click', function(){submitComment(index)});
    }
    
    
    async function addHidden(event){
        if(event.target === event.currentTarget){
            event.currentTarget.classList.add('hidden');
        }
        else return;
    }

    commentModal[0].addEventListener('click', addHidden);

    async function heartIconController(event){
        for(var i=0; i<postings_len; i++){
            if(event.target === heartIcon[i]){
                convertHeart(i);
            }
        }
    }

    async function bookMarkController(event){
        for(var i=0; i<postings_len; i++){
            if(event.target === bookMark[i]){
                convertBookMark(i);
            }
        }
    }

    async function postingModalController(event){
        for(var i=0; i<postings_len; i++){
            if(event.target === viewPosting[i]){
                postingModal(i);
            }
        }
    }
    for(var i=0;i<postings_len;i++){
        heartIcon[i].addEventListener('click', heartIconController);
        bookMark[i].addEventListener('click', bookMarkController);
        viewPosting[i].addEventListener('click', postingModalController);
    }
    
    
}



async function initPage(){
    await loadPosting();
    await eventSetter();
}

initPage();


/*
function closeMenu(str){
    if(str === "menuModal"){
        const bg = document.querySelector('.menuModal');
        bg.classList.add('hidden');
    }
    if(str === "commentModal"){
        const bg = document.querySelector('.commentModal');
        bg.classList.add('hidden');
    }
}
*/