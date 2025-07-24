import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [farmers, setFarmers] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', location: '' });
  const [editingId, setEditingId] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [taskForm, setTaskForm] = useState({ title: '', description: '', assignedTo: '', status: 'Pending' });
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    fetchFarmers();
    fetchTasks();
  }, []);

  const fetchFarmers = async () => {
    const res = await axios.get('http://localhost:5000/farmers');
    setFarmers(res.data);
  };

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  const handleFarmerSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/farmers/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/farmers', form);
    }
    setForm({ name: '', age: '', location: '' });
    fetchFarmers();
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (editingTaskId) {
      await axios.put(`http://localhost:5000/tasks/${editingTaskId}`, taskForm);
      setEditingTaskId(null);
    } else {
      await axios.post('http://localhost:5000/tasks', taskForm);
    }
    setTaskForm({ title: '', description: '', assignedTo: '', status: 'Pending' });
    fetchTasks();
  };

  const handleEditFarmer = (farmer) => {
    setForm({ name: farmer.name, age: farmer.age, location: farmer.location });
    setEditingId(farmer._id);
  };

  const handleDeleteFarmer = async (id) => {
    await axios.delete(`http://localhost:5000/farmers/${id}`);
    fetchFarmers();
  };

  const handleEditTask = (task) => {
    setTaskForm({ title: task.title, description: task.description, assignedTo: task.assignedTo, status: task.status });
    setEditingTaskId(task._id);
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>Team Farmer CRUD App</h1>

      <h2>Farmers</h2>
      <form onSubmit={handleFarmerSubmit}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} required />
        <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
        <button type="submit">{editingId ? 'Update' : 'Add'} Farmer</button>
      </form>
      <ul>
        {farmers.map((farmer) => (
          <li key={farmer._id}>
            {farmer.name} - {farmer.age} - {farmer.location}
            <button onClick={() => handleEditFarmer(farmer)}>Edit</button>
            <button onClick={() => handleDeleteFarmer(farmer._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Team Tasks</h2>
      <form onSubmit={handleTaskSubmit}>
        <input placeholder="Title" value={taskForm.title} onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })} required />
        <input placeholder="Description" value={taskForm.description} onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })} required />
        <input placeholder="Assigned To" value={taskForm.assignedTo} onChange={(e) => setTaskForm({ ...taskForm, assignedTo: e.target.value })} required />
        <select value={taskForm.status} onChange={(e) => setTaskForm({ ...taskForm, status: e.target.value })}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">{editingTaskId ? 'Update' : 'Add'} Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - Assigned to: {task.assignedTo} - Status: {task.status}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
