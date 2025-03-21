export default function VoteCard({
  onClickRating,
  onClickSubmit,
  ratingValue,
}: {
  onClickRating: (rating: number) => void;
  onClickSubmit: () => void;
  ratingValue: number;
}) {
  return (
    <>
      <div className="bg-light-grey/5 w-[50px] h-[50px] flex justify-center items-center rounded-full">
        <img src="icon-star.svg" alt="star-icon" className="h-[50%] w-[50%]" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-white font-bold text-xl">How did we do?</div>
        <div className="text-light-grey font-light text-[15px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
      </div>
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((rating) => {
          return (
            <div
              key={rating}
              onClick={() => onClickRating(rating)}
              className={`bg-light-grey/5 w-[50px] h-[50px] hover:bg-white hover:cursor-pointer hover:text-dark-blue ${
                ratingValue === rating
                  ? `bg-orange text-dark-blue`
                  : ` text-light-grey`
              }  font-bold flex justify-center items-center rounded-full`}
            >
              {rating}
            </div>
          );
        })}
      </div>
      <div
        onClick={() => onClickSubmit()}
        className="bg-orange h-[40px] w-[100%] hover:bg-white hover:cursor-pointer active:bg-orange rounded-3xl flex justify-center items-center font-bold text-dark-blue"
      >
        SUBMIT
      </div>
    </>
  );
}
