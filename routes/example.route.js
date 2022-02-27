const express = require('express'); 
const router = express.Router();

const ExampleController = require('../controllers/example/example.controller');
const exampleController = new ExampleController();

/* Get example */
router.get('/', exampleController.list);

module.exports = router;
