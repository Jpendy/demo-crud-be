const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', async (req, res) => {
    res.send('hello world')
})



app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) })