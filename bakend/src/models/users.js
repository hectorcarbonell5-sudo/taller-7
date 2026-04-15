import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, "El correo electrónico no es válido."]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
   
}, {
    versionKey: false,
    timestamps: true,
});

export default model('Users', usersSchema)
