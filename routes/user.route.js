const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const catchAsync = require('../utils/catchAsync.util');
const { verifyAdminAuth } = require('../middleware/auth.admin.middleware');

router.get('/', catchAsync(verifyAdminAuth), catchAsync(UserController.getUsers));
router.post('/register', catchAsync(verifyAdminAuth), catchAsync(UserController.saveUser));
router.post('/login', catchAsync(UserController.loginUser));
router.get('/logged', catchAsync(UserController.checkLoggedIn));
router.get('/:id', catchAsync(verifyAdminAuth), catchAsync(UserController.getUser));
router.delete('/:id', catchAsync(verifyAdminAuth), catchAsync(UserController.deleteUser));

module.exports = router;
