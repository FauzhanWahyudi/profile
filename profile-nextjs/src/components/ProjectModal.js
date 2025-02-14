import React from "react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-box max-w-3xl">
        <h3 className="font-bold text-2xl">{project.title}</h3>
        <p className="py-2 text-gray-500">{project.description}</p>

        {/* Media Preview */}
        <div className="my-4">
          {!project.media && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-800 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                />
              </svg>
              <p className="text-center text-green-800">No preview available</p>
            </div>
          )}
          {project.media ? (
            project.media?.endsWith(".mp4") ? (
              <video
                controls
                className={`w-full rounded-lg ${project.mediaClass}`} // Add custom class
              >
                <source src={project.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.media}
                alt={project.title}
                className={`w-full rounded-lg ${project.mediaClass}`} // Add custom class
              />
            )
          ) : null}
        </div>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="modal-action flex justify-between">
          <div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-success"
            >
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-accent ml-2"
              >
                Live Demo
              </a>
            )}
          </div>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
