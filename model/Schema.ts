import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    emial: String,
    password: String,
})

const Users = models.user || model('user',userSchema);


export default Users;