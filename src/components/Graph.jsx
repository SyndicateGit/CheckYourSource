// ./components/PieChart.js
import React from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
labels: labels,
datasets: [
  {
  label: "My First dataset",
  backgroundColor: "rgb(255, 99, 132)",
  borderColor: "rgb(0,0,255)",
  data: [0, 10, 5, 2, 20, 30, 45],
  },
 ],
};
const Graph = () => {
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
    <Pie data={data} />
   </div>
  );
};
export default Graph;