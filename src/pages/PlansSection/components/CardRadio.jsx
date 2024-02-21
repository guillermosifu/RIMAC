import PropTypes from "prop-types";
// components
import { Radio } from "@/components/Radio";
// layouts
import { WhiteCard } from "@/layouts/WhiteCard";
// stores
import { useUserStore } from "@/stores/user.store";
// assets
import { PersonHealingIcon } from "@/assets/icons/PersonHealingIcon";
import { PersonProtectionIcon } from "@/assets/icons/PersonProtectionIcon";

const iconsValidation = {
  protection: <PersonProtectionIcon />,
  healing: <PersonHealingIcon />,
};

export const CardRadio = ({
  title,
  icon,
  description,
  group,
  name,
  ...props
}) => {
  const setUser = useUserStore((state) => state.setUser);

  return (
    <div
      onClick={() => setUser({ [name]: props.value })}
      className={`border-[3.5px] rounded-3xl 
                ${
                  group == props.value ? "border-black" : "border-transparent"
                }`}
    >
      <WhiteCard>
        <div className="w-full md:w-[225px] p-2 relative">
          <div className="flex justify-end">
            <Radio className="absolute -top-3 -right-1 z-20" {...props} />
          </div>
          <div className="flex flex-col justify-start mt-4 gap-3 md:gap-2">
            <span className="flex items-center md:items-start md:flex-col gap-2">
              {iconsValidation[icon]}
              <h2>{title}</h2>
            </span>
            <p>{description}</p>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};

CardRadio.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  group: PropTypes.any,
  description: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};
