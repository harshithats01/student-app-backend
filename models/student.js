const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id":String,
        "fname":String,
        "lname":String,
        "college":String,
        "dob":String,
        "course":String,
        "mobile":String,
        "email":String,
        "address":String,
        "v":String
    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}