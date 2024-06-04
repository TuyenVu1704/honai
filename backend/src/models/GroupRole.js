import mongoose from 'mongoose';

const groupRoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const GroupRole = mongoose.model('GroupRole', groupRoleSchema);

export default GroupRole;
