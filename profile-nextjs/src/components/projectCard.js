export default function ProjectCard({ project, ...props }) {
  return (
    <div
      className="bg-base-100 shadow-lg rounded-lg overflow-hidden p-6 hover:cursor-pointer"
      {...props}
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>

      {/* Links */}
      <div className="mt-4 flex justify-start gap-4 items-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:underline hover:font-bold"
        >
          GitHub
        </a>
        {project.demo && (
          <>
            <span className="text-gray-500">|</span>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:underline hover:font-bold"
            >
              Live Demo
            </a>
          </>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mt-2 mb-1 flex flex-wrap gap-2 justify-end">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-green-600 text-xs text-white rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
