import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    crop: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
