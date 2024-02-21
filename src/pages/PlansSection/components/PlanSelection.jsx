// components
import { RadioGroup } from "@mui/material";
import { CardRadio } from "./CardRadio";
// stores
import { useUserStore } from "@/stores/user.store";

export const PlanSelection = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return (
    <RadioGroup
      onChange={({ target }) => setUser({ [target.name]: target.value })}
      value={user.plan}
      name="plan"
    >
      <div className="flex flex-col md:flex-row gap-7">
        <CardRadio
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon="protection"
          value="personal"
          group={user.plan}
          name="plan"
          hola="asdasd"
        />
        <CardRadio
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon="healing"
          value="familiar"
          group={user.plan}
          name="plan"
          hola="asdasd"
        />
      </div>
    </RadioGroup>
  );
};
