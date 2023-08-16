"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LuBedSingle, LuHash } from "react-icons/lu";
import { GiBathtub } from "react-icons/gi";
import { AiOutlineCalendar, AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineGarage } from 'react-icons/md'
import Navbar from '@src/components/Navbar';
import PageFooter from '@src/components/PageFooter';
import supabase from '@src/app/config/supabaseClient';



const PageDetails = ({ params }) => {

  const [property, setProperty] = useState('')
  const [propertyImages, setPropertyImages] = useState([])
  const [agent, setAgent] = useState('')

  useEffect(() => {
    const fetchPropertyDetails = async (id) => {
      const { data, error } = await supabase
        .from('property')
        .select('*')
        .eq('id', params.id)
        .single()
        

      if (error) {
        console.log("Error fetching that property")
      }
      setProperty(data) 

      const { data: propertyAgentData, error: agentError} = await supabase
        .from('property_agent')
        .select('agent_id')
        .eq('property_id', params.id)
        .single()

      if (agentError) {
        console.error('Error fetching agent:', agentError);
        return;
      }

      const agentId = propertyAgentData.agent_id;

      const { data: agentData, error: agentFetchError } = await supabase
        .from('agent')
        .select('*')
        .eq('id', agentId)
        .single();

      if (agentFetchError) {
        console.error('Error fetching agent:', agentFetchError);
        return;
      }

      setAgent(agentData)
    }

    fetchPropertyDetails()

  }, [params.id]);

  // fetch property images
  useEffect(() => {
    const fetchPropertyImages = async (id) => {
      const { data, error } = await supabase
        .from('propertyimage')
        .select('*')
        .eq('property_id', params.id)
      console.log("Property Images", data)

      if (error) {
        console.log("Error fetching propertyimages")
      }

      setPropertyImages(data)
    }

    fetchPropertyImages()

  }, [params.id])

  return (
    <section className="w-full min-h-screen bg-[#F5F5F5] flex flex-col space-y-8">
      <div className="top-banner w-full flex flex-col bg-black py-5">
        <Navbar />
        <div className="flex flex-col space-y-3 px-8 md:px-16 ">
          <hr className="border-x-0 border-t-0 border-b border-b-greyish/20" />
          <div className="row-one flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <h2 className="text-white flex font-semibold text-xl md:text-2xl">
                {property.title}</h2>
              <p className='text-greyish text-sm'>{property.location}</p>
            </div>

            <div className='flex flex-col space-y-2'>
              <h2 className="text-white flex font-semibold text-xl md:text-2xl">
                ${property.price}
              </h2>
              <p className='text-greyish text-sm'>{property.property_area} Sq/ft</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row pr-4 pb-8 md:pb-0 md:pr-12'>
        <div className='flex flex-col px-8 md:px-16 space-y-6 w-full md:w-3/4'>
          <div className='image-section'>
            <div
              className="top-section w-full md:w-9/12 md:h-[500px] rounded-l-none rounded-tr-4xl rounded-br-none 
            shadow-lg shadow-black/20  bg-cover bg-center bg-no-repeat bg md:mb-32"
            >
              <Image
                src={property.featured_image}
                alt={property.title}
                width={400}
                height={400}
                className="w-full object-fill rounded-tr-2xl"
              />
            </div>
          </div>
          <div className="property-images flex flex-wrap space-x-3 w-full md:w-9/12 mt-12">
            {propertyImages.map((image) => (
              <Image
                key={image.id}
                src={image.image_url}
                alt="property"
                width={100}
                height={100}
                className="w-[20%] md:w-[13%] object-fill aspect-square rounded-tr-2xl"
              />
            ))}

          </div>

          <div className="details flex flex-col bg-white w-full md:w-9/12 rounded-2xl">
            <h2 className="text-black bg-white font-semibold text-xl md:text-2xl py-2 md:py-6 pl-3 rounded-t-2xl">
              Details
            </h2>
            <div className="flex space-x-[1px] bg-greyish pt-px items-center rounded-bl-2xl rounded-br-2xl ">
              <div className="flex space-x-2 w-1/3 items-center justify-center py-6 bg-white rounded-bl-2xl">
                <LuBedSingle />
                <p className="font-bold">{property.bedrooms}</p>
              </div>

              <div className="flex space-x-2 w-1/3 items-center justify-center py-6 bg-white">
                <GiBathtub />
                <p className="font-bold">{property.bathrooms}</p>
              </div>

              <div className="flex space-x-2 w-1/3 items-center justify-center py-6 bg-white ">
                <LuHash />
                <p className="font-bold">2</p>
              </div>

              <div className="flex space-x-2 w-1/3 items-center justify-center py-6 bg-white">
                <MdOutlineGarage />
                <p className="font-bold">{property.garage}</p>
              </div>

              <div className="flex space-x-2 w-1/3 items-center justify-center py-6 bg-white rounded-br-2xl">
                <AiOutlineCalendar />
                <p className="font-bold">{new Date(property.built_date).getFullYear()}</p>
              </div>
            </div>

          </div>

          <div className="details flex flex-col p2 bg-greyish w-full md:w-9/12 rounded-2xl">
            <h2 className="text-black font-semibold bg-white text-xl md:text-2xl py-2 md:py-6 px-3 rounded-t-2xl">
              Description
            </h2>
            <div className=" bg-greyish flex flex-col pt-px items-center rounded-bl-2xl rounded-br-2xl ">
              <p className='text-black/80 px-3 py-4 text-sm bg-white rounded-bl-2xl rounded-br-2xl'>
                {property.description}
              </p>
            </div>

          </div>

          <div className="details flex flex-col bg-greyish w-full md:w-9/12 rounded-2xl">
            <h2 className="text-black font-semibold bg-white text-xl md:text-2xl py-2 md:py-6 px-8 
              rounded-tl-2xl rounded-tr-2xl ">
              Features
            </h2>
            <ul className=" bg-white space-y-4 p-8 mt-px rounded-bl-2xl rounded-br-2xl grid grid-cols-2 ">
              {property && property.Amenities.map((amenity, index) => (
                <li key={index} className='text-black/90 flex space-x-3 text-sm md:text-base'>
                  <AiOutlineCheck className='bg-secondary text-white w-6 h-6 p-2 mr-2 rounded-full' />
                  {amenity}
                </li>
              ))}
            </ul>

          </div>
        </div>
        <div className='right-section w-11/12 ml-8 md:ml-0 rounded-md md:rounded-none md:w-1/4
         bg-white h-[60%] pb-12 mt-8 md:mt-0'>
          <h2 className="text-secondary pl-5 font-semibold text-xl md:text-2xl py-6 rounded-t-2xl">
            Contact Agent
          </h2>
          <div className='details flex flex-col space-y-6 py-4 pl-2 ml-3 w-11/12 borer shadow-md '>
            <p className=''><span className="font-bold text-lg mr-2">Agency:</span>{agent.agency}</p>
            <p className=''><span className="font-bold text-lg mr-2">Name:</span> {agent.name}</p>
            <p className='t'><span className="font-bold text-lg mr-2">Email:</span>{agent.email}</p>
            <p className='t'><span className="font-bold text-lg mr-2">Phone:</span> {agent.phone}</p>
          </div>
        </div>
      </div>
      <PageFooter />

    </section>
  )
}

export default PageDetails