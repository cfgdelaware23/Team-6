const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
// require('dotenv').config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err);
        return;
    }
    console.log('Connected to the database');
});

// Insert data into database
function insertData(data) {
    const sql = 'INSERT INTO availabilities (firstName, lastName, emailAddress, company, dateData) VALUES (?, ?, ?, ?, ?)';
    con.query(sql, [
        data.firstName,
        data.lastName,
        data.emailAddress,
        data.company,
        data.dateData
    ], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database', err);
        } else {
            console.log('Data inserted successfully');
        }
    });
}

module.exports = {
    insertData
};
