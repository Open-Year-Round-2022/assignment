

export async function sendUserInfo(bodyText){
    console.log('is it working?');
    const response = await fetch('http://localhost:3000/auth',{
        method: 'POST',
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyText),
    });
    return response.status;
}