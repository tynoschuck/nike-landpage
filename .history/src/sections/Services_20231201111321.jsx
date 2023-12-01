import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <div key={index} className="w-full max-w-lg">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            {service.title}
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            {service.description}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Services
