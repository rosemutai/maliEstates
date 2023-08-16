'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuBedSingle, LuHash } from "react-icons/lu";
import { GiBathtub } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import supabase from "@src/app/config/supabaseClient";

const defaultSearchCriteria = {
  selectedPropertyType: "",
  selectedLocation: "",
  selectedPrice: "",
};

const PlacesToLive = () => {

  const [error, setError] = useState('')
  const [properties, setProperties] = useState([])
  const [locations, setLocations] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])
  const [prices, setPrices] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedPropertyType, setSelectedPropertyType] = useState('')
  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from('property').select('*')
      console.log("Data", data)
      if (error) {
        console.log(error);
      }
      setProperties(data)
    }

    fetchProperties()
    
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("property")
        .select("location");
      console.log("Location", data);
      if (error) {
        console.log(error);
      }
      setLocations(data);
    };

    fetchLocations();
  }, []);

   useEffect(() => {
     const fetchPropertyTypes = async () => {
       const { data, error } = await supabase
         .from("distinct_property_type")
         .select()
       if (error) {
         console.log(error);
       }
       setPropertyTypes(data);
     };

     fetchPropertyTypes();
   }, []);

   useEffect(() => {
     const fetchPrices = async () => {
       const { data, error } = await supabase
         .from("distinct_prices")
         .select();
       if (error) {
         console.log(error);
       }
       setPrices(data);
     };

     fetchPrices();
   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProperties = properties.filter((property) => {

      const typeMatch = selectedPropertyType === "" || property.property_type === selectedPropertyType;
      const locationMatch = selectedLocation === "" || property.location === selectedLocation;
      const priceMatch = selectedPrice === "" || property.price <= parseInt(selectedPrice);

      return typeMatch && locationMatch && priceMatch;
    });

    setProperties(filteredProperties);
  };

  const handleReset = () => {
    setSelectedPropertyType(defaultSearchCriteria.selectedPropertyType);
    setSelectedLocation(defaultSearchCriteria.selectedLocation);
    setSelectedPrice(defaultSearchCriteria.selectedPrice);
    setProperties(properties)
  };


  return (
    <section className="w-full px-8 md:px-16 flex flex-col bg-[#F5F5F5] space-y-8 md:space-y-16 pt-12 md:pt-24 pb-12">
      <div className="flex flex-col space-y-4">
        {/* <div className="w-32 border-t-0 border-x-0 border-b-3 border-b-secondary"></div> */}
        <div className="flex justify-between items-center">
          <h2 className="text-black font-bold md:mb-12 text-xl md:text-3xl">
            Find your next place to live
          </h2>
          <button
            onClick={handleReset}
            className="bg-transparent border-2 border-secondary font-semibold border-none text-secondary underline"
          >
            View All
          </button>
        </div>
      </div>
      <form
        className="inputs bg-greyish md:w-11/12 flex space-x-1
        mb-12 items-center mt-16 shadow-md pr-1 w-full"
      >
        <select
          name="propertytype"
          value={selectedPropertyType}
          onChange={(e) => setSelectedPropertyType(e.target.value)}
          id="types"
          className="px-2 py-6 rounded-l-xl w-1/3 text-sm outline-none"
        >
          <option value="">Property Type</option>
          {propertyTypes &&
            propertyTypes.map((item, index) => (
              <option key={index} value={item.property_type}>
                {item.property_type}
              </option>
            ))}
        </select>

        <select
          name="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          id="location"
          className="px-2 py-6 w-1/3 text-sm outline-none"
        >
          <option value="">Location</option>

          {locations &&
            locations.map((item, index) => (
              <option key={index} value={item.location}>
                {item.location}
              </option>
            ))}
        </select>

        <select
          name="prices"
          id="price"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="px-2 py-6 rounded-r-xl w-1/3 text-sm outline-none"
        >
          <option value="">Price</option>
          {prices &&
            prices.map((item, index) => (
              <option key={index} value={item.price}>
                {item.price}
              </option>
            ))}
        </select>

        <button
          className="bg-secondary border-none p-x md:p-2 ml-3 w-12 h-12 rounded-[50%] flex justify-center items-center"
          onClick={handleSubmit}
        >
          <CiSearch className="text-white text-xl" />
        </button>
      </form>
      <div className="cards min-h-screen grid grid-cols-1 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 gap-4">
        {properties &&
          Array.from(properties).map((property) => (
            <div
              key={property.id}
              className="card bg-white w-full sm:w-52 md:w-72 aspect-square rounded-2xl flex flex-col space-y-4 group"
            >
              <div className="relative pb-2/3">
                <Link href={`property-details/${property.id}`}>
                  <Image
                    src={property.image_url}
                    width={100}
                    height={100}
                    alt="property-1"
                    className="w-full h-full absolute object-cover rounded-t-2xl group-hover:opacity-75
                    transition duration-200 cursor-pointer black-opacity"
                  />
                </Link>
              </div>

              <h3 className="text-lg md:text-xl font-bold pl-2 py-4 bg-white w-full">
                {property.title}
              </h3>
              <div className="flex space-x-[1px] bg-greyish pt-px items-center rounded-bl-2xl rounded-br-2xl">
                <div className="flex space-x-2 w-1/3 items-center justify-center py-2 bg-white rounded-bl-2xl">
                  <LuBedSingle />
                  <p className="font-bold">{property.bedrooms}</p>
                </div>

                <div className="flex space-x-2 w-1/3 items-center justify-center py-2 bg-white">
                  <GiBathtub />
                  <p className="font-bold">{property.bathrooms}</p>
                </div>

                <div className="flex space-x-2 w-1/3 items-center justify-center py-2 bg-white rounded-br-2xl">
                  <LuHash />
                  <p className="font-bold">2</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full bg-red600 mx-auto flex flex-col md:flex-row justify-between h-screen mt-20 pl-0 md:pl-16 items-center">
        <div className="left-section w-full md:w-1/2 flex flex-col space-y-4 pt-10 md:pt-20 order-2 md:order-1">
          <div className="w-32 border-t-0 border-x-0 border-b-2 border-b-secondary"></div>
          <h2 className="text-black font-semibold text-xl md:text-3xl">
            You&apos;re in good hands
          </h2>
          <p className="w-full sm:w-full md:w-7/12 text-black/80 text-sm">
            Our expert team of real estate agents is dedicated to providing
            exceptional service tailored to your needs. We&apos;ll guide you
            through the entire process, ensuring a seamless and stress-free
            experience from start to finish. That&apos;s why we offer
            personalized support, guiding you through the entire process, from
            property selection to closing the deal. Our goal is to make your
            real estate experience as smooth and stress-free as possible.
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
        <div
          className="right-section w-full  md:w-[40%] h-[600px] md:h-[400px] rounded-l-none rounded-tr-3xl rounded-br-none 
            shadow-lg shadow-black/20 bg-team-image bg-cover bg-center bg-no-repeat order-1 md:order-2 "
        ></div>
      </div>
    </section>
  );
};

export default PlacesToLive;
