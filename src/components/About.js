import React from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[420px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              I'm a Full Stack Developer with over 3 years of hands-on experience
            </h3>
            <p className="mb-6">
              I am the maestro of tech fusion, blending code and design to
              orchestrate digital masterpieces. A programmer, developer, and
              designer on a quest to elevate user experiences and shape
              groundbreaking innovations. Let's collaborate to turn visions into
              awe-inspiring digital realities.
            </p>
            <div className="flex gap-x-6 lg:gap-x-20 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? (
                    <CountUp start={0} end={3} duration={3}></CountUp>
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Hands-on<br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? (
                    <CountUp start={0} end={50} duration={3}></CountUp>
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-20 items-center">
              <button className="btn btn-lg">
                <Link to="contact">Contact Me</Link>
              </button>
              <a
                href="https://drive.google.com/file/d/1-o20nbomsbkxFbl_nLj5zPM3fN9Xp3wF/view?usp=sharing"
                className="text-gradient btn-link" target="blank"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
