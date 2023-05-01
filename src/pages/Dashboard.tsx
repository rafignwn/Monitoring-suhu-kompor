import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Toaster } from "react-hot-toast";

export default function Dashboard() {
  const [temperature, setTemperature] = useState<number>(0);

  useEffect(() => {
    document.title = "Dashboard - Monitor Suhu";

    const unsub = onValue(
      ref(db, "suhu"),
      (snapshot) => {
        const data: Array<number> = snapshot.val();
        setTemperature(data[data.length - 1]);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div>
      <Toaster />
      <h1 className="text-amber-700 text-3xl font-bold mb-10">Dashboard</h1>

      <div className="flex flex-col items-center justify-center mt-20 w-fit">
        <span className="text-amber-700 text-2xl px-4 py-2 bg-amber-200 rounded-xl uppercase font-semibold mb-8">
          REALTIME DATA
        </span>
        <div className="grid grid-cols-2 w-fit">
          <div className="flex flex-col items-center justify-center border-2 border-amber-500 w-72 h-44 rounded-full mr-4">
            <span className="text-3xl mb-4 font-bold text-amber-500">Suhu</span>
            <p className="text-4xl font-bold text-amber-600 border border-amber-400 bg-white rounded-xl px-6 py-4">{`${temperature} °C`}</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-amber-500 w-72 h-44 rounded-full ml-4">
            <span className="text-3xl mb-4 font-bold text-amber-500">
              Kelembaban
            </span>
            <p className="text-4xl font-bold text-amber-600 border border-amber-400 bg-white rounded-xl px-6 py-4">{`${56} %`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
