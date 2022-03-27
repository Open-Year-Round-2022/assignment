import express from 'express';
import { getPostings, postPostings, getAposting, postcomment, plusLike, disLike} from '../controller/posting.js';

const route = express.Router();

route.get('/', getPostings);
route.get('/:id', getAposting);
route.post('/:id', postcomment);
route.put('/:id/re', disLike);
route.put('/:id', plusLike);
route.post('/', postPostings);

export default route;