import { useState } from "react";

export function ShopButton() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleStyleAndStepChange = (n: number) => {
    setCurrentStep(n);
  };

  const handleNextStep = () => {
    if (currentStep >= 3) return;
    setCurrentStep((prevCS) => prevCS + 1);
  };

  return (
    <div className="flex gap-5 font-poppins">
      <div onClick={() => handleStyleAndStepChange(1)} className="group">
        <label
          htmlFor="radio1"
          className={`relative flex items-center justify-center py-3 px-6 rounded-lg cursor-pointer group-hover:bg-newgolden transition-all 
            ${currentStep == 1 ? "bg-newgolden" : "bg-newwhite-600"}`}
        >
          <input
            type="radio"
            id="radio1"
            name="radio"
            value="1"
            className="sr-only"
          />
          <span
            className={`text-lg group-hover:text-white  ${
              currentStep == 1 ? "text-white" : "text-black"
            }`}
          >
            1
          </span>
        </label>
      </div>

      <div onClick={() => handleStyleAndStepChange(2)} className="group">
        <label
          htmlFor="radio2"
          className={`relative flex items-center justify-center py-3 px-6 rounded-lg cursor-pointer group-hover:bg-newgolden transition-all 
            ${currentStep == 2 ? "bg-newgolden" : "bg-newwhite-600"}`}
        >
          <input
            type="radio"
            id="radio2"
            name="radio"
            value="2"
            className="sr-only"
          />
          <span
            className={`text-lg group-hover:text-white  ${
              currentStep == 2 ? "text-white" : "text-black"
            }`}
          >
            2
          </span>
        </label>
      </div>

      <div onClick={() => handleStyleAndStepChange(3)} className="group">
        <label
          htmlFor="radio3"
          className={`relative flex items-center justify-center py-3 px-6 rounded-lg cursor-pointer group-hover:bg-newgolden transition-all 
            ${currentStep == 3 ? "bg-newgolden" : "bg-newwhite-600"}`}
        >
          <input
            type="radio"
            id="radio3"
            name="radio"
            value="3"
            className="sr-only"
          />
          <span
            className={`text-lg group-hover:text-white  ${
              currentStep == 3 ? "text-white" : "text-black"
            }`}
          >
            3
          </span>
        </label>
      </div>

      <button
        className="py-3 px-6 rounded-lg cursor-pointer bg-newwhite-600 hover:bg-newgolden hover:text-white transition-all"
        onClick={() => handleNextStep()}
      >
        Next
      </button>
    </div>
  );
}
