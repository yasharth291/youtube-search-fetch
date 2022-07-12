const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectToDatabase = async () => {
    try{
        mongoose.connect(
            process.env.MONGOURL,
            {
                //autoIndex: false,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useNewUrlParser: true
            }
        )
        console.log("MongoDB is connected");
    } catch(error){
   
console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;