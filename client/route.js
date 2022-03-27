import express from 'express';
import pageRouter from './router/page.js';

const app = express();


app.use('/main',express.static('src/OYR_insta_page'));
app.use('/', express.static('src/OYR_insta_login'));

app.use('/', pageRouter);

app.listen(8080, ()=>{
    console.log('success!');
})