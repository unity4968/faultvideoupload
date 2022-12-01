const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  
  image:{
    type: String,
  },
  // image: {
  //   type: String,
  //   // required: true,
  // },

});

const blog = new mongoose.model("memscollections", blogSchema);

module.exports = blog;
