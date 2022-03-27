import { sendUserInfo } from './auth.js';

const loginBtn = document.querySelector('.loginButton');


function loginType(){
    const userID = document.getElementById('ID').value;
    const password = document.getElementById('password').value;
    const bodyText = {userID, password};
    console.log(bodyText);
    return bodyText;
}


/*
async function verifyUser(bodyText){
    console.log(bodyText);
    await fetch('http://localhost:3000/auth',{
        method: 'POST',
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyText),
    }).then((res)=>{
        console.log(res.status);
        if(res.status === 200){
            console.log('here is convertpage');
            location.href='http://localhost:8080/main/';
        }
        else{
            alert('Wrong Input!!!');
        }
    });
}*/

async function verifyUser(bodyText){
    console.log(bodyText);
    const status = await sendUserInfo(bodyText);
    if(status === 200){
        location.href='http://localhost:8080/main/';
    }
    else{
        alert('wrong input!');
    }
}

function sendID(){
    verifyUser(loginType());
}
loginBtn.addEventListener('click', sendID);


