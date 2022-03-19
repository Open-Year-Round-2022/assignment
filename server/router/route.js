import express from 'express';
import { getUserInfo, signIn } from '../controller/control.js';


const route = express.Router();

route.get('/', getUserInfo);

route.post('/', signIn);

export default route;