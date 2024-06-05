import mongoose from 'mongoose';
import { DbUser } from '../config/connectMultiDBMongo.js';
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    passwordChangedAt: [String],
    passwordResetToken: String,
    passwordResetExpires: Date,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
    permission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Permission',
    },
    photo: [String],
    refeshToken: String,
  },
  { timestamps: true }
);
const User = DbUser.model('User', userSchema);
export { User };
