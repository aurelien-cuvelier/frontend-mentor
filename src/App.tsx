import elements from "../results-summary-component-main/data.json"
import ResultCard, { ResultElement } from "./ResultCard";

function App() {
  return <>
    <main className="min-h-screen max-w-screen bg-pale-blue font-hankenGrotesk flex justify-center items-center">
    <div className="sm:w-[650px] sm:h-[450px] min-w-[350px] w-[350px] h-[850px] bg-white rounded-3xl grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">

      {/**Left card*/}
      <div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-3xl !py-5 !px-10 flex flex-col justify-around items-center text-white">
        <div className="font-bold text-2xl text-gray-300">You Result</div>
        <div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full h-[180px] w-[180px] flex flex-col justify-center items-center gap-2.5">
          <span className="text-inherit font-extrabold text-6xl">76</span>
          <span className="font-bold text-gray-300">of 100</span>
        </div>

        <div className="font-bold text-3xl text-gray-300">Great</div>
        <div className="text-center text-gray-300">You scored higher than 65% of the people who have taken these tests.</div>
      </div>

      {/**Right card*/}
      <div className="!py-5 !px-[25px] flex flex-col justify-around items-center">
        <div className="w-[100%] text-dark-gray-blue font-bold text-2xl gap-0">Summary</div>
        <div className="w-[100%] flex flex-col gap-4.5">{elements.map((element) => <ResultCard element={element as ResultElement}/>)}</div>
          
          <button className="bg-dark-gray-blue w-[100%] h-[50px] rounded-3xl text-white font-bold cursor-pointer">Continue</button>
      </div>
      
    </div>
    </main>
  </>;
}

export default App;
