const express = require('express');
const router = express.Router();
const bikesController = require('../controllers/bikeController');

router.get('/', bikesController.index);

router.get('/:id', bikesController.show);

router.post('/', bikesController.create);

router.put('/:id', bikesController.update);

/* router.delete('/:id', bikesController.destroy); */

module.exports = router