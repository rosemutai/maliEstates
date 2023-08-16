import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Subscribe = () => {
  return (
    <div className="w-full mx-auto flex flex-col bg-black h-[400px] py-12 pl-8 md:pl-16
      md:items-center space-y-6">
      {/* <div className="left-section w-1/2 mx-auto flex flex-col space-y-6 pt-20 "> */}
      <div
        className="w-32 border-none border-x-0 borderb2 h-[3px] border-bsecondary
        bg-gradient-to-r from-secondary to-greyish/50"
      ></div>
      <h2 className="text-white font-semibold text-xl md:text-3xl">
        You&apos;re in good hands
      </h2>
      <p className="md:w-3/12 w-full sm:w-3/4 md:mx-auto md:text-enter text-white text-sm">
        Our expert team of real estate agents is dedicated to providing
        exceptional service tailored to your needs. We&apos;ll guide you through
        the entire process, ensuring a seamless and stress-free experience from
        start to finish. We believe that every property journey is unique.
      </p>
      <button
        className="bg-secondary text-white group
            px-6 py-3 text-center w-40 flex justify-center items-center hover:bg-white hover:text-secondary
            hover:border hover:border-secondary transition-all duration-200 "
      >
        Learn more
        <BsArrowRight className="text-secondary group-hover:text-black ml-2" />
      </button>
      {/* </div> */}
    </div>
  );
}

export default Subscribe;