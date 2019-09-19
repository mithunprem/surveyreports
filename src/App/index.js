import React from 'react';
import Header from './Header';
import Surveys from './Pages/Surveys';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-3 survey-results">
        <h4 className="mb-3">Survey Results</h4>
        <Surveys />
      </div>
    </div>
  );
}

export default App;
