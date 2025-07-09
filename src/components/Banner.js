import React from "react";
import image from "../assets/shefat-circle.png";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.9] lg:text-[100px]"
            >
              SHEFAT<span> TONMOY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[65px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">
                I am a{" "}
                <TypeAnimation
                  sequence={[
                    "Programmer",
                    2000,
                    "Developer",
                    2000,
                    "Designer",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                ></TypeAnimation>
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a versatile professional skilled in programming, development,
              and design. My passion lies in crafting innovative solutions,
              merging technical prowess with creative flair. I excel in coding
              elegant solutions, creating user-friendly applications, and
              delivering visually appealing experiences. I remain committed to
              staying updated in the ever-evolving tech field, thriving on
              turning ideas into reality.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-16 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <Link to="contact">Contact Me</Link>
              </button>
              <a
                href="https://drive.google.com/file/d/1-o20nbomsbkxFbl_nLj5zPM3fN9Xp3wF/view?usp=sharing"
                className="text-gradient btn-link" target="blank"
              >
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[24px] gap-x-12 max-w-max lg:max-0"
            >
              <a href="https://www.facebook.com/shefat.tonmoy" target="blank">
                <FaFacebookF></FaFacebookF>
              </a>
              <a
                href="https://www.instagram.com/shefat_h_tonmoy/"
                target="blank"
              >
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://github.com/shefattonmoy" target="blank">
                <FaGithub></FaGithub>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[360px] lg:max-w-[420px]"
          >
            <img className="mb-32" src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;