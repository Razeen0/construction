import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Projects() {

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",

      title: "Modern Office Complex",

      category: "Commercial Construction",
    },

    {
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",

      title: "Luxury Villa",

      category: "Residential Construction",
    },

    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

      title: "Premium Interior Design",

      category: "Interior Design",
    },

    {
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",

      title: "Urban Apartment Project",

      category: "Residential Construction",
    },

    {
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",

      title: "Corporate Workspace",

      category: "Commercial Interior",
    },

    {
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",

      title: "Luxury Renovation",

      category: "Renovation",
    },
  ]

  return (
    <div>

      <Navbar />

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Our Projects
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our portfolio of modern construction,
            renovation and interior design projects.
          </p>

        </div>

      </section>

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-600">
                    {project.category}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Building Spaces That Inspire
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Our projects reflect innovation, quality workmanship
            and modern architectural excellence across residential,
            commercial and interior design sectors.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Projects