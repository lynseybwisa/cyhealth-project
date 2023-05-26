// import React, { useState, Component, useEffect } from 'react';
// import ApexCharts from 'apexcharts';
// import ReactApexChart from "react-apexcharts";
// import Chart from "react-apexcharts"

// const History = (props) => {
//     // const theme = useTheme();
  
//     // const chartData = {
//     //   chart: {
//     //     type: "realtime",
//     //     id: "apexchart-example",
//     //     foreColor: "black"
//     //   },
//     //   xaxis: {
//     //     categories: [12, 1, 2, 3, 4, 5, 6, 7, 8]
//     //   },
//     //   fill: {
//     //     type: "gradient",
//     //     gradient: {
//     //       shade: "light",
//     //       type: "horizontal",
//     //       shadeIntensity: 0.5,
//     //       gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//     //       inverseColors: true,
//     //       opacityFrom: 1,
//     //       opacityTo: 1,
//     //       stops: [0, 50, 100]
//     //       // colorStops: []
//     //     }
//     //   },
//     //   legend: {
//     //     // position: '',
//     //     width: 400
//     //     // position: 'top',
//     //   },
//     //   series: [
//     //     {
//     //       name: "Distance Traveled",
//     //       type: "column",
//     //       data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160]
//     //     },
//     //     {
//     //       name: "Time Traveled",
//     //       type: "line",
//     //       data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16]
//     //     }
//     //   ]
//     // };

// //     const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);

// //   useEffect(() => {
// //     setInterval(() => {
// //       const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
// //       let array = [...data, val];
// //       array.shift();
// //       updateData(array);
// //     }, 2000);
// //   });
  
// const series = [
//     {
//       name: "xx",
//       data: props.data
//     }
//   ];
//   const options = {
//     chart: {
//       height: 350,
//       type: "line",
//       zoom: {
//         enabled: true
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth"
//     },
//     colors: ["#210124"],
//     fill: {
//       type: "gradient",
//       gradient: {
//         shadeIntensity: 1,
//         inverseColors: true,
//         gradientToColors: ["#DB162F"],
//         opacityFrom: 1,
//         opacityTo: 1,
//         type: "vertical",
//         stops: [0, 30]
//       }
//     }
//   }
//     // return <ReactApexChart options={chartData} series={chartData.series} />;
//     return <Chart options={options} series={series} type="line" height={350} />
//   };

//   export default History

import React from "react";
import Chart from "react-apexcharts";

export default function ApexChart(props) {
  const series = [
    {
      name: "xx",
      data: props.data
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    colors: ["#210124"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ["#DB162F"],
        opacityFrom: 1,
        opacityTo: 1,
        type: "vertical",
        stops: [0, 30]
      }
    }
  };
  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}



      