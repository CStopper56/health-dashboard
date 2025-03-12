import React from 'react';
import '../css/Vitals.css';
import RespiratoryRateIcon from '../assets/svg/respiratory_rate.svg';
import TemperatureIcon from '../assets/svg/temperature.svg';
import HeartRateIcon from '../assets/svg/heartbpm.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Vitals({ vitals }) {
  if (!vitals) return <div className="loading">Loading...</div>;

  return (
    <div className="vitals">
      <div className="row">
        <div className="col-md-4">
          <div className="vital-card respiratory">
            <img src={RespiratoryRateIcon} alt="Respiratory Rate" className="icon" />
            <p className="metric-label">Respiratory Rate</p>
            <p className="metric-value">{vitals.respiratory_rate.value} bpm</p>
            <p className="metric-level">{vitals.respiratory_rate.levels}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="vital-card temperature">
            <img src={TemperatureIcon} alt="Temperature" className="icon" />
            <p className="metric-label">Temperature</p>
            <p className="metric-value">{vitals.temperature.value}°F</p>
            <p className="metric-level">{vitals.temperature.levels}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="vital-card heart-rate">
            <img src={HeartRateIcon} alt="Heart Rate" className="icon" />
            <p className="metric-label">Heart Rate</p>
            <p className="metric-value">{vitals.heart_rate.value} bpm</p>
            <p className="metric-level">{vitals.heart_rate.levels}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vitals;