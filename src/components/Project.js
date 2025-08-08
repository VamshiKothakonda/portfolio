import React, { useState } from "react";

const projects = {
  "Web Development": [
    {
      title: "StockzHood",
      description: "Building a stock broking platform",
      technologies: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/VamshiKothakonda/StockzHood",
    },
    {
      title: "Letsmeet",
      description: "An video-conferencing platform for GenZ",
      technologies: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/VamshiKothakonda/Letsmeet",
    },
    {
      title: "CodeBase",
      description: "Developed a comprehensive version control system.",
      technologies: "Node.js, ReactJS, MongoDB,",
      link: "",
    },
  ],
  "Cloud Operations": [
    {
      title: "Cloud Migration & CI/CD Automation",
      description:
        "Led York University’s LMS student Module migration from on-prem to AWS Cloud, enhancing scalability, uptime, and disaster recovery.",
      technologies: "HTML, CSS, JavaScript, Machine Learning",
      link: "#",
    },
    // {
    //   title: "CareerForge Hub",
    //   description:
    //     "Led the development of a career guidance platform tailored for IT students.",
    //   technologies: "Python, Flask, ReactJS, NextJS, MongoDB, Machine Learning",
    //   link: "https://github.com/Naman-Goyal151101/CareerForgeHub",
    // },
  ],
  // "Systems Programming": [
  //   {
  //     title: "Socket Programming Project",
  //     description:
  //       "Designed and implemented a multi-threaded server application in C++ that connected with multiple client applications.",
  //     technologies: "C++, Socket Programming, Multi-threading, Linux",
  //     link:
  //   },
  // ],
  // "Personal Projects": [
  //   {
  //     title: "Simple Todo List API in Rust",
  //     description:
  //       "Developed a basic REST API for managing a todo list, implementing CRUD operations with efficient handling of HTTP requests and responses.",
  //     technologies: "Rust, Rocket framework, SQLite",
  //     link:
  //   },
  // ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <section
      id="projects"
      className="scroll-margin-top-20 pt-20 py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center mb-8">
          {Object.keys(projects).map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base ${
                activeTab === category
                  ? "bg-custom-blue text-white"
                  : "bg-gray-200 text-gray-800"
              } m-2 transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
