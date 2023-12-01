import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          width={772} 
          height={687} 
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span> <span className="text-coral-red">Quality</span> Shoes

        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut numquam dolores et accusamus, nam perferendis nulla voluptatum ipsa aliquam natus suscipit inventore assumenda debitis nihil consectetur.</p>
        <p className="mt-6 lg:max-w-lg info-text">Ad placeat delectus itaque! Fugiat, fuga?</p>
        <div className="mt-11">
          <Button label='View Details' /></div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img 
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain" 
          />
        </div>
    </section>
  )
}

export default SpecialOffer