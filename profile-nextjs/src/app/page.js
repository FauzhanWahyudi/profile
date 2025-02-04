// filepath: /profile/pages/index.js
import Image from "next/image";
import Header from "@/components/nav";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* About Section */}
      <section id="about" className="py-12 bg-green-50 shadow-md rounded-lg">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <Image
              src="/4x6.jpg"
              alt="Fauzhan Wahyudi"
              width={160}
              height={160}
              className="mx-auto rounded-full border-4 border-green-500 shadow-lg object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Full-Stack JavaScript Developer
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto bg-slate-200 p-4 rounded-lg shadow">
            I am a creative and detail-oriented software developer with
            expertise in web and mobile development. I graduated from Sepuluh
            Nopember Institute of Technology with a Computer Engineering degree
            and honed my skills through Hacktiv8’s Full Stack JavaScript
            Bootcamp, earning the esteemed Teacher’s Awards. I have experience
            leading projects like a 3D-enabled cinema ticketing app, showcasing
            logical thinking, storytelling, and creativity in user-focused
            solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <section id="certifications" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Certifications
          </h2>
          <ul className="list-disc pl-8 text-gray-700">
            <li>
              <strong>AWS Academy Graduate:</strong> AWS Academy Cloud
              Foundations (
              <a
                href="https://www.credly.com/badges/2d547782-4f90-445a-99da-ea4c68e9a7ad"
                className="text-green-500 hover:underline hover:font-bold"
              >
                View Certificate
              </a>
              )
            </li>
            <li>
              <strong>HackerRank Certificates:</strong>
              <ul className="list-disc pl-8">
                <li>
                  <a
                    className="text-green-500 hover:underline hover:font-bold"
                    href="https://www.hackerrank.com/certificates/iframe/5096ec204310"
                  >
                    React (Basic)
                  </a>
                </li>
                <li>
                  <a
                    className="text-green-500 hover:underline hover:font-bold"
                    href="https://www.hackerrank.com/certificates/iframe/4701ebf850f6"
                  >
                    JavaScript (Basic)
                  </a>
                </li>
                <li>
                  <a
                    className="text-green-500 hover:underline hover:font-bold"
                    href="https://www.hackerrank.com/certificates/iframe/6661e77fe18c"
                  >
                    SQL (Basic)
                  </a>
                </li>
                <li>
                  <a
                    className="text-green-500 hover:underline hover:font-bold"
                    href="https://www.hackerrank.com/certificates/iframe/82670b942cb1"
                  >
                    CSS (Basic)
                  </a>
                </li>
                <li>
                  <a
                    className="text-green-500 hover:underline hover:font-bold"
                    href="https://www.hackerrank.com/certificates/iframe/2b7caf1a4f3c"
                  >
                    Problem Solving (Basic)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="text-gray-700">
            Feel free to reach out for any project inquiries or collaborations!
          </p>
          <p className="text-gray-700 mt-2">
            📧
            <a
              href="mailto:fauzhanwahyudi@gmail.com"
              className="text-green-500 hover:underline hover:font-bold"
            >
              fauzhanwahyudi@gmail.com
            </a>
          </p>
        </div>
      </section>
      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Fauzhan Wahyudi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
