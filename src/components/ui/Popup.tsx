import { useEffect, useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setShow(true);

    // small delay for animation trigger
    setTimeout(() => setAnimate(true), 100);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[99999] transition-all duration-500
      ${animate ? "bg-black/80 backdrop-blur-sm opacity-100" : "bg-black/0 opacity-0"}`}
    >
      <div
        className={`bg-white text-black p-6 rounded-2xl shadow-2xl text-center w-[340px] border-2 border-red-500 transform transition-all duration-500
        ${animate ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      >

        <h2 className="text-2xl font-bold text-red-600 mb-3">
          📢 Important Update
        </h2>

        <p className="text-sm mb-3 font-medium">
          AAVISHKAAR 2026 has been{" "}
          <span className="text-red-500 font-bold">postponed</span>.
        </p>

        <p className="text-sm mb-2">
          📅 Previous Dates:{" "}
          <span className="line-through text-gray-500">
            March 27th & 28th
          </span>
        </p>

        <p className="text-base font-bold text-green-600 mb-4">
          ✅ New Dates: May 8th & 9th
        </p>

        <button
          onClick={() => setShow(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          OK
        </button>

      </div>
    </div>
  );
}