import React from "react";
import { FaLaptopCode, FaCloud, FaLightbulb } from "react-icons/fa";

import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-margin-top-20 pt-20 py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          About Me
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          MERN Stack Developer | Full Stack Developer | Cloud - AL/ML Enthusiast
          | Lifelong Learner
        </p>
        <div className="flex flex-col md:flex-row items-start">
          {/* Key Highlights Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-custom-blue text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-700 mb-4 text-justify">
                Software Developer with 5+ years of MERN Stack experience,
                delivering 20+ scalable web apps with up to 35% performance
                gains across travel, finance, and enterprise domains. Improved
                UI/UX and API performance by resolving 300+ issues, cutting
                bounce rates by 23%, response times by 28%, and production
                incidents by 20%. Driven by growth and continuous learning, with
                a deep interest in AI, LLMs, classification models, and ML tools
                shaping next-gen web experiences.
              </p>
              <ul className="list-disc list-inside text-gray-700 ">
                <li>
                  Proficient in React.js, JavaScript, and TypeScript for
                  crafting dynamic single-page applications with robust
                  statemanagement using Redux and Context API.
                </li>
                <li>
                  Experienced in full-stack development with NodeJS, ExpressJS,
                  MongoDB and PostgreSQL.
                </li>
                <li>
                  Skilled in building and consuming RESTful APIs, handling
                  asynchronous operations, and streamlining debugging with
                  modern DevTools
                </li>
                <li>
                  Experience deploying and managing applications using AWS
                  (EC2,S3, Lambda) and Kubernetes, with build optimization
                  through Webpack, Vite, and NPM.
                </li>
              </ul>
            </div>
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaCloud className="text-custom-blue text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Cloud Expertise</h3>
              </div>
              <p className="text-gray-700 text-justify">
                Cloud Professional with a Postgraduate Certificate in CloudOps
                from York University, trained in cloud infrastructure, DevOps
                practices, and scalable web application deployment using modern
                cloud-native practices.
              </p>
              <p className="mt-4 text-justify">
                Experienced in cloud technologies and infrastructure, leveraging
                AWS services like RDS, S3, and IAM to build scalable, secure,
                and reliable applications. Proficient in Docker, Kubernetes, and
                DevOps tools like Git, Ansible, and Jenkins for automating CI/CD
                pipelines and deployment workflows.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-custom-blue text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-gray-700 text-justify">
                Passionate about learning and adapting to new technologies, with
                a focus on machine learning, AI, Blockchain and Quantum
                computing technologies.
              </p>
            </div>
          </div>

          {/* Detailed Biography Section */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-gray-700 text-justify mb-4">
                I am Vamshi Krishna, a dedicated MERN Stack Developer with a
                passion for creating high-performance, user-centric web
                applications. With over 5+ years of experience in the tech
                industry, I specialize in both front-end and back-end
                development, focusing on delivering scalable solutions that meet
                business objectives.
              </p>
              <p className="text-gray-700 text-justify mb-4">
                My journey in technology has been driven by a strong commitment
                to continuous learning and adaptation. I thrive in Agile
                environments, where I collaborate with cross-functional teams to
                design, build, and deploy innovative products. My ability to
                translate complex business requirements into
                efficient,maintainable code has consistently resulted in
                successful project outcomes.
              </p>
              <p className="text-gray-700 text-justify mb-4">
                Outside of work, I am deeply interested in the fields of machine
                learning and artificial intelligence. I have often experimented
                with new technologies and contribute to open-source projects. My
                goal is to leverage my technical expertise and creative
                problem-solving skills to build products that make a meaningful
                impact on society.
              </p>
              <div className="text-center mt-8">
                <a
                  href={Resume}
                  alt="Resume"
                  className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                  download="Vamshi Krishna Kothakonda Resume"
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
