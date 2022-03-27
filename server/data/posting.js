import { db } from '../db/database.js';


export async function allPostings(){
    return db.execute('SELECT * FROM postings').then((result)=>result[0]);
}

export async function uploadPosting(data){
    const {userCode, posting, img, date, like} = data;
    db.execute('INSERT INTO postings (userCode, posting, img, input_date, like_cnt) VALUES(?,?,?,?,?)', [userCode, posting, img, date, like]);
    return allPostings;
}

export async function findPosting(id){
    return db.execute('SELECT * FROM postings WHERE ID = ?',[id]).then((result)=>result[0][0]);
}

export async function postingLike(id){
    const result = await db.execute('SELECT like_cnt FROM postings WHERE ID = ?', [id]).then((result)=>result[0][0]);
    console.log(result);
    const cnt = result.like_cnt + 1;
    return db.execute('UPDATE postings SET like_cnt = ? WHERE ID = ?',[cnt, id])
    .then(()=>db.execute('SELECT like_cnt FROM postings WHERE ID = ?', [id]).then((result)=>result[0][0]));
}
export async function removeLike(id){
    const result = await db.execute('SELECT like_cnt FROM postings WHERE ID = ?', [id]).then((result)=>result[0]);
    console.log(result[0].like_cnt);
    const cnt = result[0].like_cnt - 1;
    return db.execute('UPDATE postings SET like_cnt = ? WHERE ID = ?',[cnt, id])
    .then(()=>db.execute('SELECT like_cnt FROM postings WHERE ID = ?', [id]).then((result)=>result[0][0]));
}