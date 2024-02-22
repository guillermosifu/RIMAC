import PropTypes from "prop-types";
// components
import { Button } from "@/components/Button";
// hooks
import { useSelectPlan } from "@/hooks/useSelectPlan";
// layouts
import { WhiteCard } from "@/layouts/WhiteCard";
// assets
import { HomeLightIcon } from "@/assets/icons/HomeLightIcon";
import { HospitalLightIcon } from "@/assets/icons/HospitalLightIcon";

const iconsValidation = {
  home: <HomeLightIcon />,
  hospital: <HospitalLightIcon />,
};

export const CardDescription = ({ icon, isRecomended, data }) => {
  const { name, description } = data;
  const { price, handleSelectPlan } = useSelectPlan({ data })

  return (
    <WhiteCard className="flex flex-col justify-between items-center max-w-[288px] min-h-[687px] h-full grow mx-auto py-8">
      <article className="flex flex-col justify-start mt-4 font-lato w-[257px] px-2 relative">
        {isRecomended && (
          <h6 className="bg-greenAqua text-neutrals-900 py-[2px] px-2 w-max font-black rounded-md mb-3 absolute -top-7">
            Plan recomendado
          </h6>
        )}

        <div className="flex justify-between gap-4">
          <span>
            <h2 className="mb-4">{name}</h2>
            <h6 className="text-neutrals-600">Costo del plan</h6>
            <h2>${price} al mes</h2>
          </span>

          {iconsValidation[icon]}
        </div>

        <div className="w-full h-[1px] bg-neutrals-300 my-4" />

        <ul className="px-6">
          {description &&
            description.length > 0 &&
            description.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </article>

      <Button
        onClick={handleSelectPlan}
        sx={{
          backgroundColor: "#FF1C44",
          padding: "14px 32px",
          width: "100%",
          marginTop: "3rem",
          "&:hover": {
            backgroundColor: "#FF1C44",
            color: "#fff",
          },
        }}
      >
        Seleccionar plan
      </Button>
    </WhiteCard>
  );
};

CardDescription.propTypes = {
  icon: PropTypes.string,
  data: PropTypes.object,
  isRecomended: PropTypes.bool,
};
