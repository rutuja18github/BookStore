import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

//create new user
export const newUser = async (body) => {
  const data = await User.find({ email: body.email });
  if (data.length !== 0) {
    throw new Error('Already Exist EmailId');
  } else {
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(body.password, saltRounds)
    body.password = hashpassword
    // Insert the new user if they do not exist yet
    const data = await User.create(body);
    return data;
  }
};

//login user
export const userSignin = async (body) => {
  const data = await User.findOne({ email: body.email });
  // Check if email id present or not
  if (data.length !== 0) {
    console.log('Password', body.password);
    const result = await bcrypt.compare(body.password, data.password)
    if (result) {
      var token = jwt.sign({ 'id': data.id, 'fullname': data.fullname, 'email': data.email,'mobileNumber': data.mobileNumber }, process.env.SECRET_KEY);
      return token;
    } else {
      throw new Error('Enter Password is invalid');
    }
  } else {
    throw new Error('Enter EmailId is invalid');
  }
};

//Forgot password
export const forgotPassword = async (body) => {
  // To check email id is register or not in database
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
    var passwordToken = jwt.sign({email: data.email, id: data._id}, process.env.SECRET_KEY);
    return passwordToken;
  }
  else {
    throw new Error("Invalid Email ID");
  }
};

//Reset password
export const ResetPassword = async (body) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  const data = await User.findOneAndUpdate(
    {
      email:body.email
    },
    {
      password:hashPassword
    },
    {
      new: true
    }
  );
  return data;
};