import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name contain atleast 3 characters"],
        maxLength:[38,"First Name cannot exceed more than 38 characters"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name contain atleast 3 characters"],
        maxLength:[38,"Last Name cannot exceed more than 38 characters"],
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"Provided a valid email"]
    },
   
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone No. must contain only 11 digits"],
        maxLength:[30,"Last number cannot exceed 30 characters"]
    }, 
});

export const Reservation = mongoose.model("Reservation",reservationSchema);
