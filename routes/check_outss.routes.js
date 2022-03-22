const express = require('express')
const router = express.Router()

const Check_outssController = require('../controllers/check_outss.controller')
const check_outssController = new Check_outssController()

/* Get employees list */
router.get('/', check_outssController.list)
/* Get employee by id */
router.get('/:id', check_outssController.get)
/* Update employee */
router.put('/update/:id', check_outssController.update)
/* Create employee */
router.post('/create', check_outssController.create)
/* Delete employee */
router.delete('/delete/:id', check_outssController.delete)

module.exports = router
