import React from 'react';
import { Code } from 'lucide-react';

export const TracksSection: React.FC = () => {
  const track = {
    icon: Code,
    title: "OPEN SOURCE INNOVATION",
    subtitle: "Open Source Track",
    description: "Break the boundaries and create something unprecedented. Contribute to the open-source community and build solutions that empower developers worldwide. The multiverse is your playground for innovation.",
    color: "purple",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-900/20 to-indigo-900/20",
    borderColor: "border-purple-500/30 hover:border-purple-400",
    character: "Marvel Universe"
  };

  const IconComponent = track.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Small floating SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/8 animate-float-slow opacity-8">
          <img 
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg" 
            alt="Marvel Logo" 
            className="w-6 h-6 filter drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 font-orbitron">
            YOUR INNOVATION BATTLEGROUND
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate open-source challenge. Build, innovate, and contribute to solutions 
            that will shape the future of technology across the multiverse.
          </p>
        </div>

        {/* Single Track Card - Centered */}
        <div className="flex justify-center">
          <div 
            className={`group relative bg-gradient-to-br ${track.bgGradient} rounded-2xl p-12 border ${track.borderColor} transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden max-w-2xl w-full`}
          >
            {/* Hover Effect Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
            
            {/* Floating Icon Background */}
            <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <IconComponent className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              {/* Track Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${track.gradient} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 bg-${track.color}-400 rounded-full blur-lg opacity-40 animate-pulse`}></div>
                </div>
              </div>

              {/* Track Info */}
              <div className="text-center">
                <h3 className={`text-3xl md:text-4xl font-bold text-${track.color}-400 mb-3 font-orbitron`}>
                  {track.title}
                </h3>
                <h4 className="text-xl font-semibold text-white mb-6">
                  {track.subtitle}
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {track.description}
                </p>

                {/* Character Badge */}
                <div className="flex justify-center mb-8">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${track.color}-500/20 border border-${track.color}-500/30`}>
                    <span className={`text-sm text-${track.color}-400 font-semibold`}>
                      Powered by {track.character}
                    </span>
                  </div>
                </div>

                
                {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className={`px-8 py-4 bg-gradient-to-r ${track.gradient} text-white font-bold rounded-lg transform transition-transform duration-200 hover:scale-105 text-lg`}>
                    ENTER THE ARENA
                  </button>
                </div> */}
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`absolute inset-0 rounded-2xl border-2 border-${track.color}-400 animate-pulse`}></div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              WHAT YOU'LL BUILD
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Open Source Tools</h4>
                  <p className="text-gray-300 text-sm">Create libraries, frameworks, and tools for the developer community</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-indigo-400 font-semibold mb-1">Community Impact</h4>
                  <p className="text-gray-300 text-sm">Build solutions that solve real-world problems for developers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">Innovation First</h4>
                  <p className="text-gray-300 text-sm">Push boundaries and create unprecedented technology solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
