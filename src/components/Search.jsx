import React from 'react';
import '../styles/Search.css';
const Search = (props) => {
  return (
    <div>
      {<div className="search-box">
        <form type="search-form" action="" id='search-form' onSubmit={props.submitSearch}>
          <select name='zone' id="select-province" placeholder="Select a Province" >
              <option value="">Select a Province...</option>
              <option value="CA-AB">Alberta</option>
              <option value="CA-BC">British Columbia</option>
              <option value="CA-MB">Manitoba</option>
              <option value="CA-NB">New Brunswick</option>
              <option value="CA-NL">Newfoundland and Labrador</option>
              <option value="CA-NS">Nova Scotia</option>
              <option value="CA-ON">Ontario</option>
              <option value="CA-PE">Prince Edward Island</option>
              <option value="CA-QC">Quebec</option>
              <option value="CA-SK">Saskatchewan</option>
              <option value="CA-NT">Northwest Territories</option>
              <option value="CA-NU">Nunavut</option>
              <option value="CA-YT">Yukon</option>
          </select>
          <button id="search-button">Search</button>
        </form>
    </div>}
    </div>
  );
};

export default Search;
