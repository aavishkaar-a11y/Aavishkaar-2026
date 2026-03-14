import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden text-center">

      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-400/20 blur-[180px] rounded-full animate-pulse"></div>

      {/* Floating particles */}
      <div className="absolute top-16 left-16 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-24 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>

      <div className="relative z-10 px-6">

        {/* Animated 404 */}
        <h1 className="text-8xl md:text-[150px] font-extrabold text-yellow-400 tracking-widest animate-float drop-shadow-[0_0_25px_rgba(250,204,21,0.9)]">
          404
        </h1>

        {/* Message */}
        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Oops! The page you're looking for disappeared.
        </p>

        <p className="text-gray-500 mt-2">
          Maybe it got lost in AAVISHKAAR.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-10 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-lg hover:scale-110 hover:bg-yellow-300 transition-all duration-300"
        >
          Go Back Home
        </Link>

      </div>

      {/* Custom animation */}
      <style>
        {`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        `}
      </style>

    </div>
  );
};

export default NotFound;