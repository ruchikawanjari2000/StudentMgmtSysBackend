const mongoose = require('mongoose');

const dbConnection = async ()=>{

    await  mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("MONGO_DB connection sucessful")
}).catch((err)=>console.log(err))
}

module.exports = dbConnection;