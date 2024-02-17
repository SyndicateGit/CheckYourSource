import '../styles/DisplayData.css';
import Graph  from './Graph';

const DisplayData = (props) => {
  const data = props.data;
  return (
    <div>
      <Graph
      data={data}></Graph>
    </div>
  );
};

export default DisplayData;
