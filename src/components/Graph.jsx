// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "../styles/PieChart.css";

const labels = ["coal", "wind", "gas", "hydro", "solar", "nuclear"];
let arr = [];
const data = {
labels: labels,
datasets: [
  {
    label: "energy percentage",
    backgroundColor: ["#007D9C",
    "#244D70",
    "#D123B3",
    "#F7E018",
    "#fff21",
    "#FE452A"],
    borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
    ],
    data: arr,
    borderWidth: 1,
  },
 ]
};
const Graph = (props) => {
    const api_data = props.data;
    /* data.datasets[0].data = api_data.powerConsumptionBreakdown.coal; */
    console.log(api_data);

return (
  <div id="pieChart">
    <Pie data={data} />
   </div>
  );
};
export default Graph;