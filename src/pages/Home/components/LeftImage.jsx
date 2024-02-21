import family from "@/assets/imgs/family.png";

export const LeftImage = () => (
  <picture className="hidden md:flex justify-end items-center">
    <img src={family} alt="family" />
  </picture>
);
