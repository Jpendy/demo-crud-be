const express = require('express');
const client = require('./utils/connect.js')
const app = express();

const PORT = process.env.PORT;
// GET POST PUT PATCH DELETE

app.use(require('cors')());

app.get('/plants', async (req, res) => {

    const queryResult = await client.query('SELECT * FROM plants;')
    const rows = queryResult.rows;
    res.send(rows)

})


app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) })