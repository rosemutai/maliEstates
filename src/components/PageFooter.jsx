import { BsArrowRight, BsBuildings, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const PageFooter = () => {
  return (
    <div className="w-full bg-black py-14 flex flex-col px-8 md:px-16 space-y-12">
      <div className="row-one flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-white flex font-semibold text-xl md:text-2xl">
          Make your dreams a{" "}
          <span className="text-secondary ml-1">reality</span>
        </h2>
        <button
          className="bg-secondary text-white group
            px-6 py-3 text-center md:52 md:w-40  flex justify-center items-center hover:bg-white hover:text-secondary
            hover:border hover:border-secondary transition-all duration-200 "
        >
          Learn more
          <BsArrowRight className="text-secondary group-hover:text-black ml-2" />
        </button>
      </div>

      <hr className="border-x-0 border-t-0 border-b border-b-greyish/20" />
      <div className="row-two flex flex-col md:flex-row justify-between text-white">
        <div className="colomn-one flex flex-col space-y-6 mt-4 md:mt-0">
          <div className="w2 flex items-center">
            <BsBuildings className="text-secondary text-xl" />
            <h1 className="text-white ml-2 font-bold text-xl">maliEstates</h1>
          </div>
          <div className="social-icons flex space-x-3 text-white">
            <BsFacebook className="text-xl p-0 hover:shadow-xl hover:text-secondary hover:shadow-secondary cursor-pointer" />
            <BsTwitter className="text-xl p-0 hover:shadow-xl hover:text-secondary hover:shadow-secondary cursor-pointer" />
            <BsInstagram className="text-xl p-0 hover:shadow-xl hover:text-secondary hover:shadow-secondary cursor-pointer" />
          </div>
        </div>

        <div className="column-two flex flex-col space-y-3 mt-4 md:mt-0">
          <h5 className="font-bold text-base md:text-lg text-secondary md:text-white">
            Links
          </h5>
          <div className="links flex flex-col space-y-3">
            <Link href="/">Top</Link>
            <Link href="/">Listings</Link>
            <Link href="/">About us</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        <div className="column-three flex space-y-3 flex-col mt-4 md:mt-0">
          <h5 className="font-bold text-base md:text-lg text-secondary md:text-white">
            About Us
          </h5>
          <div className="links flex flex-col space-y-3">
            <Link href="/">Our Story</Link>
            <Link href="/">Work with us</Link>
            <Link href="/">Mission</Link>
            <Link href="/">Vision</Link>
          </div>
        </div>

        <div className="column-four flex flex-col space-y-3 mt-4 md:mt-0">
          <h5 className="font-bold text-base md:text-lg text-secondary md:text-white">
            Contact
          </h5>
          <div className="links  flex flex-col space-y-3">
            <p>Address: P.o BOX 134 Nairobi</p>
            <p>Phone: +254 745 344 353</p>
            <p>Email: maliestates@gmail.com</p>
            <p>Maps: Nairobi Mbile Street</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter