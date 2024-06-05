import Joi from 'joi';
import { regexPhone } from '../utils/regex.js';

export const userValidation = (data) => {
  const userSchema = Joi.object({
    _id: Joi.string(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().lowercase().required(),
    phoneNum: Joi.string()
      .regex(regexPhone)
      .message('Số điện thoại không hợp lệ')
      .min(10)
      .max(10)
      .required(),
    role: Joi.string(),
  });
  return userSchema.validate(data);
};
