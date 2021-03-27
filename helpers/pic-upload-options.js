const multer=require("multer"); //for uploading pictures

const express = require("express");



const app = express();


//----------picture upload
//specify the file types that are allowed to being uploaded
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

//specify the destination and file naming options
const storage = multer.diskStorage({
    destination: function (req, file, cb) { //contol of the destination
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid) {
            uploadError = null
        }
      cb(uploadError, 'public/uploads') //define the upload destination
    },
    filename: function (req, file, cb) { //contol of the filename
        
      const fileName = file.originalname.split(' ').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype]; //apply the extension restrictions
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })





// const uploadOptions = multer({ storage: storage }).fields([{name:'image',maxCount:1}]);
//const uploadOptions = multer({storage: storage}).single('image');

  module.exports = storage;
