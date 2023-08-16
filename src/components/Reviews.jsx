import Image from 'next/image';
import React from 'react'
// import { BsArrowRight } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="w-full mx-auto flex flex-col white py-8 h-[400px]  md:h-screen pl-8 md:pl-16 items-center space-y-6">
      <div className="left-section md:w-1/2 mx-auto md:items-center flex flex-col space-y-6 pt-10 md:pt-20 ">
        <div className="w-44 sm:mx-auto border-none h-[3px] bg-gradient-to-r from-secondary to-black/80 flex-none"></div>
        <p className="md:w-6/12 sm:w-3/4 sm:mx-auto text-black font-semibold text-sm md:text-lg">
          &quot;Our expert team of real estate agents is dedicated to providing
          exceptional service tailored to your needs. We&apos;ll guide you
          through the entire process, ensuring a seamless and stress-free
          experience from start to finish.&quot;
        </p>
      </div>
      <div className=" sm:w-1/2 mx-auto flex space-x-6 pt-6 items-center ">
        <div
          className="w-1/3 flex flex-col md:flex-row space-x-4 h-16 justify-center items-center px-2
          py-8 hover:bg-blackgroup"
        >
          <Image
            src="/images/artist3.jpg"
            alt="Reviewer"
            width={50}
            height={50}
            className="rounded-full w-14 h-14"
          />
          <div className="flex flex-col justify-center">
            <h4 className="reviewer-name font-bold text-sm group-hover:text-white">
              Alice Britney
            </h4>
            <p className="text-[#979797] text-sm">Client</p>
          </div>
        </div>

        <div className="w-1/3 flex flex-col md:flex-row space-x-4 h-16 justify-center
          items-center px-2 py-8 hover:bg-black group">
          <Image
            src="/images/artist3.jpg"
            alt="Reviewer"
            width={50}
            height={50}
            className="rounded-full w-14 h-14"
          />
          <div className="flex flex-col justify-center">
            <h4 className="reviewer-name font-bold text-sm group-hover:text-white">
              Enid Bett
            </h4>
            <p className="text-[#979797] text-sm">Client</p>
          </div>
        </div>

        <div className="w-1/3 flex flex-col md:flex-row space-x-4 h-16 justify-center items-center
        px-2 py-8 hover:bg-black group">
          <Image
            src="/images/artist3.jpg"
            alt="Reviewer"
            width={50}
            height={50}
            className="rounded-full w-14 h-14"
          />
          <div className="flex flex-col justify-center">
            <h4 className="reviewer-name font-bold text-sm group-hover:text-white">
              Brian Nene
            </h4>
            <p className="text-[#979797] text-sm">Client</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews