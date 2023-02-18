const { Client } = require('pg')

const client = new Client('postgres://postgres:postgres@localhost:5432/postgres')

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('Postgres is connected')
    }
});

module.exports = client;