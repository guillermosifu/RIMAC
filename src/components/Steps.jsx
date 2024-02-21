import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types'
import { ReturnButton } from './ReturnButton';
import { useUserStore } from '@/stores/user.store';

export const Steps = ({ currentStep, steps }) => {
  const calculateProgress = Math.round(((currentStep + 1) / steps.length) * 100)
  const resetUser = useUserStore(state => state.resetUser)

  return (
    <article className="font-lato bg-neutrals-200 py-4">
      <span className='hidden md:flex justify-center items-center'>
        {steps && steps.length > 0 && steps.map((step, index) => (
          <article className='flex items-center' key={index}>
            <div className={`flex gap-3 items-center ${currentStep !== index && 'text-neutrals-600'}`}>
              <div className={`w-6 h-6 rounded-full text-center 
                              ${currentStep !== index ? 
                              "border border-neutrals-600" : 
                              "bg-blueBerry text-white"}`}
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
      </span>

      <div className='md:hidden px-6 flex gap-4 items-center'>
        <span className='flex gap-2 items-center'>
          <ReturnButton onClick={currentStep == 0 && resetUser} className="w-max" />
          <h6 className='font-black text-[10px] min-w-max tracking-[.8px] leading-[16px] uppercase'>Paso {currentStep + 1} de {steps.length}</h6>
        </span>
        <div className='w-full'>
            <LinearProgress 
              sx={{
                backgroundColor: "#D7DBF5",
                borderRadius: '10px',
                height: "6px",
                color: "#000"
              }} 
              variant="determinate" 
              value={calculateProgress} 
            />
        </div>
      </div>
    </article>
  );
};

Steps.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
}