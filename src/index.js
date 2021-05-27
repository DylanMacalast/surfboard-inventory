const express = require('express');
const app = express();
const port = 8080; // default listen

// route handler for homepage
app.get('/', (req, res) => {
    res.send('Hello Surfboards!');
});

// start express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})