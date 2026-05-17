function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Jothis Construction
          </h2>

          <p className="text-gray-300">
            Building modern spaces with quality, trust and innovation.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            Chennai, Tamil Nadu
          </p>

          <p className="text-gray-300">
            +91 9876543210
          </p>

          <p className="text-gray-300">
            info@jothisconstruction.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Jothis Construction. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer