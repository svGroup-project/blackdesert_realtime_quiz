import React from "react";
import { Bar, defaults } from "react-chartjs-2";

// 200 => 총 참여인원으로
defaults.scales.linear.max = 120;

function BarChart({ data }) {
  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
    <div className="each_bar">
      <Bar
        width={90}
        height={400}
        data={{
          labels,
          datasets: [
            {
              label: ["user's answer"],
              data: values,
              backgroundColor: ["#ffd344", "#999999", "#540aa8"],
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem) =>
                `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
              title: () => null,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
