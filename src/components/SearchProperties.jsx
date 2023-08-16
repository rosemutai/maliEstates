"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import supabase from "@src/app/config/supabaseClient";


const SearchProperties = () => {

  const [query, setQuery] = useState('')
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    const searchProperties = async () => {
      const { data, error } = await supabase.from('property').select('location')
      console.log("Location", data)
      if (error) {
        console.log(error);
      }
      setLocations(data)
    }

    searchProperties()
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredProperties = properties.filter((property) => {
      return selectedLocation === "" || property.location === selectedLocation
    })

    setProperties(filteredProperties)
  }
  return (
    <div>SearchProperties</div>
  )
}

export default SearchProperties