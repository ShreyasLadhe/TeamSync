import mongoose, { Document, Schema } from "mongoose";
import { generateInviteCode } from "../utils/uuid";

export interface WorkspaceDocument extends Document {
  name: string;
  description: string;
  owner: mongoose.Types.ObjectId;
  inviteCode: string;
  inviteEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

const workspaceSchema = new Schema<WorkspaceDocument>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model (the workspace creator)
      required: true,
    },
    inviteCode: {
      type: String,
      required: true,
      unique: true,
      default: generateInviteCode,
    },
    inviteEnabled: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

workspaceSchema.methods.resetInviteCode = function () {
  this.inviteCode = generateInviteCode();
};

const WorkspaceModel = mongoose.model<WorkspaceDocument>(
  "Workspace",
  workspaceSchema
);

export default WorkspaceModel;