const express = require('express');
const app = express();

app.listen(3003, () => { // listen at port 3003 on localhost 
    console.log('Server is running on http://localhost:3003');
});