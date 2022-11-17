const router = require('express').Router();
const { uploadFile } = require('../controllers/file.controller');

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage})

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
