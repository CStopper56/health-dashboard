import React from 'react';
import '../css/Header.css';
import { ReactComponent as OverviewIcon } from '../assets/svg/home.svg';
import { ReactComponent as PatientsIcon } from '../assets/svg/group.svg';
import { ReactComponent as ScheduleIcon } from '../assets/svg/calendar_today.svg';
import { ReactComponent as MessageIcon } from '../assets/svg/chat_bubble.svg';
import { ReactComponent as TransactionsIcon } from '../assets/svg/credit_card.svg';
import { ReactComponent as Logo } from '../assets/svg/TestLogo.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/settings.svg';
import threeDotsIcon from '../assets/svg/ver_dots.svg';
import doctorImage from '../assets/png/doc.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const doctor = {
    profile_picture: doctorImage,
    name: 'Dr. Jose Simmons',
    specialization: 'General Practitioner'
  };

  return (
    <header className="header container-fluid">
      <div className="row align-items-center w-100">
        <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start">
          <div className="logo">
            <Logo className="logo-svg" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="#overview">
                  <OverviewIcon className="nav-icon" /> Overview
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#patients">
                  <PatientsIcon className="nav-icon" /> Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule">
                  <ScheduleIcon className="nav-icon" /> Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#message">
                  <MessageIcon className="nav-icon" /> Message
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#transactions">
                  <TransactionsIcon className="nav-icon" /> Transactions
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-md-3">
          <div className="doctor-info">
            <img src={doctor.profile_picture} alt="Doctor" className="doctor-image" />
            <div className="doctor-details">
              <p className="doctor-name">{doctor.name}</p>
              <p className="doctor-designation">{doctor.specialization}</p>
            </div>
            <div className="vertical-line"></div>
            <SettingsIcon className="settings-icon" />
            <img src={threeDotsIcon} alt="Three Dots" className="three-dots-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;