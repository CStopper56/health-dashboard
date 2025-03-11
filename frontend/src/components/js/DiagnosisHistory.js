import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Card, Form, Row, Col } from 'react-bootstrap';
import '../css/DiagnosisHistory.css';

function DiagnosisHistory({ diagnosisHistory }) {
  const [timeRange, setTimeRange] = useState('6months');

  if (!diagnosisHistory || !Array.isArray(diagnosisHistory)) {
    return <div>No diagnosis history data available.</div>;
  }

  const filteredData = diagnosisHistory.slice(0, timeRange === '6months' ? 6 : timeRange === '12months' ? 12 : 18);

  const latestSystolic = filteredData[0]?.blood_pressure?.systolic?.value || 0;
  const latestDiastolic = filteredData[0]?.blood_pressure?.diastolic?.value || 0;

  const averageSystolic = (filteredData.reduce((sum, entry) => sum + (entry.blood_pressure?.systolic?.value || 0), 0) / filteredData.length).toFixed(2);
  const averageDiastolic = (filteredData.reduce((sum, entry) => sum + (entry.blood_pressure?.diastolic?.value || 0), 0) / filteredData.length).toFixed(2);

  const formatDate = (month, year) => {
    const date = new Date(`${month} 1, ${year}`);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' }).replace(' ', ', ');
  };

  const chartData = {
    labels: filteredData.map(entry => formatDate(entry.month, entry.year)).reverse(),
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: filteredData.map(entry => entry.blood_pressure?.systolic?.value || 0).reverse(),
        borderColor: 'rgba(230, 111, 210, 1)',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: 'rgba(230, 111, 210, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 7,
        pointHoverRadius: 7,
      },
      {
        label: 'Diastolic Blood Pressure',
        data: filteredData.map(entry => entry.blood_pressure?.diastolic?.value || 0).reverse(),
        borderColor: 'rgba(140, 111, 230, 1)',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: 'rgba(140, 111, 230, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(140, 111, 230, 1)',
        pointRadius: 7,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Manrope',
            size: 12,
          },
          color: '#072635',
        },
      },
      y: {
        beginAtZero: false,
        min: 60,
        grid: {
          display: true,
        },
        ticks: {
          font: {
            family: 'Manrope',
            size: 12,
          },
          color: '#072635',
        },
      },
    },
  };

  return (
    <Card className="dhc_card-container shadow-none">
      <h6 className='title_bp'>Diagnosis History</h6>
      <Card.Body className="dhc_card-body">
        <Row>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={6}>
                <h6><b>Blood Pressure</b></h6>
              </Col>
              <Col xs={12} md={6} className="d-flex justify-content-end">
                <Form.Select
                  className="dhc_filter-dropdown"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  style={{ width: 'auto' }}
                >
                  <option value="6months">Last 6 Months</option>
                  <option value="12months">Last 12 Months</option>
                  <option value="18months">Last 18 Months</option>
                </Form.Select>
              </Col>
            </Row>
            <div className="dhc_chart-container" style={{ height: '190px' }}>
              <Line data={chartData} options={options} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="dhc_vitals-grid">
              <div className="dhc_vital-card_b">
                <p className="dhc_card_title">
                  <span className="dhc_metric-dot dhc_systolic"></span>
                  Systolic
                </p>
                <p className="dhc_metric-value">{latestSystolic} </p>
                <p className="dhc_metric-level">{latestSystolic > 120 ? '▲ Higher than Average' : 'Normal'}</p>
              </div>
              <div className="dhc_vital-card">
                <p className="dhc_card_title">
                  <span className="dhc_metric-dot dhc_diastolic"></span>
                  Diastolic
                </p>
                <p className="dhc_metric-value">{latestDiastolic} </p>
                <p className="dhc_metric-level">{latestDiastolic < 80 ? '▼ Lower than Average' : 'Normal'}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default DiagnosisHistory;