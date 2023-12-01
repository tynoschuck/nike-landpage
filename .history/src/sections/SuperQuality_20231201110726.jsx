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
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut numquam dolores et accusamus, nam perferendis nulla voluptatum ipsa aliquam natus suscipit inventore assumenda debitis nihil consectetur.</p>
        <p className="mt-6 lg:max-w-lg info-text">Ad placeat delectus itaque! Fugiat, fuga?</p>
        <Button label='View Details' />
      </div>
    </section>
  )
}

export default SuperQuality