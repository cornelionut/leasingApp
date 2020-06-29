import React from "react";
import Chart from "chart.js";

class MixedChart extends React.Component {
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
    var labels = [
      "Luni",
      "Marti",
      "Miercuri",
      "Joi",
      "Vineri",
      "Sambata",
      "Duminica",
    ];
    var incasari = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    var clienti = [201, 140, 80, 150, 190, 170, 202];
    this.mixChart = new Chart(this.canvasRef.current, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            type: "line",
            label: "Incasari",
            data: incasari,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            yAxisID: "incasari",
          },
          {
            label: "Clienti",
            data: clienti,
            borderColor: "rgba(0, 0, 0, 0)",
            backgroundColor: "rgba(192, 75, 192, 0.5)",
            yAxisID: "clienti",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Evolutie incasari si numar clienti",
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
              id: "incasari",
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: "Incasari (U$)",
              },
            },
            {
              id: "clienti",
              position: "right",
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: "Clienti",
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

export default MixedChart;
