
import { BsArrowDownCircle } from "react-icons/bs";
import Navbar from "./Navbar";

const TopBanner = () => {

  return (
    <section className="w-full relative flex flex-col h-[600px] bg-hero-pattern bg-center
      bg-cover bg-no-repeat space-y-24">
        
      <Navbar />
      <div className="ad-text px-8 md:px-16">
        <div className="text-white text-5xl font-bold leading-[4rem]">
          <h1>Beautiful</h1>
          <h1>homes made</h1>
          <h1>for you</h1>
        </div>
        <p className="text-white/90 w-full md:w-[45%] text-sm my-6">
          Explore a wide range of properties in sought-after neighborhoods, from
          vibrant city centers to tranquil suburban escapes. Whether you crave
          the buzz of city life or the serenity of nature, we have the perfect
          location for you.
        </p>
      </div>
      <div
        className="absolute -bottom-5 md:-bottom-10 w-[90%] md:w-1/2 mx-auto rounded-md flex
        items-center h-12 md:h-24 inset-x-5 md:inset-x-1/4 
        bg-secondary white pt-2 pl-4 shadow-md shadow-secondary"
      >
        <button className="bg-transparent text-white ck flex justify-between items-center">
          See all Listings
          <BsArrowDownCircle className="text-white ml-2" />
        </button>
      </div>
    </section>
  );
}

export default TopBanner