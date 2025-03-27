import mongoose from "mongoose";


 async function ConectDatabase() {
    mongoose.connect(process.env.DB_CONECT_STRING);
    return mongoose.connection
}

export default ConectDatabase