
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function FraudChart() {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Fraud Cases",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20)),
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
}