const express = require('express');
const plantRoutes = require('./routes/plants.js');
const app = express();

const PORT = process.env.PORT;
// GET POST PUT PATCH DELETE

app.use(require('cors')());
app.use(express.json());

app.use('/plants', plantRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})