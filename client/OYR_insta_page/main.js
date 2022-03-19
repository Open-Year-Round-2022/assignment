let cnt1 = 0;
let cnt2 = 0;
function clickLi(li){
    const target = document.getElementById(`${li}`);
    if(li === 0){
        if(cnt1 === 0){
            target.setAttribute('src', './images/main1.png');
            target.setAttribute('onmouseout', "this.src='./images/main1.png'");
            target.setAttribute('onmouseover', "this.src='./images/main1.png'");
            cnt1 = 1;
        }
        else{
            target.setAttribute('src', './images/pb0.png');
            target.setAttribute('onmouseout', "this.src='./images/pb0.png'");
            target.setAttribute('onmouseover', "this.src='./images/main11.png'");
            cnt1 = 0;
        }
        
    }
    if(li === 3){
        if(cnt2 === 0){
            target.setAttribute('src', './images/main5.png');
            target.setAttribute('onmouseout', "this.src='./images/main5.png'");
            target.setAttribute('onmouseover', "this.src='./images/main5.png'");
            cnt2 = 1;
        }
        else{
            target.setAttribute('src', './images/pb3.png');
            target.setAttribute('onmouseout', "this.src='./images/pb3.png'");
            target.setAttribute('onmouseover', "this.src='./images/main4.png'");
            cnt2 = 0;
        }
    }
}


function openMenu(str){
    if(str ==="pb_menu"){
        const bg = document.querySelector('.menuModal');
        bg.classList.remove('hidden');
    }
    if(str === "viewPosting"){
        const bg = document.querySelector('.commentModal');
        bg.classList.remove('hidden');
    }
    
}

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
