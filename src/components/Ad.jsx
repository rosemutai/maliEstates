import { BsArrowRight } from "react-icons/bs";

const Ad = () => {
  return (
    <div
      id="aboutSection"
      data-aos="fade-in"
      className="w-full mx-auto flex md:flex-row flex-col justify-between h-screen
      space-y-12 md:space-y-0  mt-12 pl-8 md:pl-16 items-center"
    >
      <div
        className="left-section w-full md:w-[40%] h-[500px] rounded-l-none md:rounded-tr-3xl rounded-br-none 
       shadow-lg shadow-black/20 bg-about-image bg-cover bg-center bg-no-repeat bg"
      >
        hey
      </div>
      <div
        className="right-section mt-2 md:mt-0 w-full md:w-1/2 flex flex-col
        pr-6 md:pr-0 space-y-4 pt-12 md:pb-0 pb-12"
      >
        <div className="w-32 border-t-0 border-x-0 border-b-2 border-b-secondary"></div>
        <h2 className="text-black font-semibold text-3xl">About Us</h2>
        <p className="w-full  md:w-7/12 text-black/80 text-sm">
          Welcome to maliEstates, your trusted partner in the world of real
          estate. We take pride in connecting individuals and families with
          their dream properties, whether for sale or rent. With a commitment to
          excellence and a passion for helping you find the perfect space, we
          are here to guide you through every step of your real estate journey.
          Whether you&apos;re searching for a new home, an investment
          opportunity, or a space to start a new chapter of your life,
          maliEstates is here to be your partner in making that vision a
          reality. With a focus on integrity, dedication, and a deep love for
          real estate, we invite you to explore our listings and embark on a
          journey that leads to your perfect property. Connect with us today and
          discover how we can help you find your place in the world of real
          estate.
        </p>
        <button
          className="bg-black text-white group
            px-6 py-3 text-center w-40 flex justify-center items-center hover:bg-white hover:text-secondary
            hover:border hover:border-secondary transition-all duration-200 "
        >
          Learn more
          <BsArrowRight className="text-secondary group-hover:text-black ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Ad;
