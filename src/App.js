import Graph from './components/Graph';
import './styles/App.css';
import DisplayData from './components/DisplayData';
import Search from './components/Search';

import React, { useEffect } from 'react';

function App() {
    // Used to test display data component.
  // Actual fetch done in App.js and passed as props to this component.
  function fetchData() {
    fetch('https://api.electricitymap.org/v3/power-breakdown/latest?lat=48.8566&lon=2.3522')
      .then((response) => response.json(), {
        mode: 'cors',
        header:{
          'auth-token': '6jTh4iOxCZaYk',
        }
      })
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Search/>
      <DisplayData/>
    </div>
  );
}

export default App;
