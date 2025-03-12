import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BloodPressureChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [{
          label: 'Systolic',
          data: [160, 155, 158, 162, 159, 160],
          borderColor: '#E66FD2',
          backgroundColor: '#E66FD2',
          borderWidth: 1,
          pointRadius: 7,
          pointBackgroundColor: '#E66FD2',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 1,
          fill: false,
        }, {
          label: 'Diastolic',
          data: [78, 76, 77, 79, 75, 78],
          borderColor: '#4A90E2',
          backgroundColor: '#4A90E2',
          borderWidth: 1,
          pointRadius: 7,
          pointBackgroundColor: '#4A90E2',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 1,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#F4F0FE',
            },
          },
          x: {
            grid: {
              color: '#F4F0FE',
            },
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        elements: {
          line: {
            tension: 0.4,
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div className="chart-container" style={{ width: '726px', height: '100%', background: '#F4F0FE', borderRadius: '12px', padding: '20px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default BloodPressureChart;