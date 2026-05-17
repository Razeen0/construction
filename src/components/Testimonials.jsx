function Testimonials() {

  const testimonials = [
    {
      name: "Arun Kumar",
      review:
        "Jothis Construction delivered our commercial project with exceptional quality and professionalism.",
    },

    {
      name: "Vignesh",
      review:
        "Their interior design and renovation work completely transformed our office space.",
    },

    {
      name: "Rahul",
      review:
        "Professional team, timely delivery and excellent project management throughout the process.",
    },
  ]

  return (
    <section
      className="py-20 bg-gray-100"
      data-aos="fade-right"
    >

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted by clients for quality construction and reliable service.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >

              <p className="text-gray-600 leading-relaxed mb-6">
                \"{item.review}\"
              </p>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials