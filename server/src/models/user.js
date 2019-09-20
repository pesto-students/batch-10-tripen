import mongoose from '../configs/database';

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    emailId: String,
    password: String,
    firstname: String,
    lastname: String,
    username: String
});

const Users = mongoose.model("user", userSchema)
module.exports = Users;
