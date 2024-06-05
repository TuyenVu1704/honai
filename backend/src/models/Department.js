import mongoose from 'mongoose';
import { DbUser } from '../config/connectMultiDBMongo.js';
const departmentSchema = new mongoose.Schema(
  {
    departCode: {
      type: String,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Department = DbUser.model('Department', departmentSchema);

export { Department };
