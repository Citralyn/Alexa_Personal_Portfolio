const express = require('express')
const app = express()
const port = 3005

const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'bunny',
    password: 'carrot',
    database: 'food'
})

connection.connect()

app.get("/data", (req, res) => {
    let query = "SELECT price FROM shop WHERE dealer='C';";
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        res.json(results); 

    })
}); 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

