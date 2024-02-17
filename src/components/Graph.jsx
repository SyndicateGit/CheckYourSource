// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "../styles/PieChart.css";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
labels: labels,
datasets: [
  {
    label: "My First dataset",
    /* backgroundColor: "rgb(255, 99, 132)", */
    backgroundColor: ["#007D9C",
    "#244D70",
    "#D123B3",
    "#F7E018",
    "#fff21",
    "#FE452A"],
    borderColor: "rgb(0,0,255)",
    data: [0, 10, 5, 20, 30, 45],
  },
 ]
};
const Graph = () => {
    /* const data = props.data;
    console.log(data); */

return (
  <div id="pieChart">
    <Pie data={data} />
   </div>
  );
};
export default Graph;