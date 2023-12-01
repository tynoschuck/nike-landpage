import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} height={280} width={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
      </div>
    </div>
  )
}

export default PopularProductCard