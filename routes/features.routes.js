const express = require('express')
const router = express.Router()

const FeaturesController = require('../controllers/features.controller')
const featuresController = new FeaturesController()

/* Get features list */
router.get('/', featuresController.list)
/* Get features by id */
router.get('/:id', featuresController.get)
/* Update features */
router.put('/update/:id', featuresController.update)
/* Create features */
router.post('/create', featuresController.create)
/* Delete features */
router.delete('/delete/:id', featuresController.delete)

module.exports = router
