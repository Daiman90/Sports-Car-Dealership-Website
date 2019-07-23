const express = require('express');
const router = express.Router();

const Item = require('../item');

router.get('/', (req, res) => {
  Item.find().then(items => res.json(items));
});

router.post('/', (req, res) => {
  const newItem = new Item({
    make: req.body.make,
    country: req.body.country,
    img: req.body.img,
    special: req.body.special,
    model: req.body.model,
    price: req.body.price,
    type: req.body.type,
    trans: req.body.trans,
    gas: req.body.gas
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch(error => {
      res.status(500);
      res.json(error);
    });
});

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove())
    .catch(err => res.status(404));
});

router.delete('/', (req, res) => {
  Item.find()
    .then(item => item.remove())
    .catch(err => res.status(404));
});

module.exports = router;
