import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema({
  crop: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Crop || mongoose.model("Item", ItemsSchema);