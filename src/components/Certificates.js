import React from "react";
import "./FlipCard.css"; // Include the enhanced CSS for the flip effect

const certificates = [
  {
    title: "TypeScript for JavaScript Developers",
    organization: "LinkedIn Learning",
    details:
      "This certification validates Deep Understanding of Typescript application for Developers.",
    link: "https://www.linkedin.com/learning/certificates/11ede187b91e5d372e3850bbb9b6b8d8ee117051ff67f59440aa660fdaa91473?u=2155426",
  },
  // {
  //   title: "Introduction to Spark SQL and DataFrames",
  //   organization: "LinkedIn Learning",
  //   date: "February 2024",
  //   details:
  //     "An introductory course on Spark SQL and DataFrames for big data processing.",
  //   link: "https://www.linkedin.com/learning/certificates/bd7064a51c7b6150a65e625f8d90fc3636ab28d397b4966696d4a70684c0339f?trk=share_certificate",
  // },
  {
    title: "MongoDB Essential Training",
    organization: "LinkedIn Learning",
    details:
      "A foundational course on MongoDB architecture and its applications in Database management.",
    link: "https://www.linkedin.com/learning/certificates/b09ef5ea17f8effe77737103ae82b77c4a4a2564b1b63b71fcf339c7ecbbd6c8?u=2155426",
  },
  {
    title: "Microservices: Design Patterns",
    organization: "LinkedIn Learning",
    details:
      "This course covers common design patterns for building microservices.",
    // link: "https://www.linkedin.com/learning/certificates/25ecbac04aa5a7494d66970fcb3755ab49dfda9a251d61eba18cd1cfd5148c2b?trk=share_certificate",
  },
  {
    title: "API Integration with Node.js and Express",
    organization: "LinkedIn Learning",
    details:
      "This course covers Building RESTful APIs with Node.js and Express.",
    link: "https://www.linkedin.com/learning/certificates/a5dd9b68556273f97a4ca410c47720da2a19f0598c0557aefe1d598976ba5571?u=2155426",
  },
  {
    title: "Post-Graduation Degree in CloudOps",
    organization: "York University",
    details: "Academic and Technical Training Certification",
    link: "#",
  },
  // {
  //   // title: "Post-Graduation Degree in Project Management",
  //   // organization: "George Brown College",
  //   // details: "Academic and Technical Training Certification",
  //   // link: "#",
  // },
  // {
  //   title: "Architecting with Google Compute Engine",
  //   organization: "Coursera",
  //   date: "April 2020",
  //   details:
  //     "A course on designing and implementing architectures using Google Cloud's Compute Engine.",
  //   link: "#",
  // },
  // {
  //   title: "Object-Oriented Programming in C++",
  //   organization: "NPTEL",
  //   date: "October 2019",
  //   details:
  //     "This course provides a deep dive into object-oriented programming concepts using C++.",
  //   link: "#",
  // },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="scroll-margin-top-20 pt-20 py-16 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Certificates & Technical Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="enhanced-flip-card">
              <div className="enhanced-flip-card-inner">
                <div className="enhanced-flip-card-front p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600">{certificate.organization}</p>
                  <p className="text-sm text-gray-500">{certificate.date}</p>
                </div>
                <div className="enhanced-flip-card-back p-6 rounded-lg shadow-lg">
                  <p className="mb-4">{certificate.details}</p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-500 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
