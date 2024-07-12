import React from "react";
import ReactApexChart from "react-apexcharts";

const SimpleDonut = () => {
  const options = {
    series: [33, 55, 12],
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false, // This hides the data labels
      },
      legend: {
        show: true,
        position: "bottom",
        formatter: function (seriesName, opts) {
          return (
            seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
      },
      labels: ["Facebook", "Youtube", "Direct Search"], // Names of the series
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div
      className="chart-container"
      style={{ position: "relative", display: "inline-block" }}
    >
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="donut"
        height="400"
      />
      <div
        className="icon-container"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px", // Adjusted to fit well within the donut chart
          height: "80px", // Adjusted to fit well within the donut chart
          backgroundColor: "skyblue",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i
          className="fas fa-graduation-cap"
          style={{ color: "white", fontSize: "32px" }} // Adjusted size to fit within the blue circle
        ></i>
      </div>
    </div>
  );
};

export default SimpleDonut;
