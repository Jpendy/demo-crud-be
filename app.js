const express = require('express');
const client = require('./utils/connect.js')
const app = express();

const PORT = process.env.PORT;
// GET POST PUT PATCH DELETE

app.get('/', async (req, res) => {

    res.send('hello world')

})


app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) })