import User from '../models/user.model';

//create new user
export const newUser = async (body) => {
  const data = await User.find({email:body.email});
  if (data.length !== 0) {
    throw new Error('Already Exist EmailId');
  } else {
    const data = await User.create(body);
    return data;
  }
};




