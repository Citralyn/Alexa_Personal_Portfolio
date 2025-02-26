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
        console.log(data);

        if (url == 'https://coffee.alexflipnote.dev/random.json') {
            return data.file; 
        } else if (url == 'https://random-d.uk/api/random') {
            return data.url; 
        } else if (url.substring(0, 12) == "https://rick") {
            return data.image; 
        } else if (url == "https://emojihub.yurace.pro/api/random") {
            return data.htmlCode[0];
        } else if (url.substring(0, 12) == "https://botw") {
            let entries = data.data.length;
            let randomIndex = Math.floor(Math.random() * entries);
            return data.data[randomIndex].image;
        } else if (url.substring(0, 21) == "https://collectionapi") {
            return data.primaryImage; 
        } else if (url == "https://dog.ceo/api/breeds/image/random") {
            return data.message; 
        }

    } catch (error) {
        console.error("Error fetching data:", error);
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


app.get('/dog', async (req, res) => {
    let file_name = await getData("https://dog.ceo/api/breeds/image/random");
    res.send(file_name);
})

app.get('/rick', async (req, res) => {
    let randomIndex = Math.floor(Math.random() * 1000);
    let url = 'https://rickandmortyapi.com/api/character/' + randomIndex; 
    let file_name = await getData(url);
    res.send(file_name);
})

app.get('/emoji', async (req, res) => {
    let file_name = await getData('https://emojihub.yurace.pro/api/random');
    res.send(file_name);
})

app.get('/art', async (req, res) => {
    let randomIndex = Math.floor(Math.random() * 400);
    randomIndex += 10250; 
    let url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomIndex;
    let file_name = await getData(url);
    res.send(file_name);
})

app.get('/hyrule', async (req, res) => {
    let file_name = await getData('https://botw-compendium.herokuapp.com/api/v3/compendium/all');
    res.send(file_name);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
