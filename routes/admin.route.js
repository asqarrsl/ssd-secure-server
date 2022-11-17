const router = require('express').Router();
const AdminController = require('../controllers/admin.controller');
const catchAsync = require('../utils/catchAsync.util');

router.post('/login', catchAsync(AdminController.loginAdmin));

module.exports = router;
