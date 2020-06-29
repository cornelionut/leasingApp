import React from "react";
import Chart from "chart.js";

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#777";

class BarChart extends React.Component {
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
    this.massPopChart = new Chart(this.canvasRef.current, {
      type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ["Bucuresti", "Brasov", "Cluj", "Craiova", "Arad", "Iasi"],
        datasets: [
          {
            label: "Oferte",
            data: [61594, 18045, 15060, 10619, 10562, 9572],
            //backgroundColor:'green',
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Oferte dealeri",
          fontSize: 22,
        },
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: "#000",
          },
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
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default BarChart;
