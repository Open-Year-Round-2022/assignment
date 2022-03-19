const users = [
    {
        userID : 'ehddnr1009',
        password : 'ehddnr8787',
    }
];

export function sendData(){
    return users;
}

export function checkOut(who){
    return users.find((users)=> users.userID === who.userID && users.password === who.password);
}