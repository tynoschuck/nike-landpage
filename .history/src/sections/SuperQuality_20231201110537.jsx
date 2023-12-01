import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span> <span className="text-coral-red">Quality</span> Shoes

        </h2>
        <p className="fmt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aliquid laudantium, accusantium voluptatum velit reprehenderit!</p>
        <Button label='View Details' />
      </div>
    </section>
  )
}

export default SuperQuality