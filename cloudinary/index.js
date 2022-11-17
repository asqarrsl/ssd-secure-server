const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage}=require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name :process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder : 'SSD-Secure-Development',
        use_filename :true,
        overwrite: false,
        // unique_filename :true,
        resource_type : 'auto',
        
        // allowedFormate : ['jpeg','png','jpg','zip','pdf']
    }
})

module.exports = {
    cloudinary,
    storage
}