function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd')",
      }}
    >

      <div className="bg-black/60 w-full h-full flex items-center">

        <div className="max-w-7xl mx-auto px-4 text-white">

          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight">
            Building Your Dream Projects
          </h1>

          <p className="mt-6 text-lg max-w-xl text-gray-300">
            We provide modern construction solutions with innovation,
            quality and trusted engineering excellence.
          </p>

          <button className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition">
            Get Started
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero