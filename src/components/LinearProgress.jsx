import { ReturnButton } from "./ReturnButton";
import { useUserStore } from "@/stores/user.store";
import { LinearProgress as LinearProgressBasic } from '@mui/material';

export const LinearProgress = ({ currentStep, steps }) => {
  const resetUser = useUserStore(state => state.resetUser)
  const calculateProgress = Math.round(((currentStep + 1) / steps.length) * 100)

  return (
    <div className="md:hidden px-6 flex gap-4 items-center">
      <span className="flex gap-2 items-center">
        <ReturnButton
          onClick={currentStep == 0 && resetUser}
          className="w-max"
        />
        <h6 className="font-black text-[10px] min-w-max tracking-[.8px] leading-[16px] uppercase">
          Paso {currentStep + 1} de {steps.length}
        </h6>
      </span>
      <div className="w-full">
        <LinearProgressBasic
          sx={{
            backgroundColor: "#D7DBF5",
            borderRadius: "10px",
            height: "6px",
            color: "#000",
          }}
          variant="determinate"
          value={calculateProgress}
        />
      </div>
    </div>
  );
};
