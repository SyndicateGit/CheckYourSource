import Graph from './components/Graph';
import './styles/App.css';
import DisplayData from './components/DisplayData';
import Search from './components/Search';

import React, { useState, useEffect } from 'react';

function App() {
  // SEARCH COMPONENT STUFF
  // State to store the search query
  const[query, setQuery] = useState('CA-ON');

  // Updates the search query with zone code based on selected zone
  function submitSearch(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  // DISPLAY DATA COMPONENT STUFF
  // Json data to be passed to display data component
  const [data, setData] = useState(null);

  // Fetches power breakdown data from the electricity map API based on search zone code.
  function fetchData(query) {
    fetch('https://api.electricitymap.org/v3/power-breakdown/latest?lat=48.8566&lon=2.3522')
      .then((response) => response.json(), {
        mode: 'cors',
        header:{
          'auth-token': '6jTh4iOxCZaYk',
        }
      })
      .then((data) => {
        setData(data);
      });
  }

  // Rerun api call when query updates
  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Search/>
      <DisplayData 
      data = {data}/>
    </div>
  );
}

export default App;
