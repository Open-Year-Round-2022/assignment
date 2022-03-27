import {allPostings, uploadPosting, findPosting, postingLike, removeLike} from '../data/posting.js';
import {findComments, uploadComment} from '../data/comments.js';

export async function getPostings(req, res){
    const postings = await allPostings();
    res.status(200).json(postings);
}

export async function postPostings(req, res){
    const posting = req.body;
    const postings = await uploadPosting(posting);
    console.log(postings);
    res.status(200).json(postings);
}

export async function getAposting(req, res){
    const postingID = req.params.id;
    const posting = await findPosting(postingID);
    const comments = await findComments(postingID);
    const modalContent = {
        posting,
        comments,
    }
    res.status(200).json(modalContent);
}

export async function postcomment(req, res){
    const postingID = req.params.id;
    const body = req.body;
    console.log(postingID);
    const comments = await uploadComment(postingID, body);
    const comment = [comments.pop()];
    res.status(200).json(comment);
}

export async function plusLike(req, res){
    const postingID = req.params.id;
    const cnt = await postingLike(postingID);
    res.status(200).json(cnt);
}

export async function disLike(req, res){
    const postingID = req.params.id;
    const cnt = await removeLike(postingID);
    res.status(200).json(cnt);
}