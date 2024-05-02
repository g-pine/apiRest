const express = require("express");

const ProductAirline = require('./../services/airline.service')

const router = express();
const service = new ProductAirline();

router.get('/', (req, res) =>{
  const airlines = service.find()
  res.json(airlines)
  }
);

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const airlines = service.findOne(id)
  res.json(airlines)
})

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body)
  res.status(201).json(newProduct);
})


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const airlines = service.update(id, body)
  res.status(201).json(airlines)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id)
  res.json(response)
})

module.exports = router;
