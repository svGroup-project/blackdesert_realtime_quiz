import React from "react";
import { useRecoilState } from "recoil";
import { userAnswerState, introDataState } from "../../../../../../recoil/quiz";
import { Bar, defaults } from "react-chartjs-2";

function BarChart({ data }) {
  const [userAnswer, setUserAnswer] = useRecoilState(userAnswerState);
  console.log(userAnswer.user.total);
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
              title: {
                display: false,
              },
            },
          },
          scales: {
            // display: false,
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
