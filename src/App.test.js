import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './App.css';

const App = () => {
  const [variety, setVariety] = useState('');
  const [ripeness, setRipeness] = useState('');
  const [watermelonData, setWatermelonData] = useState([]);

  useEffect(() => {
    const staticData = [
      { variety: 'Crimson', ripeness: 'Ripe', timestamp: '2024-05-16 09:12:23' },
      { variety: 'Sugar Baby', ripeness: 'Unripe', timestamp: '2024-05-16 11:14:52' },
      { variety: 'Crimson', ripeness: 'Overripe', timestamp: '2024-05-16 12:54:21' },
      { variety: 'Sugar Baby', ripeness: 'Ripe', timestamp: '2024-05-16 13:12:52' },
      { variety: 'Crimson', ripeness: 'Unripe', timestamp: '2024-05-16 10:45:21' },
      { variety: 'Sugar Baby', ripeness: 'Unripe', timestamp: '2024-05-17 11:42:16' },
      { variety: 'Crimson', ripeness: 'Overripe', timestamp: '2024-05-17 12:01:41' },
      { variety: 'Sugar Baby', ripeness: 'Ripe', timestamp: '2024-05-17 13:25:15' }
    ];
    setWatermelonData(staticData);
  }, []);

  useEffect(() => {
    try {
      const varietyData = {
        labels: ['Crimson', 'Sugar Baby'],
        datasets: [{
          label: 'Watermelon Variety',
          data: [4, 4],
          backgroundColor: [
            'rgba(255, 99, 132, 2)',
            'rgba(54, 162, 235, 2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      const ripenessData = {
        labels: ['Unripe', 'Ripe', 'Overripe'],
        datasets: [{
          label: 'Watermelon Ripeness',
          data: [3, 3, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      const varietyCtx = document.getElementById('varietyChart').getContext('2d');
      const ripenessCtx = document.getElementById('ripenessChart').getContext('2d');
  
      new Chart(varietyCtx, {
        type: 'pie',
        data: varietyData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          }
        }
      });
  
      new Chart(ripenessCtx, {
        type: 'pie',
        data: ripenessData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          }
        }
      });
    } catch (error) {
      console.error("Error initializing charts:", error);
    }
  }, []);  

  return (
    <div className="App">
      <h1>Watermelon Ripeness Result</h1>
      <form id="watermelon-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="variety">Variety:</label>
          <select id="variety" value={variety} onChange={(e) => setVariety(e.target.value)}>
            <option value="">Choose Variety of Watermelon</option>
            <option value="Crimson">Crimson</option>
            <option value="Sugar-Baby">Sugar Baby</option>
          </select>
        </div>
        <div>
          <label htmlFor="ripeness">Ripeness:</label>
          <select id="ripeness" value={ripeness} onChange={(e) => setRipeness(e.target.value)}>
            <option value="">Choose Ripeness of Watermelon</option>
            <option value="Unripe">Unripe</option>
            <option value="Ripe">Ripe</option>
            <option value="Overripe">Overripe</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="table-container">
        <table id="watermelon-table">
          <thead>
            <tr>
              <th>Count</th>
              <th>Variety</th>
              <th>Ripeness</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {watermelonData.map((data, index) => (
              <tr key={index} className={data.ripeness === 'Ripe' ? 'added' : ''}>
                <td>{index + 1}</td>
                <td>{data.variety}</td>
                <td>{data.ripeness}</td>
                <td>{data.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chart-container">
        <canvas id="varietyChart"></canvas>
        <canvas id="ripenessChart"></canvas>
      </div>
    </div>
  );
}

export default App;
