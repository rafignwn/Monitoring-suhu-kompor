import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Toaster } from "react-hot-toast";
import fotoKuwali1 from "../assets/kuwali-1.jpeg";
import fotoKuwali2 from "../assets/kuwali-2.jpeg";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - Monitor Suhu dan Kelembaban";
  }, []);

  return (
    <div>
      <Toaster />
      <h1 className="text-amber-700 text-3xl font-bold mb-10 text-center">
        Selamat datang di website monitoring suhu dan kelembaban kuwali pemasak
        bubur tahu
      </h1>
      <div className="grid mx-8 grid-cols-1 gap-8 md:grid-cols-2">
        <div className="w-full relative aspect-square border-3 border-amber-400 overflow-hidden rounded-lg">
          <h4 className="absolute uppercase top-4 left-4 right-4 text-center font-semibold text-amber-50 rounded-md text-2xl bg-amber-700 px-4 py-1">
            Foto Kuwali Tahu
          </h4>
          <img
            className="object-cover w-full h-full"
            src={fotoKuwali1}
            alt="Gambar Alat"
          />
        </div>

        <div className="w-full relative aspect-square border-3 border-amber-400 overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={fotoKuwali2}
            alt="Gambar Alat"
          />
        </div>
      </div>
    </div>
  );
}
