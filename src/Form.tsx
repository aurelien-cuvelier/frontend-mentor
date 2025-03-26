import { useRef, useState } from "react";

import Dropzone from "react-dropzone";

import logoFull from "./assets/images/logo-full.svg";
import uploadIcon from "./assets/images/icon-upload.svg";
import infoIcon from "./assets/images/icon-info.svg";
import { FormData } from "./App";

export default function Form({
  onSubmitClick,
}: {
  onSubmitClick: (data: FormData) => void;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);

  function onFileSelection(files: File[]): void {
    setFile(files[0]);
  }

  return (
    <>
      {" "}
      <div className="flex flex-col items-center !my-10 w-[100%]">
        <img src={logoFull} alt="logo-full" />
        <p className="text-white font-inconsolata text-[3.6em] font-extrabold text-center max-w-[780px] !mt-[57px] leading-17">
          Your Journey to Coding Conf 2025 Starts Here!
        </p>
        <p className="text-white font-inconsolata text-[23px] text-center !mt-[20px]">
          Secure your spot at next year's biggest coding conference.
        </p>
        <form className="z-1 flex flex-col justify-around items-center text-white text-xl !mt-[40px] lg:!w-[456px]">
          <div className="flex flex-col gap-y-2 w-[100%]">
            Upload Avatar
            <Dropzone
              multiple={false}
              onDrop={(acceptedFiles) => onFileSelection(acceptedFiles)}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="border-dashed border-white border-2 rounded-2xl hover:cursor-pointer">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="!px-6 !py-4.5 text-white font-inconsolata text-[18px] text-center flex flex-col justify-center items-center gap-3.5 bg-white/5 hover:bg-white/10 active:bg-white/15">
                      <div className="bg-white/15 border-grey border-solid border-1 rounded-xl">
                        <img
                          className="!p-2"
                          src={uploadIcon}
                          alt="upload-icon"
                        />
                      </div>
                      {file?.name || "Drag and drop or click to upload"}
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
            <div className="flex text-[13px] gap-x-2">
              <img src={infoIcon} alt="info-icon" />
              Upload your photo (JPG or PNG, max size: 500KB).
            </div>
          </div>
          <div className="flex flex-col !w-[100%] !mt-7 !gap-y-7.5">
            <div className="flex flex-col text-[18px] gap-y-2.5">
              Full Name
              <input
                ref={fullNameRef}
                className="h-[50px] bg-white/10 rounded-lg border-white border-solid border-[1px] !px-2"
                type="text"
              />
            </div>
            <div className="flex flex-col text-[18px] gap-y-2">
              Email Address
              <input
                ref={emailRef}
                className="h-[50px] bg-white/10 rounded-lg border-white border-solid border-[1px] !px-2"
                type="text"
                placeholder="example@email.com"
              />
            </div>
            <div className="flex flex-col text-[18px] gap-y-2">
              Github Username
              <input
                ref={githubRef}
                className="h-[50px] bg-white/10 rounded-lg border-white border-solid border-[1px] !px-2"
                type="text"
                placeholder="@yourusername"
              />
            </div>
            <div
              onClick={() => {
                if (
                  !file ||
                  !fullNameRef?.current?.value ||
                  !emailRef?.current?.value ||
                  !githubRef?.current?.value
                ) {
                  alert("Incomplete form!");
                  return;
                }
                onSubmitClick({
                  file,
                  fullName: fullNameRef.current.value,
                  email: emailRef.current.value,
                  github: githubRef.current.value,
                });
              }}
              className="flex items-center justify-center hover:cursor-pointer h-[50px] bg-orange-700 rounded-xl !text-neutral-900 font-bold text-[19px] border-neutral-900 border-solid border-[1px]"
            >
              Generate My Ticket
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
