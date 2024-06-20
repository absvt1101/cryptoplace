import React, { useEffect, useState } from "react";
import "./LineChart.css";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div className="chart-container">
      <div className="left-div"></div>
      <div className="center-div">
        <Chart chartType="LineChart" data={data} height="100%" legendToggle />
      </div>
      <div className="right-div"></div>
    </div>
  );
};

export default LineChart;
