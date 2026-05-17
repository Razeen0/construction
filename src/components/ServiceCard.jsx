function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default ServiceCard