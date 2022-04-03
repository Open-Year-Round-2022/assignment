import mysql from "mysql";

const dbinfo = {
    host: 'localhost',
    user: 'instagramclonecoding',
    password: 'instagramclonecoding',
    database: 'instagramclonecoding'
};

const dbcon = {
    init: () => {
        return mysql.createConnection(dbinfo);
    },
    conn: (con) => {
        con.connect((error) => {
            if (error) {
                console.log(error);
                setTimeout(init, 2000);
            } else {
                console.log("mysql connection sucessfully");
            }
        })
    },
    store: () => {
        return dbinfo;
    }
}

export default dbcon;