import mongoose, { Document, Schema } from 'mongoose';

export interface IForm extends Document {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  };
  work: {
    jobTitle: string;
    company: string;
    yearsOfExperience: number;
    currentSalary: number;
    skills: string[];
  };
  references: {
    reference1: {
      fullName: string;
      title: string;
      company: string;
      email: string;
      phone: string;
      relationship: string;
    };
    reference2: {
      fullName: string;
      title: string;
      company: string;
      email: string;
      phone: string;
      relationship: string;
    };
  };
}

const referenceSchema = new Schema({
  fullName: String,
  title: String,
  company: String,
  email: String,
  phone: String,
  relationship: String,
});

const formSchema = new Schema<IForm>(
  {
    personal: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
    },
    work: {
      jobTitle: String,
      company: String,
      yearsOfExperience: Number,
      currentSalary: Number,
      skills: [String],
    },
    references: {
      reference1: referenceSchema,
      reference2: referenceSchema,
    },
  },
  { timestamps: true }
);

const Form = mongoose.model<IForm>('Form', formSchema);
export default Form;
