const  mongoose = require("mongoose");

var  uri = process.env.oneDay || "mongodb+srv://unity4968:Unity4968@cluster.fh6lfb0.mongodb.net/memsworld?retryWrites=true&w=majority"

const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// mongoose.connect("mongodb://localhost:27017/vivek", options).then(() => {
// console.log("Database connection established!");
// },
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});