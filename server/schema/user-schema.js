import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'


const userSchema = mongoose.Schema({

name: String,
username: String,
email: String,
phone: String
})

autoIncrement.initialize(mongoose.connection)
userSchema.plugin(autoIncrement.plugin,'user');

const TestUser = mongoose.model('user',userSchema)

export default TestUser ;