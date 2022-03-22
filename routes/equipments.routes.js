const express = require('express')
const router = express.Router()

const EquipmentsController = require('../controllers/guests.controller')
const equipmentsController = new EquipmentsController()

/* Get employees list */
router.get('/', equipmentsController.list)
/* Get employee by id */
router.get('/:id', equipmentsController.get)
/* Update employee */
router.put('/update/:id', equipmentsController.update)
/* Create employee */
router.post('/create', equipmentsController.create)
/* Delete employee */
router.delete('/delete/:id', equipmentsController.delete)

module.exports = router
