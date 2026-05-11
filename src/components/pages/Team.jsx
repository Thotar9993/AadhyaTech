import React from 'react';
import { motion } from 'framer-motion';
import thirumalImage from '../../assets/Team/Thirumal.jpg';
import vikramImage from '../../assets/Team/Vikram-V.jpg';
import maleImage from '../../assets/Team/Male-image.jpg';
import avinashImage from '../../assets/Team/Avinash-R.jpg';
import hariImage from '../../assets/Team/Hari-Prasad.jpg';
import rachelImage from '../../assets/Team/Rachel-Maid.jpg';
import kavyaImage from '../../assets/Team/KavyaBM.jpg';
import { cardVariants, hoverLift, imageVariants, sectionVariants, sectionViewport } from '../common/motionPresets';

const Team = () => {
  const femaleMembers = ['Rachel Maid', 'Kavya B M'];

  const teamMembers = [
    {
      name: 'Thiru G',
      role: 'Founder CEO',
      bio: 'With over 15 years of experience in the IT industry, I specialize in software development, cloud solutions and digital transformation. As the Founder CEO of Aadhya Tech, I am committed to building innovative, scalable and reliable technology solutions that help businesses grow in a fast-evolving digital world.',
      image: thirumalImage,
      cardClassName: 'p-4 sm:p-5',
      imageFrameClassName: 'mx-auto md:mx-0 w-full max-w-[280px] overflow-hidden rounded-2xl bg-white p-3 ring-2 ring-blue-100 shadow-lg',
      imageClassName: 'h-[320px] object-contain object-center bg-transparent',
      contentClassName: 'text-center md:text-left md:pt-1',
      expertise: ['Software Development', 'Cloud Solutions', 'Digital Transformation', 'AI & Automation', 'Strategic Leadership'],
      achievements: [
        'Founded Aadhya Tech with a vision to innovate and scale',
        'Led successful digital transformation initiatives for 10+ organizations',
        'Salesforce Developer and Consultant Certified'
      ]
    },
    // {
    //   name: 'Rachel Maid',
    //   role: 'CTO',
    //   bio: 'Over 12 years of experience in the IT industry, I specialize in software architecture, cloud infrastructure, and emerging technologies. As the CTO of Aadhya Tech, I lead the technical vision and engineering strategy, focusing on building scalable, secure and high-performance solutions that drive innovation and long-term growth.',
    //   image: rachelImage,
    // },
    // {
    //   name: 'Avinash R',
    //   role: 'Project Lead',
    //   bio: 'As a Project Lead, I bring over 8 years of industry experience in successfully delivering projects across diverse domains. I focus on strategic planning, efficient execution and leading teams to achieve high-quality results within timelines. My approach emphasizes clear communication, problem-solving and ensuring client satisfaction through consistent performance and innovative solutions.',
    //   image: avinashImage,
    // },
    // {
    //   name: 'Hari Prasad',
    //   role: 'Software Engineer',
    //   bio: 'A dedicated Software Engineer with a strong foundation in modern development practices, I specialize in building reliable, scalable and efficient solutions. With a passion for clean code and problem-solving, I consistently strive to deliver high-quality software that drives business value and enhances user experience.',
    //   image: hariImage,
    // },
    // {
    //   name: 'Kavya B M',
    //   role: 'Associate Engineer',
    //   bio: 'Passionate about software development, I enjoy creating practical, efficient solutions. With a strong interest in understanding how systems work end-to-end, I focus on identifying issues and delivering clear, effective results. My project experience involves solving real-world problems and improving user experience.',
    //   image: kavyaImage,
    // },
  ];

  return (
    <motion.main
      className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
        <motion.h1
          variants={cardVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
        >
          Who Am I
        </motion.h1>
        <motion.div
          variants={cardVariants}
          className="relative overflow-hidden rounded-3xl border border-blue-200/60 bg-white/70 backdrop-blur-md shadow-[0_24px_70px_rgba(37,99,235,0.12)] px-6 sm:px-8 py-8 sm:py-10"
        >
          <div className="pointer-events-none absolute -top-20 -left-12 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl" />

          <motion.div variants={sectionVariants} className="relative">
            {teamMembers.map((member, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={hoverLift}
                className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-r from-white to-blue-50/60 p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(30,64,175,0.18)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,0.12),transparent_35%)]" />

                <div className="relative grid grid-cols-1 md:grid-cols-[320px_1fr] items-start gap-8">
                  <motion.div
                    variants={imageVariants}
                    whileHover={{ scale: 1.03 }}
                    className="mx-auto md:mx-0 w-full max-w-[320px] overflow-hidden rounded-2xl bg-white p-3 ring-2 ring-blue-100 shadow-lg"
                  >
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full rounded-xl h-[380px] object-contain object-center bg-transparent"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.div>

                  <div className="text-center md:text-left space-y-6">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">{member.name}</h3>
                      <p className="mt-2 inline-flex items-center rounded-full border border-blue-300 bg-blue-100 px-4 py-2 text-base font-semibold text-blue-800">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-3xl">
                      {member.bio}
                    </p>

                    {member.expertise && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span key={idx} className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 text-sm font-medium text-blue-900 border border-blue-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {member.achievements && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-sm sm:text-base text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Team;
