import mongoose from "mongoose";

const CropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Crop || mongoose.model("Crop", CropSchema);