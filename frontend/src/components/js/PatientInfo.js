import React from 'react';
import '../css/PatientInfo.css';
import BirthIcon from '../assets/svg/BirthIcon.svg';
import FemaleIcon from '../assets/svg/FemaleIcon.svg';
import MaleIcon from '../assets/svg/MaleIcon.svg';
import PhoneIcon from '../assets/svg/PhoneIcon.svg';
import EmergencyIcon from '../assets/svg/PhoneIcon.svg';
import InsuranceIcon from '../assets/svg/InsuranceIcon.svg';

function PatientInfo({ patient }) {
  if (!patient) return <div>Loading...</div>;

  const genderIcon = patient.gender === 'Female' ? FemaleIcon : MaleIcon;

  return (
    <div className="patient-info-container container p-4 rounded shadow">
      <div className="patient-image text-center mb-4">
        <img src={patient.profile_picture} alt="Patient" className="rounded-circle img-fluid" />
      </div>
      <div className="patient-details">
        <h2 className="text-center mb-2">{patient.name}</h2>

        {/* Date of Birth */}
        <div className="detail-item d-flex align-items-center mb-2">
          <img src={BirthIcon} alt="Birth Icon" className="me-3" width="40" height="40" />
          <div>
            <div className="detail-label">Date Of Birth</div>
            <div className="detail-value">{patient.date_of_birth}</div>
          </div>
        </div>

        {/* Gender */}
        <div className="detail-item d-flex align-items-center mb-3">
          <img src={genderIcon} alt="Gender Icon" className="me-3" width="36" height="36" />
          <div>
            <div className="detail-label">Gender</div>
            <div className="detail-value">{patient.gender}</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="detail-item d-flex align-items-center mb-3">
          <img src={PhoneIcon} alt="Phone Icon" className="me-3" width="36" height="36" />
          <div>
            <div className="detail-label">Contact Info.</div>
            <div className="detail-value">{patient.phone_number}</div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="detail-item d-flex align-items-center mb-3">
          <img src={EmergencyIcon} alt="Emergency Icon" className="me-3" width="36" height="36" />
          <div>
            <div className="detail-label">Emergency Contact's</div>
            <div className="detail-value">{patient.emergency_contact}</div>
          </div>
        </div>

        {/* Insurance Provider */}
        <div className="detail-item d-flex align-items-center mb-2">
          <img src={InsuranceIcon} alt="Insurance Icon" className="me-3" width="36" height="36" />
          <div>
            <div className="detail-label">Insurance Provider</div>
            <div className="detail-value">{patient.insurance_type}</div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary w-100 mt-2">Show All Information</button>
    </div>
  );
}

export default PatientInfo;