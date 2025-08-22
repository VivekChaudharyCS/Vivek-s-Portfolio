import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#0fbbff] mx-auto mt-2"></div>
        <p className="text-[#c9d9e8] mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills categories */}

      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#081723] backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-[#0fbbff]/30 shadow-[0_0_8px_rgba(15,187,255,0.25),0_0_20px_rgba(15,187,255,0.1)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#c9d9e8] mb-4 text-center">
              {category.title}
            </h3>
            {/* Skill Items - 3 per row on larger screens*/}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1200}
                  scale={1.10}
                  glareEnable={false}
                  transitionSpeed={800}
                  className="rounded-3xl"
                >
                  <div className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center max-w-full overflow-hidden transition-all hover:shadow-[0_0_10px_rgba(15,187,255,0.4)] hover:border-[#0fbbff]">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 truncate max-w-[100px]">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
