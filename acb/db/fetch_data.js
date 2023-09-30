// why did we comment out stuff? also this should be in .gitignore 

// import { createConnection } from 'mysql';

// const conn = createConnection({
//     host: "database6.cs0tgohxdki8.us-east-2.rds.amazonaws.com",
//     user: "admin",
//     password: "",
//     database: "database6"
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