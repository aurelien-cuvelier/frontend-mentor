import "./index.css";
import avatar from "./social-links-profile-main/assets/images/avatar-jessica.jpeg"

function App() {
  return <main className="min-h-screen flex justify-center items-center bg-grey-900 font-inter">
    <div className="h-[650px] w-[400px] bg-grey-800 rounded-2xl flex flex-col justify-between items-center !py-10">
      <img src={avatar} className="rounded-full h-[120px] w-[120px]"/>
      <div className="flex flex-col justify-center items-center gap-1">
      <span className="text-white font-semibold text-3xl">Jessica Randall</span>
      <span className="text-lime font-semibold">London, United Kingdom</span>
      
      </div>
      <span className="text-gray-500">"Font-end developer and avid reader."</span>

      <ul className="flex flex-col w-[80%] gap-4">
        <a href=""><li className="bg-grey-700 text-white font-semibold h-12 flex justify-center items-center rounded-xl hover:bg-lime hover:text-grey-800">Github</li></a>
        <a href=""><li className="bg-grey-700 text-white font-semibold h-12 flex justify-center items-center rounded-xl hover:bg-lime hover:text-grey-800">Frontend Mentor</li></a>
        <a href=""><li className="bg-grey-700 text-white font-semibold h-12 flex justify-center items-center rounded-xl hover:bg-lime hover:text-grey-800">LinkedIn</li></a>
        <a href=""><li className="bg-grey-700 text-white font-semibold h-12 flex justify-center items-center rounded-xl hover:bg-lime hover:text-grey-800">Twitter</li></a>
        <a href=""><li className="bg-grey-700 text-white font-semibold h-12 flex justify-center items-center rounded-xl hover:bg-lime hover:text-grey-800">Instagram</li></a>
      </ul>
    </div>
  </main>;
}

export default App;
