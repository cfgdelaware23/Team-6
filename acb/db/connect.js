import { createConnection } from 'mysql';

const conn = createConnection({
  host: '',
  user: 'your_username',
  password: 'your_password',
  database: 'cba_data'
})

const queryData = () => {
    conn.connect();

    const data = null;

    connection.query('SELECT * FROM your_table_name', (error, results, fields) => {
        if (error) throw error;
        data = results;
        console.log(results);
    });

    conn.end();
}

const writeData = () => {
    conn.connect();

    connection.query('SELECT * FROM your_table_name', (error, results, fields) => {
        if (error) throw error;
        data = results;
        console.log(results);
    });

    conn.end();
}