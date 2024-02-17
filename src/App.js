import './styles/App.css';
import DisplayData from './components/DisplayData';
import Search from './components/Search';
import temp_data from './temp_data.json';
import React, { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Error404 from './components/Error404';

import zones from './zones.json';

function App() {
  // SEARCH COMPONENT STUFF
  // State to store the search query
  const[query, setQuery] = useState('CA-ON');
  
  // DISPLAY DATA COMPONENT STUFF
  // Json data to be passed to display data component
  const [data, setData] = useState(temp_data);

    // Rerun api call when query updates
    useEffect(() => {
      fetchData(query);
    }, [query]);

  // Updates the search query with zone code based on selected zone
  function submitSearch(e) {
    e.preventDefault();
    var zone = document.getElementById('select-province').value;
    setQuery(zone);
  }


  // Fetches power breakdown data from the electricity map API based on search zone code.
  function fetchData(query) {
    fetch(`https://api.electricitymap.org/v3/power-breakdown/latest?zone=${query}`)
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

  if(data.error){
    return (
    <div className="App">
      <Introduction/>
      <Search submitSearch={submitSearch}/>
      <Error404/>
    </div>);
  }else{
    console.log(data);
    return (
      <div className="App">
        <Introduction/>
        <Search submitSearch={submitSearch}/>
        <div id="zone-country">{zones[data.zone].countryName}</div>
        <div id="zone-name">{zones[data.zone].zoneName}</div>
        <DisplayData 
        data = {data}/>
      </div>
    );
  }

  
}

export default App;
