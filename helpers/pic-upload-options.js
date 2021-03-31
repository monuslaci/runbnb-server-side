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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = FILE_TYPE_MAP[file.mimetype];
            let uploadError = new Error('invalid image type');
    
            if(isValid) {
                uploadError = null
            }
    cb(uploadError, "../runbnb-public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});




const upload = multer({
  storage: storage
});


  module.exports = upload;
