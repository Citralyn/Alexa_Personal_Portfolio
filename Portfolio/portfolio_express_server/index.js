const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

app.use(express.json());


async function getData(url) {
    try {
        const response = await fetch(url);  // Replace with the actual URL of the external API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.url; 

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data" });
    }
}

app.get('/duck', async (req, res) => {
    let file_name = await getData('https://random-d.uk/api/random');
    res.send(file_name);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
