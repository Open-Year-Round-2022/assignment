import { checkOut, sendData } from '../data/data.js';


export function getUserInfo(req, res){
    const data = sendData();
    res.send(data);
}

export function signIn(req, res){
    const body = req.body;
    const result = checkOut(body);
    if(!result){
        res.sendStatus(401);
    }
    else{
        res.send('Passed!');
    }
}