app.get('/farmers', async (req, res) => {
  const farmers = await Farmer.find();
  res.json(farmers);
});

app.post('/farmers', async (req, res) => {
  const newFarmer = new Farmer(req.body);
  await newFarmer.save();
  res.json(newFarmer);
});

app.put('/farmers/:id', async (req, res) => {
  const updated = await Farmer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/farmers/:id', async (req, res) => {
  await Farmer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

// Task Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

app.put('/tasks/:id', async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

app.listen(5000, () => console.log('Server started on port 5000'));
