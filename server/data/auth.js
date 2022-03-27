import { db } from '../db/database.js';


export async function sendData(){
    return db.execute('SELECT ID, userID, password, name FROM users').then((result)=>result[0]);
}

export async function checkOut(who){
    return db.execute('SELECT * FROM users WHERE userID = ? AND password = ?', [who.userID, who.password]).then((result)=>result[0][0]);
}

