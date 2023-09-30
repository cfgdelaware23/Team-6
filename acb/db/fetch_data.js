// why did we comment out stuff? also this should be in .gitignore 

// import { createConnection } from 'mysql';

// const conn = createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });

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