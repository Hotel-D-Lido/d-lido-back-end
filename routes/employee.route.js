const express = require('express'); 
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');
const employeeController = new EmployeeController();

/* Get employees list */
router.get('/', employeeController.list);
/* Get employee by id */
router.get('/:id', employeeController.get);
/* Update employee */
router.put('/update/:id', employeeController.update);
/* Create employee */
router.post('/create', employeeController.create);
/* Delete employee */
router.delete('/delete/:id', employeeController.delete);

module.exports = router;
