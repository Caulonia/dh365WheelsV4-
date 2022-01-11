const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination(req, file, cb) {
    const folder = './public/img/products';
    cb(null, folder);
  },
  filename(req, file, cb) {
    const imageName = `dish-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, imageName);
  },
});

const upload = multer({ storage });

module.exports = upload;
