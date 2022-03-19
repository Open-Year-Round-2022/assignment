const httpURL = 'http://127.0.0.1:5500/';


function loginType(){
    const userID = document.getElementById('ID').value;
    const password = document.getElementById('password').value;
    const bodyText = {userID, password};
    return bodyText;
}




function verifyUser(bodyText){
    console.log(bodyText);
    fetch('http://localhost:3000',{
        method: 'POST',
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyText),
    }).then((res)=>{
        console.log(res.status);
        if(res.status === 200){
            location.href = `${httpURL}client/OYR_insta_page/index.html`
        }
        else{
            alert('Wrong Input!!!');
        }
    });
}

function sendUserInfo(id){
    if(id === 1){
        console.log(loginType());
        verifyUser(loginType());
    }
}


