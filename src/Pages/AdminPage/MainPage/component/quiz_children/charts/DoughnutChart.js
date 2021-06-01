import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useRecoilState } from "recoil";
import { introDataState } from "../../../../../../recoil/quiz";

function DoughnutChart() {
  const [introData, setIntroData] = useRecoilState(introDataState);
  setIntroData(introData);

  return (
    <div>
      <Doughnut
        data={{
          datasets: [
            {
              lable: "총참여인원",
              data: [
                `${introData.ko}`,
                `${introData.en}`,
                `${introData.ru}`,
                `${introData.th}`,
                `${introData.tu}`,
                `${introData.pt}`,
                `${introData.zh}`,
                `${introData.ja}`,
              ],
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
              hoverOffset: 5,
            },
          ],
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
        }}
        options={{
          responsive: true,
          animation: {
            animaeScale: true,
            animaeQotate: true,
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
