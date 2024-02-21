import PropTypes from "prop-types";
// components
import { LinearProgress } from "./LinearProgress";
import { StepsDescriptions } from "./StepsDescriptions";

export const Steps = ({ currentStep, steps }) => (
  <article className="font-lato bg-neutrals-200 py-4">
    <StepsDescriptions currentStep={currentStep} steps={steps} />

    <LinearProgress
      currentStep={currentStep}
      steps={steps}
    />
  </article>
);

Steps.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
};
