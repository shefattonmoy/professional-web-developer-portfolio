import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      name: "UI/UX Design",
      description:
        "In UI/UX design, I craft user-centered interfaces, focusing on aesthetics, usability, and functionality to enhance digital experiences and satisfaction.",
      link: "Learn more",
    },
    {
      name: "Problem Solving",
      description:
        "I write code, solve problems, and develop software applications using programming languages to achieve specific functionalities and outcomes.",
      link: "Learn more",
    },
    {
      name: "Development",
      description:
        "I create and maintain websites, utilizing coding languages, frameworks, and design principles to deliver seamless online experiences.",
      link: "Learn more",
    },
    {
      name: "Information Security & Control",
      description:
        "In information security and control, I safeguard data, mitigate risks, and implement measures to ensure confidentiality, integrity, and availability.",
      link: "Learn more",
    },
  ];
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 mb-8 max-w-[455px]">
              I'm a Full Stack Developer with over 3 years of hands-on experience
            </h3>
            <button className="btn btn-sm"><a href="https://app.netlify.com/teams/shefathossain7/sites" target="blank">See My Works</a></button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] font-primary font-semibold tracking-wider mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight></BsArrowUpRight>
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
