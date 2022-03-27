import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user : 'root',
    database: 'oyr',
    password: 'kd8787'
});

export const db = pool.promise();