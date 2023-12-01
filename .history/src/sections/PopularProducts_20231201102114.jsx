import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Lorem <span className="text-coral-red
        ">ipsum</span> dolor sit amet </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat">Deleniti aliquid, dolorum quod velit possimus quibusdam sed sit voluptatum hic minima. </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"></div>
    </section>
  )
}

export default PopularProducts