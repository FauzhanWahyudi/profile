import React from "react";

const certifications = [
  {
    title: "AWS Academy Graduate",
    description: "AWS Academy Cloud Foundations",
    link: "https://www.credly.com/badges/2d547782-4f90-445a-99da-ea4c68e9a7ad",
  },
  {
    title: "React (Basic) Certificate",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/5096ec204310",
  },
  {
    title: "JavaScript (Basic) Certificate",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/4701ebf850f6",
  },
  {
    title: "SQL (Basic) Certificate",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/6661e77fe18c",
  },
  {
    title: "CSS (Basic) Certificate",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/82670b942cb1",
  },
  {
    title: "Problem Solving (Basic) Certificate",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/2b7caf1a4f3c",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl p-6 border border-gray-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {cert.provider || cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-success mt-2"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
