import { useState } from "react";

import Form from "./Form";
import Ticket from "./Ticket";

export interface FormData {
  file: File;
  fullName: string;
  email: string;
  github: string;
}

function App() {
  const [formData, setFormData] = useState<FormData | undefined>({
    file: null as unknown as File,
    fullName: "Jonatan Kristof",
    email: "aurelien.cuvelier@gmail.com",
    github: "aurelien-cuvelier",
  });
  const [submitted, setSubmitted] = useState(false);

  function onSubmitClick(data: FormData): void {
    setFormData(data);
    setSubmitted(true);
  }

  return (
    <>
      <main className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-[url(./assets/images/pattern-lines.svg),_url(./assets/images/background-mobile.png)] md:bg-[url(./assets/images/pattern-lines.svg),_url(./assets/images/background-tablet.png)] lg:bg-[url(./assets/images/pattern-lines.svg),_url(./assets/images/background-desktop.png)]">
        {submitted && formData ? (
          <Ticket formData={formData as FormData} />
        ) : (
          <Form onSubmitClick={onSubmitClick} />
        )}
        <div className="fixed z-0 top-[-80px] left-10 w-[25%] h-[25%] bg-[url(./assets/images/pattern-circle.svg)] bg-no-repeat bg-contain" />
        <div className="fixed z-0 top-135 right-62 w-[25%] h-[25%] bg-[url(./assets/images/pattern-circle.svg)] bg-no-repeat bg-contain" />
        <div className="fixed z-0 top-30 right-0 w-[25%] h-[25%] bg-[url(./assets/images/pattern-squiggly-line-top.svg)] bg-right-top bg-no-repeat bg-contain" />
        <div className="fixed z-0 bottom-0 left-0 w-[45%] h-[45%] bg-[url(./assets/images/pattern-squiggly-line-bottom-desktop.svg)] bg-left-bottom bg-no-repeat bg-contain" />
      </main>
    </>
  );
}

export default App;
