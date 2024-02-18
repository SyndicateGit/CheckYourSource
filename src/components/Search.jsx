import React from 'react';
import '../styles/Search.css';
const Search = (props) => {
  return (
    <div>
      {<div className="search-box">
        <form type="search-form" action="" id='search-form2' onSubmit={props.submitGeocodeSearch}>
          <input id='geosearch' type="text" name='search'/>
          <button id="search-button">Search</button>
        </form>

    </div>}
    </div>
  );
};

export default Search;
