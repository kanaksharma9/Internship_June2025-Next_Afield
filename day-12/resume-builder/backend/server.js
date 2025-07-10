// backend/server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const resumeRoutes = require("./routes/routeResume");
const aiRoutes = require("./routes/aiRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error(err));


app.use("/api/resume", resumeRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
