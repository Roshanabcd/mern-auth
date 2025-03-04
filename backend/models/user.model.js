import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        default:"roshan"
    },
    name: {
        type: String,
        required: true,
    },
    lastlogin:{
        type: Date,
        default: Date.now
    }, 
    isverified:{
        type: Boolean,
        default: false
    },
    resetpasswordtoken: String,
    resetpasswordExpireToken: Date,
    verificationToken: String,
    verificationExpireToken: Date
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;