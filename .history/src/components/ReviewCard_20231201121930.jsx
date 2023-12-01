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
    </div>
  )
}

export default ReviewCard