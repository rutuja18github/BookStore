import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      unique:true, 
    },
    password: {
      type: String
    },
    mobileNumber: {
      type: Number,
    },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
