import Joi from "joi";
import { validationMiddleware } from "../validation/validate";

const referenceSchema = Joi.object({
  fullName: Joi.string().required(),
  title: Joi.string().required(),
  company: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  relationship: Joi.string().required(),
});

const formSchema = Joi.object({
  personal: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }).required(),

  work: Joi.object({
    jobTitle: Joi.string().required(),
    company: Joi.string().required(),
    yearsOfExperience: Joi.number().integer().min(0).required(),
    currentSalary: Joi.number().min(0).required(),
    skills: Joi.array().items(Joi.string()).required(),
  }).required(),

  references: Joi.object({
    reference1: referenceSchema.required(),
    reference2: referenceSchema.required(),
  }).required(),
});

export const validateFormData = validationMiddleware(formSchema);
