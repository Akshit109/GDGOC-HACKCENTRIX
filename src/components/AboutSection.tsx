import React from "react";
import { Zap, Code } from "lucide-react";

export const AboutSection: React.FC = () => {
  const IRONMAN_LOGO =
    "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_Mark_III.png";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative">
      {/* Only 2 small floating SVGs for About Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/5 left-1/8 animate-float-slow opacity-8">
          <img
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg"
            alt="Marvel Logo"
            className="w-7 h-7 filter drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-1/4 right-1/7 animate-float-delayed opacity-10">
          <img
            src="https://img.freepik.com/premium-vector/illustration-robot-head_994245-9115.jpg"
            alt="Robot Head"
            className="w-6 h-6 rounded-full filter drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 font-orbitron">
            THE ARMORED INNOVATION ERA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When genius meets justice and power converges with innovation,
            legends are born. Step into Stark-level innovation and build
            futuristic solutions for hours of pure creation and chaos-controlled
            creativity.
          </p>
        </div>

        {/* Single Iron Man Feature Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="group relative bg-gradient-to-br from-red-900/50 to-yellow-900/50 rounded-2xl p-10 border border-yellow-600/30 hover:border-yellow-400 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 to-yellow-600/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <Zap className="w-8 h-8 text-yellow-400" />
                    <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-400 font-orbitron">
                    HACKCENTRIX
                  </h3>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Tech Visionary • Open Innovation
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
From Vibranium networks to world-saving algorithms, the Avengers thrive on collaboration. Open source embodies that same spirit — building powerful solutions together, faster than any hero working alone. Contribute, innovate, and assemble technologies that push the boundaries of what’s possible.
                </p>
                <div className="flex items-center text-sm text-yellow-400">
                  <Code className="w-4 h-4 mr-2" />
                  <span>Google • GDGOC • Open Innovation • Clean Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - CENTERED */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-3xl mx-auto mt-16 justify-center">

          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2 font-orbitron">
              ₹50K
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Prize Pool
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2 font-orbitron">
              8
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Hours
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2 font-orbitron">
              3
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Heros
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2 font-orbitron">
              ∞
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Possibilities
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2 font-orbitron">
              1
            </div>
            <div className="text-gray-400 uppercase tracking-wide">
              Multiverse
            </div>
          </div>

        </div>
        </div>
        

    </section>
  );
};
