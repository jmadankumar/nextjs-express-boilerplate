const multer = require('multer');
const path = require('path');

//upload file to /tmp/uploads in current working directory
const fileUploadPath = path.join(process.cwd(), 'tmp', 'uploads');
console.log(fileUploadPath);
const fileUpload = multer({
    dest: fileUploadPath
});

module.exports = fileUpload;

