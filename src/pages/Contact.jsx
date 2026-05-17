import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Contact() {
  return (
    <div>

      <Navbar />

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Get in touch with Jothis Construction for modern,
            reliable and high-quality construction solutions.
          </p>

        </div>

      </section>

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          <div>

            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <div className="bg-yellow-400 p-4 rounded-full text-black text-xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      +91 9876543210
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-yellow-400 p-4 rounded-full text-black text-xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      info@jothisconstruction.com
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-yellow-400 p-4 rounded-full text-black text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Address
                    </h3>

                    <p className="text-gray-600">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.189012144408!2d76.955832!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b5fcb5e7cb%3A0x9f2e6d5b7a1b2f6f!2sCoimbatore!5e0!3m2!1sen!2sin!4v1715580000000!5m2!1sen!2sin"

                width="100%"
                height="350"

                allowFullScreen=""
                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Contact