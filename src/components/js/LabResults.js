import React from 'react';
import '../css/LabResults.css';

function LabResults({ labResults }) {
  if (!labResults || !Array.isArray(labResults)) {
    return <div>No lab results available.</div>;
  }

  return (
    <div className="lab-results-container">
      <h3 className="title_bp_1">Lab Results</h3>
      <div className="lab-results-list-container">
        <ul className="lab-results-list">
          {labResults.map((result, index) => (
            <li key={index} className="lab-result-item">
              <p className="test-name">{result}</p>
              <button className="download-button" onClick={() => alert(`Downloading ${result}`)}>
                <div className="download-icon"></div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LabResults;