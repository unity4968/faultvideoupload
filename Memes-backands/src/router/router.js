const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

var path = require("path");

var { upload , upload2 } = require('../middleware/schema');

router.get("/single",(req,res)=>{

    res.sendFile(path.join(__dirname, "../file.html"));
    
})

router.post("/single",upload.single('add'), class1.a)

router.get("/multiple", class1.b)
router.post("/multiple",upload2.array('add2', 100 ), class1.c)

router.get("/delete",class1.d);

router.get("/show",class1.e);
router.get("/show2",class1.f);
router.get("/showvideo",class1.g);

module.exports = router;
