const express = require('express')
const router = express.Router()
const imagesController = require('../controllers/images.controller')

/* Get images list */
router.get('/', imagesController.list)
/* Get images by id */
router.get('/:id', imagesController.get)
/* Update images */
router.put('/update/:id', imagesController.update)
/* Create images */
router.post('/create', imagesController.create)
/* Delete images */
router.delete('/delete/:id', imagesController.delete)

module.exports = router
