const path = require('path');
const port = process.env.PORT || 3000;

// set up express app
const express = require('express');
const app = express();

// define path to serve static files
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});