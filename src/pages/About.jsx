import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {
  return (
    <div>

      <Navbar />

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Us
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Jothis Construction is dedicated to delivering innovative,
            high-quality and reliable construction solutions for residential
            and commercial projects.
          </p>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

          <div>

           <img
  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  alt="construction"
  className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
/>

          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Building Excellence Since 2010
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We specialize in residential construction, commercial buildings,
              interior design and renovation projects with a strong focus on
              quality and client satisfaction.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our experienced team combines modern technology, innovative
              planning and premium materials to deliver exceptional results.
            </p>

          </div>

        </div>

      </section>

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Mission & Vision
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide high-quality construction services with innovation,
                integrity and customer satisfaction.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To become a trusted leader in the construction industry through
                excellence and sustainable development.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-black text-white p-8 rounded-2xl">

              <h2 className="text-5xl font-bold text-yellow-400">
                15+
              </h2>

              <p className="mt-4">
                Years Experience
              </p>

            </div>

            <div className="bg-black text-white p-8 rounded-2xl">

              <h2 className="text-5xl font-bold text-yellow-400">
                250+
              </h2>

              <p className="mt-4">
                Completed Projects
              </p>

            </div>

            <div className="bg-black text-white p-8 rounded-2xl">

              <h2 className="text-5xl font-bold text-yellow-400">
                120+
              </h2>

              <p className="mt-4">
                Happy Clients
              </p>

            </div>

            <div className="bg-black text-white p-8 rounded-2xl">

              <h2 className="text-5xl font-bold text-yellow-400">
                50+
              </h2>

              <p className="mt-4">
                Expert Engineers
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default About