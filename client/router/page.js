import express from 'express';
import {loginPage, mainPage} from '../view/page.js'
const route = express.Router();

route.get('/', loginPage);
route.get('/main', mainPage);

export default route;