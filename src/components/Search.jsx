import React from 'react';

const Search = () => {
  return (
    <div>
      {<div class="search-box">
        <h1> Explore Energy Usage by Location</h1>
        <select id="select-province" placeholder="Select a Province">
            <option value="">Select a Province...</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
        </select>
        <button id="search-button">Search</button>
    </div>}
    </div>
  );
};

export default Search;
