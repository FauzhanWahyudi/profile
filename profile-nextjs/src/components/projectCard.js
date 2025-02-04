export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      <div>
        <a
          href={project.github}
          className="text-green-500 hover:underline hover:font-bold"
        >
          GitHub
        </a>
        <span className={project.demo ? "" : "hidden"}> | </span>
        <a
          href={project.demo}
          className={
            `text-green-500 hover:underline hover:font-bold` +
            (project.demo ? "" : " hidden")
          }
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
