import React from "react";
import Chart from "chart.js";

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#777";

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  // componentDidUpdate() {
  //   this.myChart.data.labels = this.props.data.map((d) => d.label);
  //   this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
  //   this.myChart.update();
  // }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "doughnut",
      data: {
        labels: ["ALFA ROMEO", "BMW", "AUDI", "FORD", "DACIA", "VW"],
        datasets: [
          {
            label: "Oferte in functie de sedii dealeri",
            data: [175, 425, 75, 380, 320, 100],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Oferte dealeri in functie de marca",
          fontSize: 22,
        },
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: "#000",
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          },
        },
        tooltips: {
          enabled: true,
        },
      },
      // options: {
      //   maintainAspectRatio: false,
      // },
      // data: {
      //   labels: this.props.data.map((d) => d.label),
      //   datasets: [
      //     {
      //       data: this.props.data.map((d) => d.value),
      //       backgroundColor: this.props.colors,
      //     },
      //   ],
      // },
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default DoughnutChart;
