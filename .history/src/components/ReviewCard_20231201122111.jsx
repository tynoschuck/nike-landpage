import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
        src={imgURL} 
        alt="customer" 
        className="rounded-full object-cover"
        width={120}
        height={120} 
      />
      <p>{feedback}</p>
      <div>
        <img 
        src={star} 
        alt="star" 
        className="object-contain m-0"
        width={24}
        height={24}
        />
      </div>
    </div>
  )
}

export default ReviewCard