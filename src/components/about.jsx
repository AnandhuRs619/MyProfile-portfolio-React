import React from "react";
import Image from "../assets/img/Anandhu About'img.jpg";

const About = () => {
  return (
    <section
      className="about min-h-screen text-white px-5 py-32 tracking-wide"
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div
          className="about-info font-light cursor-scale"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2 className="text-4xl  mb-5 w-[180px] font-semibold pb-2 ">
            About Me
          </h2>

          <p className="pb-5 ">
            Hi, my name is Anandhu R S — a passionate and self-driven Full Stack
            Developer with a proven track record of building scalable and
            distributed web applications. I specialize in the MERN stack,
            combining technical expertise with a strong problem-solving mindset
            to deliver clean, efficient, and maintainable code. Curiosity and
            continuous learning are at the core of my growth as a developer. I
            actively stay up to date with emerging technologies and best
            practices, always striving to enhance my skills and contribute to
            impactful, high-quality projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={Image}
            alt="coding illustration"
            className="lg:w-[60%] w-full md:ml-auto rounded-full border-2 hover:border-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
