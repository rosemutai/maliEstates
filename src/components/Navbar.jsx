'use client'

// import Link from "next/link"
import { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { CiMenuFries } from 'react-icons/ci'
import { FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import * as Scroll from "react-scroll";
import { Link } from 'react-scroll'


const Navbar = () => {

  const [isShowing, setIsShowing] = useState(false)

  return (
    <section className="w-full flex justify-between h-24 bg-transparent items-center px-8 md:px-16 ">
      <div className="w2 flex justify-between w-full">
        <div className="w2 flex items-center">
          <BsBuildings className="text-secondary text-xl" />
          <h1 className="text-white ml-2 font-bold text-sm md:text-xl">
            maliEstates
          </h1>
        </div>
        {isShowing ? (
          <FaTimes
            className="md:hidden font-bold text-2xl text-secondary"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          />
        ) : (
          <CiMenuFries
            className="md:hidden font-bold text-2xl text-secondary"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          />
        )}
      </div>
      <div className="nav-links desktop hidden md:flex space-x-6 text-white items-center">
        <Link
          href="/"
          className="hover:text-secondary transition-all duration-200 hover:border-b hover:border-secondary"
        >
          Home
        </Link>
        <Link
          to="aboutSection" spy={true} smooth={true} offset={50} duration={500}
          className="hover:text-secondary transition-all duration-200 hover:border-b hover:border-secondary"
        >
          About
        </Link>
        <Link
          href="/"
          className="hover:text-secondary transition-all duration-200 hover:border-b hover:border-secondary"
        >
          Listings
        </Link>

        <Link
          href="/"
          className="hover:text-secondary transition-all duration-200 hover:border-b hover:border-secondary"
        >
          Testimonies
        </Link>
        <Link
          href="/contact"
          className="bg-secondary text-white rounded-md px-6 py-2 text-center w-36 flex  group justify-center
            items-center hover:bg-white hover:text-secondary border-none transition-all duration-200 "
        >
          Contact Us
        </Link>
      </div>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="nav-links mobile h-screen md:hidden flex flex-col space-y-12 text-white bg-secondary
          top-16 pl-3 right-0 w-[70%] absolute z-20 backdrop-blur-md transition ease-in-out"
        >
          <Link href="/" className="text-white transition-all duration-200">
            Home
          </Link>
          <Link href="/" className="text-white transition-all duration-200">
            About
          </Link>
          <Link href="/" className="text-white transition-all duration-200">
            Listings
          </Link>

          <Link href="/" className="text-white transition-all duration-200 ">
            Testimonies
          </Link>
          <Link
            href="/contact"
            className="text-secondary bg-white rounded-md px-6 py-2 text-center w-36 flex  group justify-center
              items-center hover:border-b-white hover:text-secondary border-none transition-all duration-200 "
          >
            Contact Us
          </Link>
        </div>
      </Transition>
    </section>
  );
}

export default Navbar