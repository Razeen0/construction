import { FaHardHat, FaBuilding, FaClock, FaTools } from "react-icons/fa"

function WhyChooseUs() {

  const features = [
    {
      icon: <FaHardHat />,
      title: "Experienced Team",
      description:
        "Professional engineers and builders delivering trusted construction solutions.",
    },

    {
      icon: <FaBuilding />,
      title: "Modern Infrastructure",
      description:
        "Advanced construction methods and innovative architectural planning.",
    },

    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description:
        "Efficient project management ensuring timely completion of every project.",
    },

    {
      icon: <FaTools />,
      title: "Quality Materials",
      description:
        "Premium-grade materials ensuring durability and long-term reliability.",
    },
  ]

  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-gray-400 mt-4">
            We combine innovation, quality and expertise to build exceptional projects.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl text-center hover:-translate-y-2 transition duration-300"
            >

              <div className="text-yellow-400 text-5xl mb-6 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs