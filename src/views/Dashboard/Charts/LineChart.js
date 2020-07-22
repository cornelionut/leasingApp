import React from "react";
import Chart from "chart.js";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  // componentDidUpdate() {
  //   this.myChart.data.labels = this.props.data.map((d) => d.time);
  //   this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
  //   this.myChart.update();
  // }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "line",
      data: {
        labels: [
          "Ian",
          "Feb",
          "Mar",
          "Apr",
          "Mai",
          "Iun",
          "Iul",
          "Aug",
          "Sep",
          "Oct",
          "Noi",
          "Dec",
        ],
        datasets: [
          {
            label: "Total oferte lunar",
            data: [120, 190, 300, 550, 201, 350, 625, 120, 222, 172, 125],
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
          text: "Oferte dealeri in functie de luna",
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
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default LineChart;
