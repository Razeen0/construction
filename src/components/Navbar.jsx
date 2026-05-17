import { useState } from "react"
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-yellow-400">
          Jothis Construction
        </h1>

        <div className="hidden md:flex gap-8">

          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>

        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>

      )}

    </nav>
  )
}

export default Navbar