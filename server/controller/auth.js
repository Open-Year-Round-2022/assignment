import { checkOut, sendData } from '../data/auth.js';


export async function getUserInfo(req, res){
    const data = await sendData();
    console.log(data);
    res.send(data);
}

export async function signIn(req, res){
    const body = req.body;
    console.log(body);
    const result = await checkOut(body);
    console.log(result);
    if(!result){
        res.sendStatus(401);
    }
    else{
        res.sendStatus(200);
    }
}