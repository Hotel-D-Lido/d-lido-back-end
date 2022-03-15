const express = require('express'); 
const router = express.Router();

const PublicUserController = require('../controllers/public-user.controller');
const publicUserController = new PublicUserController();

/* Get employees list */
router.get('/', publicUserController.list);
/* Get employee by id */
router.get('/:id', publicUserController.get);
/* Update employee */
router.put('/update/:id', publicUserController.update);
/* Create employee */
router.post('/create', publicUserController.create);
/* Delete employee */
router.delete('/delete/:id', publicUserController.delete);

module.exports = router;