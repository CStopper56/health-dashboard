import React from 'react';

function DoctorInfo({ doctor }) {
  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="doctor-info p-4">
      <div className="d-flex align-items-center">
        <img src={doctor.profile_picture} alt={doctor.name} className="rounded-circle me-3" width="50" height="50" />
        <div>
          <h3>{doctor.name}</h3>
          <p className="text-muted">{doctor.specialization}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;