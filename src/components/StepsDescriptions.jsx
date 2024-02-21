export const StepsDescriptions = ({ steps, currentStep }) => (
  <div className="hidden md:flex justify-center items-center">
    {steps &&
      steps.length > 0 &&
      steps.map((step, index) => (
        <article className="flex items-center" key={index}>
          <div
            className={`flex gap-3 items-center ${
              currentStep !== index && "text-neutrals-600"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-center 
                              ${
                                currentStep !== index
                                  ? "border border-neutrals-600"
                                  : "bg-blueBerry text-white"
                              }`}
            >
              <h4>{index + 1}</h4>
            </div>
            <h4>{step}</h4>
          </div>

          {steps.length - 1 !== index && (
            <div className="flex gap-1 mx-4">
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
              <div className="w-[6px] h-1 bg-blueBerry rounded-3xl" />
            </div>
          )}
        </article>
      ))}
  </div>
);
