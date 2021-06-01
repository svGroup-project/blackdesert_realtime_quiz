import React from "react";
import { useRecoilValue } from "recoil";
import { userAnswerState } from "../../../../../../recoil/quiz";
import { Bar, defaults } from "react-chartjs-2";

function BarChart({ data }) {
  const userAnswer = useRecoilValue(userAnswerState);
  defaults.scales.linear.max = userAnswer.user.total;

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
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
            y: {
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },

            title: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          labels: {
            display: false,
          },
        }}
      />
    </div>
  );
}

export default BarChart;
