const express = require('express')
const router = express.Router()
const imagesController = require('../controllers/images.controller')

/* Get images list */
router.get('/', imagesController.list)
/* Get image by id */
router.get('/:id', imagesController.get)
/* Update image */
router.put('/update/:id', imagesController.update)
/* Create image */
router.post('/create', imagesController.create)
/* Delete image */
router.delete('/delete/:id', imagesController.delete)

module.exports = router
