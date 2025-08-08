import React, { useState } from "react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Software Development Engineer (SDE)",
      company: "TCT Holidays and Technologies Private Limited",
      dates: "Apr 2021 - Aug 2023",
      technologies:
        "ReactJS, NodeJS, ExpressJS, Bootstrap, MongoDB, AWS, GIT, JIRA, CI/CD Pipelines",
      responsibilities: [
        "Developed and maintained dynamic web applications in the Travel, Tourism, and Finance sectors using ReactJS, JavaScript, HTML5, CSS3,SASS and Bootstrap, resulting in a 25% increase in operational efficiency and improved platform usability. ",
        "Engineered scalable backend services and APIs with NodeJS, facilitating real-time synchronization between client UIs and backend systems for financial transactions and booking engines.",
        "Integrated RESTful APIs and fine-tuned SQL queries to support live dashboards and transactional systems, leading to 40% faster data rendering and a 20% reduction in latency-related issues.",
        "Leveraged React Hooks like (useState, useEffect, useContext) to refactor state logic and streamline components, cutting rework cycles by 30% and improving maintainability across codebases.",
        "Partnered with designers in Figma to implement accessible, responsive UIs using Tailwind CSS, resulting in 100% WCAG 2.1 AA compliance and seamless cross-device compatibility.",
        "Optimized performance via SPA architecture, lazy loading, and route guards, achieving a 30–40% decrease in initial load times and smoother navigation experiences.",
        "Built and maintained robust debugging, unit testing, UAT support and integration tests using tools like Jest and React Testing Library, leading to 85%+ code coverage and early detection of regressions across critical workflows.",
      ],
    },
    {
      role: "Junior Software Developer",
      company: "TCT Holidays and Technologies Private Limited",
      dates: "Jan 2019 - Mar 2021",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, AWS, GIT, JIRA, CI/CD Pipelines",
      responsibilities: [
        "Collaborated with senior developers to streamline the development process, which resulted in a more efficient workflow and a 20% reduction in reported bugs.",
        "Developed internal websites like TCT Holidays and Tralamo, utilizing HTML, CSS, Bootstrap, and JavaScript to enhance internal business operations and improve user experience.",
        "Managed Git version control and led code reviews to maintain high-quality standards.Key player in the migration to React 18, driving the adoption of new features and optimizations that enhanced application performance and scalability.",
        "Led initiatives for bug resolution and code refactoring, improving application stability and facilitating the timely delivery of high-impact projects.",
        "Collaborated with the backend team to design and implement efficient database schemas in MongoDB and integrate third-party APIs.",
        "Optimized responsive design using Bootstrap, reducing layout inconsistencies across devices and improving site accessibility.",
        "Implemented dynamic features with JavaScript, enhancing user interactivity and contributing to a 15% increase in internal user engagement",
      ],
    },
    {
      role: "Engineer Trainee Level 3 Internship",
      company: "CYIENT Limited - Hyderabad, India ",
      dates: "Jan 2016 - Aug 2017",
      technologies:
        "NestJS, React Native, Redis, AWS, GIT, CI/CD Pipelines, PayPal API",
      responsibilities: [
        "Designed high-fidelity test component models for complex aerospace systems ensuring robust integration into live production environments using advanced simulation and modeling tools.",
        "Worked cross-functionally with engineers, testers, and product leads to iterate on designs, resolve integration blockers, and implement process improvements that enhanced test cycle velocity and system safety compliance.",
      ],
    },
    // {
    //   role: "",
    //   company: "",
    //   dates: "",
    //   technologies: "",
    //   responsibilities: ["", ""],
    // },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="scroll-margin-top-20 pt-20 py-16 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Professional Experience
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <ul className="space-y-4">
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  className={`p-4 cursor-pointer ${
                    index === activeTab
                      ? "bg-custom-blue text-white"
                      : "bg-gray-100 text-gray-700"
                  } rounded-lg`}
                  onClick={() => setActiveTab(index)}
                >
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-sm">{experience.dates}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">
                {experiences[activeTab].role}
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                {experiences[activeTab].company}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {experiences[activeTab].dates}
              </p>
              <p className="text-md text-gray-700 mb-4">
                <strong>Technologies:</strong>{" "}
                {experiences[activeTab].technologies}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                {experiences[activeTab].responsibilities.map(
                  (responsibility, i) => (
                    <li key={i} className="mb-2">
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
