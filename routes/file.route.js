const router = require('express').Router();
const FileController = require('../controllers/file.controller');
const catchAsync = require('../utils/catchAsync.util');

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage})

router.post('/upload', upload.single('file'), catchAsync(FileController.uploadFile));

module.exports = router;
