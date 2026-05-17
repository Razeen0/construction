import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
  FaHome,
  FaBuilding,
  FaPaintRoller,
  FaHammer,
  FaDraftingCompass,
  FaTasks,
} from "react-icons/fa"

function Services() {

  const services = [
    {
      icon: <FaHome />,
      title: "Residential Construction",
      description:
        "Modern and durable residential buildings designed for comfortable living.",
    },

    {
      icon: <FaBuilding />,
      title: "Commercial Construction",
      description:
        "Scalable commercial infrastructure built with quality engineering.",
    },

    {
      icon: <FaPaintRoller />,
      title: "Interior Design",
      description:
        "Elegant interior spaces crafted with creativity and functionality.",
    },

    {
      icon: <FaHammer />,
      title: "Renovation",
      description:
        "Transforming outdated spaces into modern and visually appealing environments.",
    },

    {
      icon: <FaDraftingCompass />,
      title: "Architecture Planning",
      description:
        "Strategic planning and innovative architectural design solutions.",
    },

    {
      icon: <FaTasks />,
      title: "Project Management",
      description:
        "Efficient construction management ensuring timely project delivery.",
    },
  ]

  return (
    <div>

      <Navbar />

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            We provide complete construction and infrastructure solutions
            with quality, innovation and reliability.
          </p>

        </div>

      </section>

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
              >

                <div className="text-yellow-400 text-5xl mb-6">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Delivering High-Quality Construction Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our team combines modern technology, skilled engineering
              and innovative planning to execute projects with precision.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From residential homes to commercial complexes,
              we ensure quality workmanship and client satisfaction
              at every stage.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
              alt="services"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Services