"use client";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Cel-Tix",
    description:
      "A cinema ticket booking app featuring 3D reservations and seamless payment systems.",
    techStack: ["React Native", "Three.js", "GraphQL", "MongoDB"],
    github: "https://github.com/celestial-ticket",
    demo: "https://expo.dev/preview/update?message=fix%20error&updateRuntimeVersion=1.0.0&createdAt=2025-01-10T13%3A15%3A13.799Z&slug=exp&projectId=855c9c3e-92ca-4aaa-a01f-b0d017d3ce1d&group=1ab92f1e-f03f-40c0-8dfe-4a607e942c46",
    media: "/videos/celestial-ticket.mp4", // Video preview
  },
  {
    title: "PlotAlchemy",
    description:
      "An AI-powered synopsis generator using manga data to create compelling story plots.",
    techStack: ["React", "Tailwind", "Redux", "Gemini AI"],
    github: "https://github.com/FauzhanWahyudi/PlotAlchemy",
    demo: "https://plot-alchemy.fauzhanwahyudi.com/",
    media: "/photos/plot-alchemy.png", // Photo preview
  },
  {
    title: "TypeHeaven",
    description:
      "A real-time typing competition game with seamless live updates powered by Socket.IO.",
    techStack: ["React", "Socket.IO", "Vite"],
    github: "https://github.com/Type-Heaven",
    demo: "https://type-heaven.fauzhanwahyudi.com/",
    media: "/photos/type-heaven.png", // Photo preview
  },
  {
    title: "YouTube Clone",
    description:
      "A minimalist YouTube clone app featuring likes and comments functionality.",
    techStack: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    github: "https://github.com/FauzhanWahyudi/Youtube-Clone",
    demo: "https://expo.dev/preview/update?message=fix%3A%20ActivityIndicator%20not%20found&updateRuntimeVersion=1.0.0&createdAt=2024-12-16T03%3A58%3A21.372Z&slug=exp&projectId=b0839476-d131-4f98-ab3d-3c02984d2eef&group=37cc11c8-85a8-4ef0-845a-f4ba4f5a54ae",
    media: "/videos/youtube-clone.mp4", // Video preview
    mediaClass: "h-96", // Custom class for video
  },
  {
    title: "Blibli Clone",
    description:
      "A simplified e-commerce platform inspired by Blibli, featuring a wishlist and a modern design.",
    techStack: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/FauzhanWahyudi/Blibli-Web-Clone",
    demo: "https://blibli-clone.vercel.app/",
    media: "/photos/blibli-clone.png", // Photo preview
  },
  {
    title: "Tebakin Dong!",
    description:
      "A web-based guessing game featuring CRUD functionality and a leaderboard display.",
    techStack: ["JavaScript", "Express", "PostgreSQL"],
    github: "https://github.com/FauzhanWahyudi/TebakinDong",
    demo: "https://fauzhanwahyudi.github.io/TebakinDong/",
    media: "/photos/tebakin-donks.png", // Photo preview
  },
  {
    title: "HeadBang",
    description:
      "An e-commerce platform specializing in-game items, focusing on the store section.",
    techStack: ["JavaScript", "EJS", "PostgreSQL"],
    github: "https://github.com/FauzhanWahyudi/HeadBang.git",
    demo: null,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);
  return (
    <section id="projects" className="py-12 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => {
                setSelectedProject(project);
              }}
            />
          ))}
        </div>
      </div>

      {/* DaisyUI Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
