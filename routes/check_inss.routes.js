const express = require('express')
const router = express.Router()

const Check_inssController = require('../controllers/check_inss.controller')
const check_inssController = new Check_inssController()

/* Get employees list */
router.get('/', check_inssController.list)
/* Get employee by id */
router.get('/:id', check_inssController.get)
/* Update employee */
router.put('/update/:id', check_inssController.update)
/* Create employee */
router.post('/create', check_inssController.create)
/* Delete employee */
router.delete('/delete/:id', check_inssController.delete)

module.exports = router
