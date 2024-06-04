import Link from "next/link";
import Filter from "./Filter";

const destinations = [
  {
    name: "Spain",
    href: "/destination"
  },
  {
    name: "Turkey",
    href: "/destination"
  },
  {
    name: "Switzerland",
    href: "/destination"
  },
  {
    name: "England",
    href: "/destination"
  },
  {
    name: "Germany",
    href: "/destination"
  },
  {
    name: "America",
    href: "/destination"
  },
]

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[561px] bg-no-repeat bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: `url("./hero.svg")`}}
    >
      <div className="text-center flex flex-col items-center mt-32">
        <h1 className="md:text-5xl text-4xl font-semibold text-white">Programmes d&apos;études à l&apos;étranger</h1>
        <p className="md:text-2xl text-xl max-w-[350px] text-white">Choisissez votre destination et confiez-nous le reste</p>
        <Filter />
        <div className="flex space-x-4 mt-4 items-center justify-center text-white text-xl font-medium">
          <h3>Popular Destinations:</h3>
          {destinations.map((dest) => (
            <Link href={"/destinations"} key={dest.href} className="hover:underline hover:opacity-75 transition">
              {dest.name}
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Hero;
  