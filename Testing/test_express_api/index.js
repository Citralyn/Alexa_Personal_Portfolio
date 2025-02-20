const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const cors = require('cors')
app.use(cors())

function verifyAnswer(req, res, next) {
    const ans = req.body.pw;
    console.log(ans); 
    if (ans == 'lemon') {
        next();
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
}

async function getData(url) {
    try {
        const response = await fetch(url);  // Replace with the actual URL of the external API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (url == 'https://coffee.alexflipnote.dev/random.json') {
            return data.file; 
        } else if (url == 'https://random-d.uk/api/random') {
            return data.url; 
        }
        console.log(data.file)
        

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data" });
    }
}

app.get('/duck', async (req, res) => {
    let file_name = await getData('https://random-d.uk/api/random');
    res.send(file_name);
})

app.get('/coffee', async (req, res) => {
    let file_name = await getData('https://coffee.alexflipnote.dev/random.json');
    res.send(file_name);
})

app.post('/secret', verifyAnswer, (req, res) => {
    console.log(req.body);
    res.send("SUCCESS");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
