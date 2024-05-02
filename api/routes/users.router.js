const express = require("express");

const productUsers = require('./../services/users.service')

const router = express();
const service = new productUsers();

router.get('/', (req, res) =>{
  const users = service.find()
  res.json(users)
  }
);

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const users = service.findOne(id)
  res.json(users)
})

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body)
  res.status(201).json(newUser);
})


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const users = service.update(id, body)
  res.status(201).json(users)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id)
  res.json(response)
})

module.exports = router;
