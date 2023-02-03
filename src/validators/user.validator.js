import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().min(4).required(),
    mobileNumber: Joi.required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).max(15).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
