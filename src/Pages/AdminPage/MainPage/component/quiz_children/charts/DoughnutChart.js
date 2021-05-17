import React from "react";
import { Doughnut, defaults } from "react-chartjs-2";

defaults.animation = false;

function DoughnutChart() {
  return (
    <div>
      <Doughnut
        data={{
          lables: [
            "한국어",
            "영어",
            "러시아어",
            "태국어",
            "터키어",
            "포르투갈어",
            "대만어",
            "일본어",
          ],
          datasets: [
            {
              lable: "총참여인원",
              data: [293, 242, 155, 138, 52, 310, 207, 328],
              backgroundColor: [
                "#fad336",
                "#f2637b",
                "#3aa0ff",
                "#5260d6",
                "#7247db",
                "#36cbcb",
                "#3eb7cd",
                "#67d287",
              ],
              hoverOffset: 2,
            },
          ],
        }}
        width={300}
        height={200}
        options={{
          // responsive: true,
          // maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              labels: [
                "#fad336",
                "#f2637b",
                "#3aa0ff",
                "#5260d6",
                "#7247db",
                "#36cbcb",
                "#3eb7cd",
                "#67d287",
              ],
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
