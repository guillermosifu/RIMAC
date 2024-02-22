import { LeftIconDisabled } from "@/assets/icons/LeftIcon";
import { RightIcon } from "@/assets/icons/RightIcon";

export const ControlSlider = ({ prevSlider, nextSlider, quantitySliders, actualSlide }) => {
  return (
    <div className="flex  items-center gap-3">
      <button className="button" onClick={prevSlider}>
        <LeftIconDisabled />
      </button>
      <h4 className="font-normal">
        {actualSlide} / {quantitySliders}
      </h4>
      <button className="button" onClick={nextSlider}>
        <RightIcon />
      </button>
    </div>
  );
};
