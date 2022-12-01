const Todo = require("../model/schema")
const HTTP = require("../../constant/response.constant");

var path = require("path");
var fs = require('fs');

class class1 {

    static a = async (req, res) => {

        try {

            var a = req.file.originalname ;
            var b = a.split('.')

            var fileformat = b[b.length - 1] ; 

            console.log(fileformat);
                
            var imageid1 = path.join(__dirname, "../../public", req.file.filename);
            var imageid2 = path.join(__dirname, "../../public", req.file.filename + "." + fileformat);

            fs.rename(imageid1, imageid2, function (err) {
                if (err) console.log('ERROR: ' + err);
            });

            var a = await Todo.find({});

            let data = new Todo({

                image: imageid2

            })
            await data.save();
            res.send("file upload")

        } catch (err) 
        {
            console.log(err);
        }
    }
    static b = async (req, res) => {
        try {
        
            res.render("files");
    
        } catch (e) {

            console.log(err);

        }

    }

    static c = async (req, res) => {

        try {

            for(var j = 0 ; j<req.files.length ; j++){

                let data = new Todo({

                    image: req.files[j].filename
    
                })

                await data.save();
                
            }

            res.send("file upload")
            
        } catch (err) {

            console.log(err);

        }

    }

    static d = async (req, res) => {

        try {

            await Todo.find({}).deleteMany();

            res.send("data deleted");
    
        } catch (e) {

            console.log(err);

        }

    }

    static e = async (req, res) => {

        try {
        
            var a = await Todo.find({});

            var array = [] ;

            for(var i = 0 ; i<a.length ; i++){
                array.push(`https://memwolds.herokuapp.com/${a[i].image}`);
            }

            var data = {
                "url":array
                }

            res.send(data);
            // res.render("show" , { array , url  })
    
        } catch (e) {

            console.log(e);

        }

    }

    static f = async (req, res) => {

        try {
        
            var a = await Todo.find({});

            var array = [] ;

            for(var i = 0 ; i<a.length ; i++){
                array.push(`https://memwolds.herokuapp.com/${a[i].image}`);
            }

            res.render("show" , { array })
    
        } catch (e) {

            console.log(e);

        }

    }

    static g = async (req, res) => {

        try {
        
            var a = await Todo.find({});

            var array = [] ;

            for(var i = 0 ; i<a.length ; i++){
                array.push(`https://memwolds.herokuapp.com/${a[i].image}`);
            }

            res.render("show3" , { array })
    
        } catch (e) {

            console.log(e);

        }

    }

}

module.exports = { class1 };
