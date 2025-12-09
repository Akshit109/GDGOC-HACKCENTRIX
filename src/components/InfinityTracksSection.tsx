import React, { useState } from 'react';
import { InfinityStoneModal } from './InfinityStoneModal';

// Iron Man Logo (SVG Image)
// You can replace this link with your own logo
const IRONMAN_LOGO = "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_Mark_III.png";

export const InfinityTracksSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const stone = {
    name: "TIME STONE",
    track: "Open Innovation",
    color: "green",
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-900/30 to-emerald-900/30",
    borderColor: "border-green-500/50",
    description:
      "Manipulate time itself with innovative solutions that transcend traditional boundaries and create the future.",
    powers: ["Creative Solutions", "Cross-Domain", "Future Tech", "Breakthrough Ideas"],
    glowColor: "shadow-green-500/50",
    image: IRONMAN_LOGO, // ironman logo
  };

  const handleClaimStone = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="tracks" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-bounce opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-orbitron">
            OPEN INNOVATION
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Power of the TIME STONE — now represented as Iron Man's futuristic innovation.
          </p>
        </div>

        {/* Single Stone Card */}
        <div
          className={`group relative bg-gradient-to-br ${stone.bgGradient} rounded-3xl p-10 border-2 ${stone.borderColor} transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden`}
        >
          {/* Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stone.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>

          {/* Icon (Iron Man) */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${stone.gradient} flex items-center justify-center relative overflow-hidden`}>
                <img src={IRONMAN_LOGO} alt="Iron Man Logo" className="w-20 h-20 object-contain" />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="text-center">
            <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stone.gradient} mb-3 font-orbitron`}>
              {stone.name}
            </h3>
            <h4 className="text-xl font-semibold text-white mb-4">{stone.track}</h4>
            <p className="text-gray-300 mb-6">{stone.description}</p>

            {/* Powers */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stone.powers.map((power, i) => (
                <div
                  key={i}
                  className={`text-xs px-3 py-2 rounded-full bg-gradient-to-r ${stone.gradient} bg-opacity-20 border border-green-500/30 text-green-300`}
                >
                  {power}
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={handleClaimStone}
              className={`w-full py-3 bg-gradient-to-r ${stone.gradient} text-white font-bold rounded-lg transition-all duration-300 hover:scale-105`}
            >
              CLAIM THIS STONE
            </button>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <InfinityStoneModal
            isOpen={modalOpen}
            onClose={closeModal}
            stoneName={stone.name}
            stoneImage={stone.image}
            stoneGradient={stone.gradient}
          />
        )}
      </div>
    </section>
  );
};
