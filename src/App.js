import React from 'react';
import './App.css'; // You can style this later

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to My Gym Routine</h1>
        <p>Stay consistent. Stay strong!</p>
      </header>

      <section className="routine-section">
        <h2>Weekly Gym Schedule</h2>
        <ul>
          <li><strong>Day 1:</strong> Quads & Calves</li>
          <li><strong>Day 2:</strong> Chest & Triceps</li>
          <li><strong>Day 3:</strong> Back (Thickness) & Biceps</li>
          <li><strong>Day 4:</strong> Rest</li>
          <li><strong>Day 5:</strong> Shoulders & Chest</li>
          <li><strong>Day 6:</strong> Hamstrings & Back (Width)</li>
          <li><strong>Day 7:</strong> Arms</li>
          <li><strong>Day 8:</strong> Rest</li>
        </ul>
      </section>

      <footer>
        <p>Let's crush it at the gym!</p>
      </footer>
    </div>
  );
}

export default App;
