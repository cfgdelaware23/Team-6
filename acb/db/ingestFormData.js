require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql');

const app = express();
app.use(cors)
const port = 5000;

app.use(bodyParser.json());

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


// try server side GET endpoint
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM availabilities';
  db.query(sql, (err, result) => {
    if (err) {
      throw err('Error inserting data into the database', err);
    }
    console.log('Fetched users:', result);
    res.json(result);
  });
});

// export function fetchAvailabilities() {
//     conn.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
//         conn.query("SELECT * from availabilities", function (err, result) {
//             if (err) throw err;
//             console.log("Result: " + result);
//         });
//     });
// }

// doesn't make post request from client side, won't run 
app.post('/', (req, res) => {

  const formData = req.body;
  var sql = "INSERT INTO availabilites (firstName, lastName, emailAddress, company, dateData) VALUES ('" + firstName + "', '" + lastName + "', '" + emailAddress + "', '" + company + "', '" + dateData + "')";
  con.query(sql, [
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.company,
    formData.dateData
  ], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Form data inserted successfully');
      res.json({ message: 'Form data inserted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
