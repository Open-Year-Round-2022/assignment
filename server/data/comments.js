import { db } from '../db/database.js';


export async function findComments(id){
    const data = db.execute('SELECT * FROM comments WHERE posting_ID = ?',[id]).then((result)=>result[0]);
    return data;
}

export async function uploadComment(id, body){
    const {text, user_ID} = body;
    const posting_ID = id;

    return db.execute('INSERT INTO comments (comment, user_ID, posting_ID) VALUES(?,?,?)',[text, user_ID, posting_ID])
    .then(()=>findComments(id));
}