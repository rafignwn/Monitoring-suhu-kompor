import { useEffect, useRef } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { temperatureChartConfig } from "../charts/temperatureChart";
import {
  LineController,
  PointElement,
  LineElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Chart,
  Filler,
} from "chart.js";

Chart.register(
  LineController,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Tooltip,
  Filler
);

export default function Activity() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let lineChart: Chart<"line", number[], number> | null = null;

  useEffect(() => {
    document.title = "Activity - Monitor Suhu";

    if (canvasRef.current) {
      if (lineChart) {
        console.log("destroy");
        lineChart.destroy();
      }

      lineChart = new Chart(canvasRef.current, temperatureChartConfig);
    }

    const unsub = onValue(
      ref(db, "suhu"),
      (snapshot) => {
        const resData = snapshot.val();
        console.log(resData);
        lineChart?.data.datasets.forEach((dataset) => {
          dataset.data = resData;
        });

        lineChart?.update();
      },
      (error) => {
        console.log(error);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="flex justify-start items-center flex-col">
      <h1 className="font-bold text-2xl text-gray-800 mb-10">
        Temperature Activity
      </h1>
      <div className="w-full box-border md:w-10/12">
        <canvas className="w-full md:w-8/12" ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
