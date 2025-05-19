import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Intelligent Interface Design",
      description:
        "Developing AI-powered interface design methods to enhance user experience and interaction efficiency.",
      image: "https://via.placeholder.com/400x300",
      tags: ["AI", "UI/UX", "Interaction Design"],
      link: "#",
    },
    {
      title: "VR Education Platform",
      description:
        "Creating an immersive learning platform using virtual reality technology to revolutionize educational experiences.",
      image: "https://via.placeholder.com/400x300",
      tags: ["VR", "Education", "Interaction Design"],
      link: "#",
    },
    {
      title: "Multimodal Interaction System",
      description:
        "Researching and implementing speech, gesture, and eye-tracking technologies for natural human-computer interaction.",
      image: "https://via.placeholder.com/400x300",
      tags: ["Multimodal", "Interaction", "User Experience"],
      link: "#",
    },
  ];

  return (
    <div className="projects">
      <h1>Research Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
