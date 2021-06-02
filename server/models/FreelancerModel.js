import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FreelancerSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    skills: [
      {
        title: {
          type: String,
        }
      }
    ],
    
  },
  {
    timestamps: true,
  }
);

const Freelancer = mongoose.model("Freelancer", FreelancerSchema);

export default Freelancer;
