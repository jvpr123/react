import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointsMaxValue = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointsMaxValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
