import { useState } from "react";
import VoteCard from "./VoteCard";
import VotedCard from "./VotedCard";

function App() {
  const [ratingValue, changeRatingValue] = useState(-1);

  function handleVoteClick(vote: number) {
    changeRatingValue(vote);
  }

  return (
    <main className="min-h-screen min-w-screen bg-very-dark-blue flex justify-center items-center font-overpass">
      <div className="w-[400px] h-[400px] !py-7 !px-8 bg-[radial-gradient(ellipse_at_top,_var(--color-gradient-lighter),_var(--color-gradient-darker))] rounded-3xl flex flex-col justify-between">
        {ratingValue === -1 ? (
          <VoteCard onClickFunc={handleVoteClick} />
        ) : (
          <VotedCard rating={ratingValue} />
        )}
      </div>
    </main>
  );
}

export default App;
