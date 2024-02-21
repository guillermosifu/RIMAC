import family from "@/assets/imgs/family.png";

export const DescriptionHome = () => (
  <div className="grid grid-cols-[60%_auto] md:block gap-6">
    <div>
      <span className="block w-max bg-gradient-to-r from-[#00F4E2] from-10% to-[#00FF7F] font-bold rounded-md tracking-wide px-2 py-1">
        Seguro Salud Flexible
      </span>
      <h1>Creado para ti y tu familia</h1>
    </div>
    <picture className="flex md:hidden justify-center items-center">
      <img src={family} alt="family" className="w-full h-full object-contain" />
    </picture>
  </div>
);
