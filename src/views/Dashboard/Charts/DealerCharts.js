import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import BarChart from "./BarChart.js";
import DoughnutChart from "./DoughnutChart.js";
import LineChart from "./LineChart.js";
import MixedChart from "./MixedChart.js";

export default function DealerCharts() {
  return (
    <GridContainer>
      <GridItem xs={6} sm={6} md={6}>
        <BarChart />
      </GridItem>

      <GridItem xs={6} sm={6} md={6}>
        <DoughnutChart />
      </GridItem>

      <GridItem xs={6} sm={6} md={6} style={{ marginTop: 80 }}>
        <LineChart />
      </GridItem>

      <GridItem xs={6} sm={6} md={6} style={{ marginTop: 80 }}>
        <MixedChart />
      </GridItem>
    </GridContainer>
  );
}
