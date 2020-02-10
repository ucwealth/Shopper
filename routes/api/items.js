const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc  GET All Items
// @access Public
router.get('/',(req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

// @route POST api/items
// @desc  Create new Item
// @access Public
router.post('/',(req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    })
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc  Delete An Item
// @access Public
router.delete('/:id',(req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({
       "message":"Deleted Successfully!"
   })))
   .catch(err => res.status(404).json({
       message: "Didnt work!"
   }))
})

module.exports = router;