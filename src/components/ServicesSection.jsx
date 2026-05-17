import ServiceCard from "./ServiceCard"

function ServicesSection() {

  const services = [
    {
      title: "Residential Construction",
      description:
        "High-quality modern homes built with trusted engineering and premium materials.",
    },

    {
      title: "Commercial Construction",
      description:
        "Professional commercial buildings designed for scalability and efficiency.",
    },

    {
      title: "Interior Design",
      description:
        "Elegant and modern interiors crafted for comfort and functionality.",
    },

    {
      title: "Renovation",
      description:
        "Transforming old spaces into modern and visually stunning environments.",
    },

    {
      title: "Architecture Planning",
      description:
        "Creative and strategic architectural planning for every project.",
    },

    {
      title: "Project Management",
      description:
        "Complete construction management with quality and timely delivery.",
    },
  ]

  return (
    <section
      className="py-20 bg-gray-100"
      data-aos="fade-up"
    >

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-600 mt-4">
            Delivering innovative construction solutions for modern living.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default ServicesSection