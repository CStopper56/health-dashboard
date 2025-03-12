import React, { useState } from 'react';
import searchIcon from '../assets/svg/search.svg';
import threeDotsIcon from '../assets/svg/three_dots.svg';
import '../css/Sidebar.css';

function Sidebar({ patients, onPatientSelect, activePatient }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="sb_sidebar">
      <div className="sb_sidebar-header">
        <h1 className="sb_sidebar-title">Patients</h1>
        <img
          src={searchIcon}
          alt="Search"
          className="sb_search-icon"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
      </div>
      {showSearchBar && (
        <input
          type="text"
          placeholder="Search patients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sb_search-bar"
        />
      )}
      <div className="sb_patients-container">
        <ul className="sb_patients-list">
          {filteredPatients.map(patient => (
            <li
              key={patient.name}
              className={`sb_patient-item ${activePatient?.name === patient.name ? 'sb_active' : ''}`}
              onClick={() => onPatientSelect(patient)}
            >
              <img src={patient.profile_picture || 'https://via.placeholder.com/48'} alt={patient.name} className="sb_patient-image" />
              <div className="sb_patient-details">
                <p className="sb_patient-name">{patient.name}</p>
                <p className="sb_patient-info">{patient.gender}, {patient.age}</p>
              </div>
              <img src={threeDotsIcon} alt="More options" className="sb_three-dots" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;