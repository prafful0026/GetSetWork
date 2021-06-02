import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required:true,
      enum: ["freelancer", "client", "root"],
    },
    profilePicUrl:{
        type:String
    },
    projects: [{ project: { type: Schema.Types.ObjectId, ref: "Project" } }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;