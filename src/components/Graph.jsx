// ./components/PieChart.js
import React from "react";
import Chart, { Colors } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "../styles/PieChart.css";

Chart.defaults.color = '#DAD7CD';
Chart.defaults.font.size = 16;
const Graph = (props) => {
    const labels = ["Biomass", "Coal", "Gas", "Geothermal", "Hydro", "Nuclear", "Oil", "Solar", "Wind", "Unknown"];
    let arr = [];
    const chart1 = {
    labels: labels,
    datasets: [
    {
        label: "Energy Consumption MW",
        backgroundColor: [
            '#582f0e',
            '#7f4f24',
            '#936639',
            '#a68a64',
            '#b6ad90',
            '#c2c5aa',
            '#a4ac86',
            '#656d4a',
            '#414833',
            '#333d29'
        ],
        borderColor: [
            '#DAD7CD'
        ],
        data: arr,
        borderWidth: 1,
        fontSize: 1
    },
    ]
    };

    const api_data = props.data;
    arr.push(api_data.powerConsumptionBreakdown.biomass);
    arr.push(api_data.powerConsumptionBreakdown.coal);
    arr.push(api_data.powerConsumptionBreakdown.gas);
    arr.push(api_data.powerConsumptionBreakdown.geothermal);
    arr.push(api_data.powerConsumptionBreakdown.hydro);
    arr.push(api_data.powerConsumptionBreakdown.nuclear);
    arr.push(api_data.powerConsumptionBreakdown.oil);
    arr.push(api_data.powerConsumptionBreakdown.solar);
    arr.push(api_data.powerConsumptionBreakdown.wind);
    arr.push(api_data.powerConsumptionBreakdown.unknown);
    
    const total_consumption = api_data.powerConsumptionBreakdown.biomass + api_data.powerConsumptionBreakdown.coal + api_data.powerConsumptionBreakdown.gas + api_data.powerConsumptionBreakdown.geothermal + api_data.powerConsumptionBreakdown.hydro + api_data.powerConsumptionBreakdown.nuclear + api_data.powerConsumptionBreakdown.oil + api_data.powerConsumptionBreakdown.solar + api_data.powerConsumptionBreakdown.wind + api_data.powerConsumptionBreakdown.unknown;

    const NameValueDisplay = ({ arr, labels }) => {

        return (
          <table className="table">
            <tr>
              <th>Source</th>
              <th>Amount</th>
              <th>Percentage</th>
            </tr>
            {arr.map((a, i) => (
              <tr key={i} className="table-row">
                <td>{labels[i]}</td>
                <td>{a}</td>
                <td>{(100*a/total_consumption).toFixed(2)}</td>
              </tr>
            ))}
          </table>
        );
    };

    return (
    <div id="pieChart">
        <Pie data={chart1} className="pieChart" />
        <div>
            <NameValueDisplay arr={arr} labels={labels} className="values"/>
        </div>
    </div>
    );
};
export default Graph;