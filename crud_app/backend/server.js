const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/teamfarmers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const farmerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
});

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedTo: String,
  status: String
});

const Farmer = mongoose.model('Farmer', farmerSchema);
const Task = mongoose.model('Task', taskSchema);