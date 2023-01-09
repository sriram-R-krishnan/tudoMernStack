const { default: mongoose } = require("mongoose")




const connectDB = (dbKey)=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(dbKey)
    console.log('connected to db');
}

module.exports = connectDB