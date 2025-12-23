import React from "react";

const mentors = [
  {
    id: 1,
    name: "Vanshika Agrawal",
    role: "Community Manager",
    organization: "OSCode",
    image: "https://res.cloudinary.com/df6t1dmcs/image/upload/v1766516080/Anshika_mentor_oikpzi.jpg",
    description:
      "Drives engagement, collaborations, and growth within the open-source ecosystem.",
    linkedin: "https://www.linkedin.com/in/vanshika-agrawal-1259a6243",
    twitter:
      "https://x.com/__im_theonly__1?t=FJqgwFjeqcoL0LniMyshvA&s=09",
  },

];

const MentorSection = () => {
  return (
  <section className="relative bg-slate-900 py-20 px-6 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black" />

      {/* Heading */}
      <h2
        className="relative text-center text-4xl md:text-5xl font-bold mb-14
                   text-transparent bg-clip-text
                   bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400
                   font-orbitron uppercase"
      >
        Our Mentors
      </h2>

      {/* Mentor Cards */}
      <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 justify-center">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="group relative rounded-lg p-[2px]
                       bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600
                       hover:shadow-[0_0_70px_8px_rgba(99,102,241,0.5)]
                       transition-all duration-500"
          >
            {/* Inner Card */}
            <div
              className="relative rounded-lg h-full p-6
                         bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900
                         hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                {/* Bigger Image */}
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover
                             border-4 border-blue-400
                             shadow-[0_0_55px_rgba(99,102,241,0.9)]
                             mb-6"
                />

                {/* Name */}
                <h3 className="text-2xl font-bold text-blue-300">
                  {mentor.name}
                </h3>

                {/* Role + Organization */}
                <span className="text-sm uppercase text-cyan-400 mt-1 tracking-wide">
                  {mentor.role} | {mentor.organization}
                </span>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-xs">
                  {mentor.description}
                </p>

                {/* Social Media Buttons (Placeholder) */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={mentor.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded transition"
                  >
                    Twitter
                  </a>
                </div>

                {/* Divider */}
                <div
                  className="mt-6 h-[2px] w-24
                             bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorSection;
