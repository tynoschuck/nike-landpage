const Shoecard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'}`}>
    </div>
  )
}

export default Shoecard