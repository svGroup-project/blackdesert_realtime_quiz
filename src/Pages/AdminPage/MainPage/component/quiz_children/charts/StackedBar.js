import React from "react";
import CanvasJSReact from "../../../../../../assets/cnavasjs.react";
var PlatformChart = CanvasJSReact.CanvasJSChart;

function StackedBar() {
  const options = {
    height: 300,
    animationEnabled: true,
    theme: "light2",
    labels: {},
    axisY: {
      interval: 100,
      suffix: "%",
      labelFontColor: "white",
      lineClolr: "white",
      lineThickness: 0,
    },
    data: [
      {
        type: "stackedBar100",
        showInLegend: false,
        name: "PC&Console",
        dataPoints: [{ y: 600, label: "PC & Console" }],
      },
      {
        type: "stackedBar100",
        showInLegend: false,
        name: "Mobile",
        dataPoints: [{ y: 400, label: "Mobile" }],
      },
    ],
  };

  return (
    <div>
      <PlatformChart options={options} />
    </div>
  );
}

export default StackedBar;
