const router = require('express').Router();
const MessageController = require('../controllers/message.controller');
const catchAsync = require('../utils/catchAsync.util');

const { verifyAdminAuth } = require('../middleware/auth.admin.middleware');
const { verifyManagerAuth } = require('../middleware/auth.manager.middleware');
const { verifyWorkerAuth } = require('../middleware/auth.worker.middleware');

router.get('/', catchAsync(verifyAdminAuth), catchAsync(MessageController.getAllMessages));
router.get('/worker/:id', catchAsync(verifyWorkerAuth), catchAsync(MessageController.getMessgeByUserId));
router.get('/manager/:id', catchAsync(verifyManagerAuth), catchAsync(MessageController.getMessgeByUserId));
router.get('/worker/get/:id', catchAsync(verifyWorkerAuth), catchAsync(MessageController.getMessgeById));
router.get('/manager/get/:id', catchAsync(verifyManagerAuth), catchAsync(MessageController.getMessgeById));
router.post('/worker', catchAsync(verifyWorkerAuth), catchAsync(MessageController.saveMessage));
router.post('/manager', catchAsync(verifyManagerAuth), catchAsync(MessageController.saveMessage));
router.delete('/:id', catchAsync(MessageController.deleteMessage));

module.exports = router;
