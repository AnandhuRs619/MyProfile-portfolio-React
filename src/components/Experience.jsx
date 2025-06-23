import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BriefcaseFill } from 'react-bootstrap-icons';
import colorSharp from '../assets/img/color-sharp.png';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Qmark Technolabs Pvt. Ltd.',
    period: 'Aug 2024 - Present',
    description: 'Developed modern web applications using React.js, improved UI/UX, and collaborated with cross-functional teams.'
  },
  {
    role: 'MERN Stack Developer',
    company: 'Softsync Solutions PVT LTD',
    period: 'Jan 2023 - Dec 2023',
    description: `Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and
Node.js), ensuring a seamless user experience.`
  },
  {
    role: 'Web Developer ',
    company: 'Freelancer',
    period: 'Dec 2022 - Present',
    description: 'Built responsive websites, optimized performance, and contributed to open-source projects.'
  },
 
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <div className="">
              <h2 className="text-4xl font-semibold text-white mb-12 cursor-scale">Experience</h2>
              <div className="relative pl-8 md:pl-16">
                {/* Vertical timeline line */}
                <div className="absolute left-4 md:left-8 top-0 h-full w-1 bg-gradient-to-b from-emerald-400/80 to-purple-600/80 rounded-full z-0"></div>
                <div className="space-y-12">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative flex items-start group" data-aos="fade-up" data-aos-delay={idx * 100}>
                      {/* Timeline dot */}
                      <div className="z-10 flex flex-col items-center mr-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-purple-600 flex items-center justify-center shadow-lg border-4 border-[#151515] group-hover:scale-110 transition-transform">
                          <BriefcaseFill className="text-white text-xl" />
                        </div>
                        {idx !== experiences.length - 1 && (
                          <div className="flex-1 w-px bg-gradient-to-b from-emerald-400/80 to-purple-600/80 mt-1"></div>
                        )}
                      </div>
                      {/* Card */}
                      <div className="exp-card flex-1 bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 shadow-lg hover:border-emerald-500 transition-all cursor-scale">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <span className="exp-role text-lg font-bold text-emerald-400">{exp.role}</span>
                          <span className="exp-period text-sm text-gray-400">{exp.period}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <span className="exp-company text-md text-white font-medium">{exp.company}</span>
                        </div>
                        <p className="exp-desc mt-3 text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Experience; 