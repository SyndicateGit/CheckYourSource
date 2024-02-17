import React, { useEffect } from 'react';
import '../styles/DisplayData.css';

const DisplayData = () => {
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
    <div>
      {/* Your JSX code here */}
    </div>
  );
};

export default DisplayData;
