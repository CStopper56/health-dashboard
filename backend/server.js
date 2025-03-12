const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const auth = {
  username: process.env.API_USERNAME || 'coalition', // Default credentials
  password: process.env.API_PASSWORD || 'skills-test'
};

// GET /patients → Fetch all patients for the sidebar
app.get('/patients', async (req, res) => {
  try {
    const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', { auth });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching patients:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching patients', error: error.message });
  }
});

// GET /patients/{id} → Fetch patient details for the right panel
app.get('/patients/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://fedskillstest.coalitiontechnologies.workers.dev/${req.params.id}`, { auth });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching patient details:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching patient details', error: error.message });
  }
});

// GET /diagnosis-history/{patientId} → Fetch diagnosis history (blood pressure, heart rate, etc.)
app.get('/diagnosis-history/:patientId', async (req, res) => {
  try {
    const response = await axios.get(`https://fedskillstest.coalitiontechnologies.workers.dev/diagnosis-history/${req.params.patientId}`, { auth });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching diagnosis history:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching diagnosis history', error: error.message });
  }
});

// GET /lab-results/{patientId} → Fetch lab results
app.get('/lab-results/:patientId', async (req, res) => {
  try {
    const response = await axios.get(`https://fedskillstest.coalitiontechnologies.workers.dev/lab-results/${req.params.patientId}`, { auth });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching lab results:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching lab results', error: error.message });
  }
});

// GET /doctor-info → Fetch doctor details
app.get('/doctor-info', async (req, res) => {
  try {
    // Mock doctor data (replace with actual API call if needed)
    const doctor = {
      name: 'Dr. Jose Simmons',
      specialization: 'General Practitioner',
      profile_picture: 'https://example.com/doctor.jpg'
    };
    res.json(doctor);
  } catch (error) {
    console.error('Error fetching doctor info:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching doctor info', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});