import React, { useState, useEffect } from 'react';
import Header from './components/js/Header';
import Sidebar from './components/js/Sidebar';
import PatientInfo from './components/js/PatientInfo';
import DiagnosisHistory from './components/js/DiagnosisHistory';
import Vitals from './components/js/Vitals';
import DiagnosticList from './components/js/DiagnosticList';
import LabResults from './components/js/LabResults';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(null);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://health-backend-v84i.onrender.com');
        setPatients(response.data);
        const jessica = response.data.find(patient => patient.name === 'Jessica Taylor');
        if (jessica) {
          setActivePatient(jessica);
          fetchDoctorInfo(jessica.id);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, []);

  const fetchDoctorInfo = async (patientId) => {
    try {
      const response = await axios.get(`http://localhost:5000/doctor-info/${patientId}`);
      setDoctor(response.data);
    } catch (error) {
      console.error('Error fetching doctor info:', error);
    }
  };

  const handlePatientSelect = (patient) => {
    setActivePatient(patient);
    fetchDoctorInfo(patient.id);
  };

return (
  <div className="App">
    <Header doctor={doctor} />
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar">
          <Sidebar patients={patients} onPatientSelect={handlePatientSelect} activePatient={activePatient} />
        </div>

        {/* Main content */}
        <div className="col-md-9 main-content">
          {activePatient && (
            <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
              {/* Left side */}
    <div className="col-md-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch'}}>
                <div className="diagnosis-history">
                  <DiagnosisHistory diagnosisHistory={activePatient.diagnosis_history} />
                  <Vitals vitals={activePatient.diagnosis_history[0]} />
                </div>
                <DiagnosticList diagnosticList={activePatient.diagnostic_list} />
              </div>

              {/* Right side */}
              <div className="col-md-4" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <PatientInfo patient={activePatient} />
                <LabResults labResults={activePatient.lab_results} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

}

export default App;
