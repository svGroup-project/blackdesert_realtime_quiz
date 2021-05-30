import React from "react";
import { useRecoilState } from "recoil";
import { introDataState } from "../../../../../../recoil/quiz";
import CanvasJSReact from "../../../../../../assets/cnavasjs.react";
var PlatformChart = CanvasJSReact.CanvasJSChart;

function StackedBar() {
  const [introData, setIntroData] = useRecoilState(introDataState);

  const options = {
    height: 200,
    animationEnabled: true,
    theme: "light2",
    labels: {},
    axisY: {
      interval: 100,
      suffix: "%",
      labelFontColor: "white",
      lineThickness: 0,
    },
    data: [
      {
        type: "stackedBar100",
        showInLegend: false,
        dataPoints: [{ y: introData.PC, label: "PC & Console" }],
      },
      {
        type: "stackedBar100",
        showInLegend: false,
        dataPoints: [{ y: introData.Mobile, label: "Mobile" }],
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
