import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/DiagnosticList.css';

function DiagnosticList({ diagnosticList }) {
  if (!diagnosticList || !Array.isArray(diagnosticList)) {
    return <div className="alert alert-warning">No diagnostic list available.</div>;
  }

  return (
    <div className="dl_container">
      <h4 className="title_bp_1">Diagnostic List</h4>
      <div className="dl_table-container">
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((diagnostic, index) => (
              <tr key={index}>
                <td>{diagnostic.name}</td>
                <td>{diagnostic.description}</td>
                <td>{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DiagnosticList;