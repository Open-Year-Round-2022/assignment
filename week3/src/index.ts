
import express from 'express';
import { resolve } from 'path';

const app = express();
app.use('/login', express.static(resolve(__dirname, '../public/login')));
app.use('/', express.static(resolve(__dirname, '../public/feed')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});