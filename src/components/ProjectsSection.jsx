import ProjectCard from "./ProjectCard"

function ProjectsSection() {

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",

      title: "Modern Office Complex",

      category: "Commercial Construction",
    },

    {
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",

      title: "Luxury Villa",

      category: "Residential Construction",
    },

    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

      title: "Premium Interior Design",

      category: "Interior Design",
    },
  ]

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Our Projects
          </h2>

          <p className="text-gray-600 mt-4">
            Explore some of our recent construction and design projects.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default ProjectsSection