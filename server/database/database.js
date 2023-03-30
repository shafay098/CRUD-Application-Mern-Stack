import mongoose from "mongoose"

const Connection = async(username,password) => {
const URL = `mongodb+srv://${username}:${password}@cluster1.duhbf7o.mongodb.net/PROJECT0?retryWrites=true&w=majority` ;

    try{
    await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true , });
    console.log('database connected successfully')
}catch(error){console.log('error while connecting to db',error)}
}

export default Connection