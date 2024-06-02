import mongoose from 'mongoose';

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
      required: true,
    },
    passwordChangedAt: [String],
    passwordResetToken: String,
    passwordResetExpires: Date,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    groupRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GroupRole',
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

const User = mongoose.model('User', userSchema);

export default User;
