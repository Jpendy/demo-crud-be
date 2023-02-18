const express = require('express');
const client = require('./utils/connect.js')
const app = express();

const PORT = process.env.PORT;
// GET POST PUT PATCH DELETE

app.use(require('cors')());
app.use(express.json())

app.get('/plants', async (req, res) => {
    const queryResult = await client.query('SELECT * FROM plants;')
    const rows = queryResult.rows;
    res.send(rows)
})

app.post('/plants', async (req, res) => {
    console.log('this is the req body', req.body)

    const name = req.body.name;
    const isHerb = req.body.isHerb;
    const isPerennial = req.body.isPerennial;
    const imgUrl = req.body.imgUrl;

    const queryResult = await client.query(`
        INSERT INTO plants (name, img_url, is_herb, is_perennial)
        values ($1, $2, $3, $4)
        RETURNING *;
    `, [name, imgUrl, isHerb, isPerennial])

    res.send(queryResult.rows)
})

app.delete('/plants/:id', async (req, res) => {

    const queryResult = await client.query(`
        DELETE FROM plants 
        WHERE id = $1
        RETURNING *;
    `, [req.params.id])

    res.send(queryResult.rows)
})


app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) })