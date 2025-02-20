const express = require('express')
const app = express()
const port = 3006

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://coconut:milk@localhost:5432/app')


app.get("/data", (req, res) => {
    let query = "SELECT * FROM users WHERE id=1";
    db.any(query)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('ERROR:', error)
        res.status(500).send()
    })
}); 


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



