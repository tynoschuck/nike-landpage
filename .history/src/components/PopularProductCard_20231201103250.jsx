import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} height={280} width={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
      </div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default PopularProductCard