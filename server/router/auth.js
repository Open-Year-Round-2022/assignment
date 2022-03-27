import express from 'express';
import { getUserInfo, signIn } from '../controller/auth.js';


const route = express.Router();

route.get('/', getUserInfo);

route.post('/', signIn);

export default route;