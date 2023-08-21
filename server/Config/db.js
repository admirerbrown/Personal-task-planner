const mongoose = require('mongoose');

const connectDb =  async ()=>{
    try {
        const connekt = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected: ${connekt.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectDb;