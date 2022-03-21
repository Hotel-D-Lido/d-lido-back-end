const express = require('express')
const router = express.Router()

const RoomsController = require('../controllers/rooms.controller')
const roomsController = new RoomsController()

/* Get employees list */
router.get('/', roomsController.list)
/* Get employee by id */
router.get('/:id', roomsController.get)
/* Update employee */
router.put('/update/:id', roomsController.update)
/* Create employee */
router.post('/create', roomsController.create)
/* Delete employee */
router.delete('/delete/:id', roomsController.delete)

module.exports = router
