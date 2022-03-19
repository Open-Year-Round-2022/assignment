import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mainRoute from './router/route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan());

app.use('/', mainRoute);

app.listen(3000, ()=>{
    console.log('active!!!!');
})