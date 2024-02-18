import './styles/App.css';
import DisplayData from './components/DisplayData';
import Search from './components/Search';
import temp_data from './temp_data.json';
import React, { useState, useEffect } from 'react';
import Error404 from './components/Error404';

import './styles/Introduction.css';

import zones from './zones.json';

function App() {
  const geocode = "1r7AiuCkuhyjiBR9xditOIKaT0Xzlhby";
  // SEARCH COMPONENT STUFF
  // State to store the search query
  const[query, setQuery] = useState('CA-ON');
  
  // For searching based on longitude latitude [lat, long]
  const[coordinates, setCoordinates] = useState([42.3149, -83.0364]);

  // DISPLAY DATA COMPONENT STUFF
  // Json data to be passed to display data component
  const [data, setData] = useState(temp_data);

  const[carbonIntensity, setCarbonIntensity] = useState(0);

    // Rerun api call when query updates
    useEffect(() => {
      fetchData(query);
      fetchCarbonIntensity(query);
    }, [query]);

    useEffect(() => {
      console.log(coordinates);
      fetchDataCoordinates(coordinates);
    }, [coordinates]);

  // Updates the search query with zone code based on selected zone
  function submitSearch(e) {
    e.preventDefault();
    var zone = document.getElementById('select-province').value;
    setQuery(zone);
  }

  function submitGeocodeSearch(e){
    e.preventDefault();
    var search = document.getElementById('geosearch').value;
    fetchGeocode(search);
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

  function fetchDataCoordinates(coordinates){
    fetch(`https://api.electricitymap.org/v3/power-breakdown/latest?lat=${coordinates[0]}&lon=${coordinates[1]}`)
      .then((response) => response.json(), {
        mode: 'cors',
        header:{
          'auth-token': '6jTh4iOxCZaYk',
        }
      })
      .then((data) => {
        console.log(data)
        setData(data);
      });
  }

  
  function fetchCarbonIntensity(query){
    fetch(`https://api.electricitymap.org/v3/carbon-intensity/latest?zone=${query}`)
      .then((response) => response.json(), {
        mode: 'cors',
        header:{
          'auth-token': '6jTh4iOxCZaYk',
        }
      })
      .then((data) => {
        setCarbonIntensity(data.carbonIntensity);
      });
  }

  async function fetchGeocode(query){
    var parsedQuery = ' ' + query;
    const response = await fetch(`https://api.geocodify.com/v2/geocode?api_key=${geocode}&q=900${parsedQuery}`);
    const data = await response.json();
    const longitude = data.response.features[0].geometry.coordinates[0];
    const latitude = data.response.features[0].geometry.coordinates[1];
    setCoordinates([latitude, longitude]);
  }

  if(data.error){
    return (
    <div className="App">
          <div class = "Intro">
      <h1>Where Does your Energy Come From?</h1>
      <Search submitSearch={submitSearch}/>
      <p>In a world where we consume a lot of energy it is important to know where it comes from </p>
      <p>Find out where your energy comes from below! </p>
    </div>
      <Error404/>
    </div>);
  }else{
    return (
      <div className="App">
            <div class = "Intro">
      <h1>Where Does your Energy Come From?</h1>
      <Search submitSearch={submitSearch} submitGeocodeSearch = {submitGeocodeSearch}/>
      <p>In a world where we consume a lot of energy it is important to know where it comes from </p>
      <p>Find out where your energy comes from below! </p>

    </div>
        <div className='accuracy-msg'>
          <p>**Closest Location With Available DataSet**</p>
        </div>
        <h2 id="zone-country">{zones[data.zone].countryName}</h2>
        <h2 id="zone-name">{zones[data.zone].zoneName}</h2>
        <DisplayData 
        data = {data}
        carbonIntensity={carbonIntensity}/>
      </div>
    );
  }

  
}

export default App;
