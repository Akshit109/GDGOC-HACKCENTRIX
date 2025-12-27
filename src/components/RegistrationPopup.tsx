import { useEffect, useState } from "react";

const RegistrationPopup = () => {
  const targetDate = new Date("2025-12-30T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({});
  const [show, setShow] = useState(true);

  useEffect(() => {
    const countdown = setInterval(() => {
      const diff = targetDate - Date.now();
      if (diff <= 0) {
        clearInterval(countdown);
        setShow(false);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    const autoClose = setTimeout(() => setShow(false), 20000);

    return () => {
      clearInterval(countdown);
      clearTimeout(autoClose);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Background blur overlay */}
      <div className="fixed inset-0 z-40 bg-marvel-blur backdrop-blur-xl" />

      {/* Side badge */}
      <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
        <button
          onClick={() => setShow(false)}
          className="rotate-90 origin-bottom-right bg-gradient-to-r from-blue-600 to-red-600 text-white font-extrabold tracking-widest px-6 py-3 shadow-cinematic hover:brightness-110 transition"
        >
          I’M IN
        </button>
      </div>

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-blue-600 via-purple-700 to-red-600 p-[2px] shadow-marvel-redblue animate-popup">
          <div className="rounded-3xl bg-black/60 backdrop-blur-lg px-8 py-8 text-center">

            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="absolute right-6 top-6 text-white text-3xl font-extrabold hover:text-gray-300"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="font-stranger text-3xl md:text-4xl text-white tracking-wide mb-4 drop-shadow-lg">
              REGISTRATION CLOSING SOON
            </h2>
            <p className="text-gray-300 mb-6">
              Ends on <span className="text-red-400 font-bold">30 December</span>
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 text-center mb-6">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div
                  key={unit}
                  className="rounded-2xl border border-white/20 bg-black/40 py-4 shadow-glow"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white font-bebas">
                    {timeLeft[unit] ?? "00"}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-300">
                    {unit}
                  </div>
                </div>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="w-full rounded-2xl border border-white/40 py-3 font-bold tracking-widest text-white hover:bg-white/20 transition"
            >
              CLOSE
            </button>
          </div>
        </div>

        {/* Big cinematic Stranger Things style text */}
        <h1 className="mt-8 text-center text-3xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 drop-shadow-xl animate-fade font-stranger">
          MARVEL MULTIVERSE × STRANGER THINGS
        </h1>
      </div>
    </>
  );
};

export default RegistrationPopup;
