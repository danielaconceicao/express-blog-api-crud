const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.post('/', postsController.store);
router.get('/', postsController.index);

module.exports = router

