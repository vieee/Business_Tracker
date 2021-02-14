import "./styleRetailer.scss";

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const CurrentAnalysis = () => {
  // Preparing the chart data
  const chartData = [
    {
      label: "Punjab",
      value: "1180",
    },
    {
      label: "Delhi",
      value: "1888.05",
    },
    {
      label: "Gujarat",
      value: "3230.1",
    },
    {
      label: "Kerala",
      value: "9843.325",
    },
    {
      label: "Odisha",
      value: "16592.293",
    },
    {
      label: "Bihar",
      value: "36540.14",
    },
    {
      label: "Chattisgarh",
      value: "37495.329",
    },
    {
      label: "Andhra Pradesh",
      value: "46337.845",
    },
  ];

  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "State Sales Comparison", //Set the chart caption
        subCaption: "State Sales In Qty. in Metric Ton", //Set the chart subcaption
        xAxisName: "State", //Set the x-axis name
        yAxisName: "Sold Stock (Mt)", //Set the y-axis name
        numberSuffix: "Mt",
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  return (
    <div className="base-container">
      <div className="header">Current Analysis</div>
      <div className="content">
        <ReactFC {...chartConfigs} />
      </div>
    </div>
  );
};

export default CurrentAnalysis;
