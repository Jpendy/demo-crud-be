const { Router } = require('express');
const Plant = require('../models/plants');

module.exports = Router()
    .get('/', async (req, res) => {
        const plants = await Plant.getAll();
        res.send(plants);
    })

    .post('/', async (req, res) => {
        const newPlant = await Plant.create(req.body);
        res.send(newPlant);
    })

    .delete('/:id', async (req, res) => {
        const deletedPlant = await Plant.deleteById(req.params.id);
        res.send(deletedPlant);
    })

