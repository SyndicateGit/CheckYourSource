import '../styles/DisplayData.css';
import Graph  from './Graph';

const DisplayData = (props) => {
  const data = props.data;
  return (
    <div>
      <div id='carbon-intensity'>Last Updated: {props.lastUpdate}</div>
      <Graph
      data={data}></Graph>
      <div id='total-consumption'>Power Consumption Total: {props.data.powerConsumptionTotal} MW</div>
      <div id='renewable-percentage'>Renewable Percentage: {props.data.renewablePercentage}%</div>
    </div>
  );
};

export default DisplayData;
