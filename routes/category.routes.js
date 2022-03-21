const express = require('express')
const router = express.Router()
const CategoriesController = require('../controllers/categories.controller')
const categoriescontroller = new CategoriesController()

/* Get categories list */
router.get('/', categoriescontroller.list)
/* Get categories by id */
router.get('/:id', categoriescontroller.get)
/* Update categories */
router.put('/update/:id', categoriescontroller.update)
/* Create categories */
router.post('/create', categoriescontroller.create)
/* Delete categories */
router.delete('/delete/:id', categoriescontroller.delete)

module.exports = router
