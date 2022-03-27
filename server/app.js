import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoute from './router/auth.js';
import mainRoute from './router/posting.js';
import { db } from './db/database.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan());

app.use('/auth', authRoute);
app.use('/', mainRoute);

db.getConnection().then(()=>{
    console.log('connect!');
    
    app.listen(3000, ()=>{
        console.log('success!!');
    })
});