function ProjectCard({ image, title, category }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-gray-600">
          {category}
        </p>

      </div>

    </div>
  )
}

export default ProjectCard