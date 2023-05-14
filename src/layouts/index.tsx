import { useEffect, useState, useRef, useContext } from "react";
import colors from "tailwindcss/colors";
import "./index.css";
import { HamburgerButton } from "@icon-park/react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function MainLayout() {
  const [show, setShow] = useState<boolean>(true);
  const btnShowRef = useRef<HTMLButtonElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { currentUser } = useContext(AuthContext);

  function handleOutsideClick(e: MouseEvent) {
    if (
      !btnShowRef.current?.contains(e.target as Node) &&
      !sidebarRef.current?.contains(e.target as Node)
    ) {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="layout_container">
      <div className="topbar bg-yellow-500 flex justify-between items-center px-5 py-2">
        <h4 className="text-yellow-800 tracking-widest text-lg font-bold">
          Welcome back {currentUser?.name.split(" ")[0]}!
        </h4>
        <button
          onClick={() => setShow((prev) => !prev)}
          ref={btnShowRef}
          className="md:hidden rounded-md grid place-items-center w-10 h-10 bg-yellow-400"
        >
          <HamburgerButton size={20} fill={colors.yellow[800]} />
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`sidebar h-full md:relative z-50 fixed right-0 ${
          show ? "w-56" : "w-0"
        } transition-width duration-200 md:w-56 ease-in-out bg-yellow-600`}
      >
        <Sidebar handleClose={() => setShow(false)} />
      </div>
      <main className="overflow-y-auto">
        <div className="content bg-yellow-100 p-3 md:p-8">
          <Outlet />
        </div>
        <footer className="bg-yellow-700 flex items-center px-5 text-yellow-100 font-medium">
          <h1>&copy; Nama - Nim 🎈 TA 2023</h1>
        </footer>
      </main>
    </div>
  );
}
