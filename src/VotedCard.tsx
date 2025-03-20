export default function VotedCard({ rating }: { rating: number }) {
  return (
    <>
      <div className=" h-[100%] !py-3.5 flex flex-col justify-between items-center">
        <img
          className="w-[150px] h-auto"
          src="./illustration-thank-you.svg"
          alt="thank-you-image"
        />
        <div className="bg-light-grey/5 h-[30px] text-[15px] font-extralight !px-6 flex justify-center items-center  text-orange rounded-full">
          You selected {rating} out of 5
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="text-white font-bold text-2xl">Thank you!</div>
          <div className="text-light-grey font-light text-[15px] text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </div>
        </div>
      </div>
    </>
  );
}
