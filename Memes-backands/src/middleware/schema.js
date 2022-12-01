var multer = require("multer");

var path = require("path");

const fileStorageEngine = multer.diskStorage({
    
    destination: (req, file, cb) => {
        // cb(null, "./public");
        cb(null, path.join(__dirname, '../../public'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.originalname + '--' + Date.now());
        cb(null,uniqueSuffix);
    }
})

const upload = multer({ storage: fileStorageEngine });

var storage = multer.diskStorage({
    destination : function ( req , file , cb ){
        cb(null, path.join(__dirname, '../../public'))
    },
    filename : function (req, file , cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.originalname + '--' + Date.now());
        cb(null,uniqueSuffix+'.jpg');
    }
}) 

var upload2 = multer({ storage : storage })

module.exports = { upload , upload2 };
