import React from 'react'
import Image from "../assets/img/Anandhu About'img.jpg"

const About = () => {
  return (
    <section className="about min-h-screen text-white px-5 py-32 tracking-wide" id="about">
    <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info font-light cursor-scale" data-aos="fade-right" data-aos-duration="2000">
            <h2 className="text-4xl  mb-5 w-[180px] font-semibold pb-2 ">
                About Me
            </h2>

            <p className="pb-5 ">
                Hi, My Name Is Anandhu R S. Passionate and self-driven Full Stack Developer
                with over a year of experience in creating and executing scalable and
                distributed web applications. Expertise in MERN stack technologies,
                coupled with a strong problem-solving aptitude, enables me to craft
                code that is both efficient and maintainable. Continuous learning and
                exploration are my driving forces, keeping me at the forefront of the
                ever-evolving web development landscape.
                             With a strong penchant
                for problem-solving, I am dedicated to crafting code that is both readable
                and maintainable. My curiosity drives me to continuously explore and
                master new technologies.
            </p>
        </div>

        <div className="about-img" >
            <img
                src={Image}
                alt="coding illustration"
                className="lg:w-[60%] w-full md:ml-auto rounded-full border-2 hover:border-emerald-600"
            />
        </div>
    </div>
</section>
  )
}

export default About
