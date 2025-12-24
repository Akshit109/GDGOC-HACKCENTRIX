import React from "react";
import { Clock, Calendar, MapPin, Users, Trophy, FileText, Award } from "lucide-react";

export const ScheduleSection: React.FC = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        border: "border-blue-500/30 hover:border-blue-400",
        bg: "from-blue-500 to-blue-600",
        text: "text-blue-400",
        glow: "from-blue-500/10 to-blue-600/10",
        node: "from-blue-400 to-blue-600",
        ping: "bg-blue-400",
      },
      yellow: {
        border: "border-yellow-500/30 hover:border-yellow-400",
        bg: "from-yellow-500 to-yellow-600",
        text: "text-yellow-400",
        glow: "from-yellow-500/10 to-yellow-600/10",
        node: "from-yellow-400 to-yellow-600",
        ping: "bg-yellow-400",
      },
      red: {
        border: "border-red-500/30 hover:border-red-400",
        bg: "from-red-500 to-red-600",
        text: "text-red-400",
        glow: "from-red-500/10 to-red-600/10",
        node: "from-red-400 to-red-600",
        ping: "bg-red-400",
      },
      green: {
        border: "border-green-500/30 hover:border-green-400",
        bg: "from-green-500 to-green-600",
        text: "text-green-400",
        glow: "from-green-500/10 to-green-600/10",
        node: "from-green-400 to-green-600",
        ping: "bg-green-400",
      },
      purple: {
        border: "border-purple-500/30 hover:border-purple-400",
        bg: "from-purple-500 to-purple-600",
        text: "text-purple-400",
        glow: "from-purple-500/10 to-purple-600/10",
        node: "from-purple-400 to-purple-600",
        ping: "bg-purple-400",
      },
      orange: {
        border: "border-orange-500/30 hover:border-orange-400",
        bg: "from-orange-500 to-orange-600",
        text: "text-orange-400",
        glow: "from-orange-500/10 to-orange-600/10",
        node: "from-orange-400 to-orange-600",
        ping: "bg-orange-400",
      },
      cyan: {
        border: "border-cyan-500/30 hover:border-cyan-400",
        bg: "from-cyan-500 to-cyan-600",
        text: "text-cyan-400",
        glow: "from-cyan-500/10 to-cyan-600/10",
        node: "from-cyan-400 to-cyan-600",
        ping: "bg-cyan-400",
      },
      pink: {
        border: "border-pink-500/30 hover:border-pink-400",
        bg: "from-pink-500 to-pink-600",
        text: "text-pink-400",
        glow: "from-pink-500/10 to-pink-600/10",
        node: "from-pink-400 to-pink-600",
        ping: "bg-pink-400",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const scheduleItems = [
    {
      time: "5th - 30th December",
      title: "REGISTRATION & TEAM FORMATION",
      description: "Register and form your teams (5th Dec, 12:00 AM - 30th Dec, 11:59 PM IST)",
      icon: Users,
      color: "blue",
      day: "Phase 1",
    },
    {
      time: "26th - 1st January",
      title: "PPT SUBMISSION ROUND",
      description: "Submit your project presentations (26th Dec, 12:00 AM - 31st Dec, 11:59 PM IST)",
      icon: FileText,
      color: "green",
      day: "Phase 2",
    },
    {
      time: "2nd January",
      title: "INITIAL EVALUATIONS",
      description: "Judging panel evaluates all submissions (1st Jan, 05:30 AM IST)",
      icon: Clock,
      color: "orange",
      day: "Phase 2",
    },
    {
      time: "3rd January",
      title: "PPT ROUND RESULTS",
      description: "Selected teams for prototype round announced (2nd Jan, 12:00 AM - 11:59 PM IST)",
      icon: Trophy,
      color: "yellow",
      day: "Phase 2",
    },
    {
      time: "4th - 10th January",
      title: "PROTOTYPE ROUND",
      description: "Shortlisted teams build and submit prototypes (4th Jan, 12:00 AM - 10th Jan, 11:59 PM IST)",
      icon: Users,
      color: "purple",
      day: "Phase 3",
    },
    {
      time: "10th - 12th January",
      title: "PROTOTYPE EVALUATION",
      description: "Expert panel evaluates all prototypes (10th Jan, 12:00 AM - 12th Jan, 11:59 PM IST)",
      icon: Clock,
      color: "cyan",
      day: "Phase 3",
    },
    {
      time: "13th January",
      title: "TOP 20 TEAMS ANNOUNCEMENT",
      description: "Initial top 20 finalist teams revealed (13th Jan, 12:00 AM - 11:59 PM IST)",
      icon: Award,
      color: "pink",
      day: "Phase 3",
    },
    {
      time: "17th January",
      title: "FINAL OFFLINE ROUND",
      description: "8-hour final hackathon at GLA University (17th Jan, 12:00 AM - 11:59 PM IST)",
      icon: MapPin,
      color: "red",
      day: "Final Phase",
    },
    {
      time: "17th January",
      title: "TOP 3 ANNOUNCEMENT",
      description: "Winners announced! (17th Jan, 05:30 AM IST)",
      icon: Trophy,
      color: "yellow",
      day: "Final Phase",
    },
  ];

  const days = ["Phase 1", "Phase 2", "Phase 3", "Final Phase"];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-orbitron">
            MISSION TIMELINE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Multi-stage competition spanning from December to January. Follow the
            complete journey from registration to the final 8-hour hackathon at
            GLA University.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block"></div>

          {days.map((day) => (
            <div key={day} className="mb-16">
              {/* Phase Header */}
              <div className="text-center mb-12 relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-20 bg-gradient-to-r from-purple-500/20 via-blue-500/30 to-cyan-500/20 rounded-full blur-xl"></div>
                </div>

                {/* Main phase header */}
                <div className="relative z-30 inline-block bg-gradient-to-r from-gray-900/95 via-slate-800/95 to-gray-900/95 backdrop-blur-sm px-10 py-6 rounded-2xl border-2 border-purple-500/50 shadow-2xl">
                  <h3 className="text-4xl font-bold mb-3 font-orbitron bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {day.toUpperCase()}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* Enhanced connector to timeline */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full border-4 border-gray-900 shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>

              {/* Day Events */}
              <div className="space-y-8">
                {scheduleItems
                  .filter((item) => item.day === day)
                  .map((item, index) => {
                    const IconComponent = item.icon;
                    const isEven = index % 2 === 0;
                    const colors = getColorClasses(item.color);

                    return (
                      <div
                        key={index}
                        className={`relative flex items-center ${
                          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                        } flex-col lg:justify-center`}
                      >
                        {/* Event Card */}
                        <div
                          className={`w-full lg:w-5/12 ${
                            isEven ? "lg:pr-8" : "lg:pl-8"
                          }`}
                        >
                          <div
                            className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border ${colors.border} transition-all duration-300 hover:scale-105 relative overflow-hidden`}
                          >
                            <div className="flex items-start relative z-10">
                              <div
                                className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center mr-4`}
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-grow">
                                <div
                                  className={`${colors.text} font-bold text-lg mb-1 font-orbitron`}
                                >
                                  {item.time}
                                </div>
                                <h4 className="text-white font-bold text-xl mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            ></div>
                          </div>
                        </div>

                        {/* Timeline Node */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div
                            className={`w-4 h-4 bg-gradient-to-br ${colors.node} rounded-full border-4 border-gray-900`}
                          ></div>
                          <div
                            className={`absolute inset-0 w-4 h-4 ${colors.ping} rounded-full animate-ping opacity-20`}
                          ></div>
                        </div>

                        {/* Spacer for opposite side */}
                        <div className="hidden lg:block w-5/12"></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              READY TO JOIN THE MULTIVERSE?
            </h3>
            <p className="text-gray-300 mb-6">
              Save the date and prepare for an epic 8-hour innovation showdown at GLA University on 17th January 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const event = {
                    title: 'Marvel Multiverse Hackathon - Final Round',
                    start: '2026-01-17T00:00:00',
                    end: '2026-01-17T23:59:00',
                    description: 'Final 8-hour hackathon round at GLA University',
                    location: 'GLA University'
                  };
                  
                  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
                  window.open(googleCalendarUrl, '_blank');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                ADD TO CALENDAR
              </button>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <MapPin className="w-5 h-5 inline mr-2" />
                VENUE : TO BE DECIDED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
