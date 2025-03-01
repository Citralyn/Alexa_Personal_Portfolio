const express = require('express')
const app = express()
const port = 3000

// enable cross-origin resource sharing so that front-end server an access this api
const cors = require('cors')
app.use(cors())

// using express.json to deal with json objects from the external APIs
app.use(express.json());

// getData makes an fetch request to an external API depending on the url passed 
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // depending on the API, the image-url is stored under different keys
        if (url == 'https://coffee.alexflipnote.dev/random.json') {
            return data.file; 
        } else if (url == 'https://random-d.uk/api/random') {
            return data.url; 
        } else if (url.substring(0, 12) == "https://rick") {
            return data.image; 
        } else if (url == "https://elonmu.sh/api") {
            return data.urlImage;
        } else if (url.substring(0, 12) == "https://botw") {
            // the hyrule api does not have a random function (so it returns all entries)
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


// I chose to call seven APIs just for fun 
app.get('/duck', async (req, res) => {
    // a get request to duck will respond with the image url from the random duck image api 
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
    // for the rick (and the art) API, you need to specify an index 
    let randomIndex = Math.floor(Math.random() * 1000); // I am getting one randomly
    let url = 'https://rickandmortyapi.com/api/character/' + randomIndex; 

    let file_name = await getData(url);
    res.send(file_name);
})

app.get('/elon', async (req, res) => {
    let file_name = await getData('https://elonmu.sh/api');
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

// the server is started and listening on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})