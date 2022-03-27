const mongoose = require("mongoose");
const connect = () =>{
    return mongoose.connect(
        "mongodb+srv://navneetfw15:Singh123@cluster0.lpaft.mongodb.net/relationship?retryWrites=true&w=majority"
    );
};
module.exports = connect;