import logoFull from "./assets/images/logo-full.svg";
import iconGithub from "./assets/images/icon-github.svg";
import { FormData } from "./App";

const textGradientClassname =
  "bg-gradient-to-r from-gradient-text-start to-gradient-text-end bg-clip-text text-transparent";

export default function Ticket({ formData }: { formData: FormData }) {
  return (
    <>
      <div className="flex flex-col items-center !my-12 w-[100%]">
        <img src={logoFull} alt="logo-full" />
        <p className="text-white font-inconsolata text-[3.6em] font-extrabold text-center max-w-[780px] !mt-[57px] leading-17">
          Congrats,{" "}
          <span className={textGradientClassname}>{formData.fullName}</span>!
          Your ticket is ready.
        </p>
        <p className="text-white font-inconsolata text-[23px] text-center max-w-[500px] !mt-[26px]">
          We've emailed your ticket to{" "}
          <span className={textGradientClassname}>{formData.email}</span> and
          will send updates in the run up to the event.
        </p>
        <div className="z-10 !mt-25 !p-6.5 bg-[url(./assets/images/pattern-ticket.svg)] h-[176px] w-[360px] sm:h-[280px] sm:w-[600px] bg-contain bg-no-repeat flex justify-between text-white">
          <div className="flex flex-col justify-between !w-[89%]">
            <img
              className="w-[180px] sm:w-[280px]"
              src={logoFull}
              alt="logo-full"
            />

            <span className="text-[15px] sm:text-md sm:tracking-[2.5px] sm:!pl-14 sm:!mb-14">
              Jan 31, 2025 / Austin, TX
            </span>
            <div className="flex gap-3">
              <img
                className="h-[60px] sm:h-[80px] rounded-xl"
                src={URL.createObjectURL(formData.file)}
                alt="avatar"
              />
              <div className="flex flex-col justify-around ">
                <span className="sm:text-3xl font-bold">
                  {formData.fullName}
                </span>
                <span className="flex gap-2">
                  <img src={iconGithub} alt="icon-github" />
                  {formData.github}
                </span>
              </div>
            </div>
          </div>

          <div className="!w-[11%]">
            <div className="flex justify-center items-center w-[100%] h-[100%] text-2xl font-bold tracking-widest [writing-mode:vertical-lr]">
              #01609
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
