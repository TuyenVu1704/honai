import Joi from 'joi';
export const departmentValidation = (data) => {
  const departmentSchema = Joi.object({
    _id: Joi.string(),
    departCode: Joi.string().required().lowercase().min(2).max(20),
    description: Joi.string().required(),
  });
  return departmentSchema.validate(data);
};
