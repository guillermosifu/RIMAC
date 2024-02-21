import { usePlans } from "@/hooks/usePlans";
import { useUserStore } from "@/stores/user.store";
import { CardDescription } from "./CardDescription";

export const PlansDescriptions = () => {
  const user = useUserStore((state) => state.user);

  const { data } = usePlans();
  
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data &&
        data.length > 0 &&
        user.plan &&
        data.map((plan, index) => (
          <CardDescription
            key={index}
            icon={index % 2 === 0 ? "home" : "hospital"}
            isRecomended={index % 2 !== 0}
            data={plan}
          />
        ))}
    </article>
  );
};
