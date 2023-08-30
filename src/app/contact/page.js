'use client'

import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import supabase from "../config/supabaseClient";

const Signup = () => {

  const notify = () => toast("Thank you for contacting Us")
  const errornotification = () => toast("Error submitting the form.Please try again")

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [contactData, setContactData] = useState(initialState)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const { name, email, message} = contactData

  const handleChange = (e) => {
    setContactData({...contactData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {

    e.preventDefault()
    try {
      const { data, error } = await supabase
        .from('contact')
        .insert([{ name, email, message }])
        .single();
      // setSuccess(true)
      notify()
      setContactData(initialState);
      if (error) {
        setError(true)
        errornotification()
        // return;
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="w-full min-h-screen bg-[#F5F5F5] py-32">
      <div>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #FFAC12',
              color: '#FFAC12',
              width: '40%'
            },
          }}
        />
      </div>
      {error && <div >
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid red',
              color: 'red',
              width: '40%'
            },
          }}
        />
      </div>}
      <div className='flex w-full md:w-[60%] mx-auto  mb-20 bg-white h-[600px] py-6 px-5 md:px-16 shadow-md space-x-8'>
        <div className='left-section hidden md:block w-[48%] bg-about-image bg-cover bg-center rounded-tr-[40px] rounded-bl-[40px]'></div>
        <div className='right-section w-full md:w-1/2 shadow md:shadow-none md:ml-2 ml-0 flex flex-col px-2 md:px-0'>
          <h2 className="font-semibold text-secondary text-3xl">
            Contact Us
          </h2>
          <form className='contact-form flex flex-col space-y-5 pt-12'>
            <div className='Full-name flex flex-col space-y-2'>
              <label htmlFor="name" className="text-secondary/90">Full Name</label>
              <input
                type="text"
                id='name'
                name="name"
                value={name}
                onChange={handleChange}
                className="p-3 border-x-none border-t-0 border-b-2 bg-white
                border-b-secondary focus:outline-none focus:shadow focus:shadow-secondary"
              />
            </div>

            <div className='email flex flex-col space-y-2'>
              <label htmlFor="email" className="text-secondary/90">Email</label>
              <input
                type="email"
                id='email'
                name="email"
                value={email}
                onChange={handleChange}
                className="p-3 border-x-none border-t-0 border-b-2 bg-white
               border-b-secondary focus:outline-none focus:shadow focus:shadow-secondary"
              />
            </div>

            <div className='Full-name flex flex-col space-y-2'>
              <label htmlFor="message" className="text-secondary/90">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                className="p-3 border-x-none border-t-0 border-b-2 bg-white
               border-b-secondary focus:outline-none focus:shadow focus:shadow-secondary"></textarea>
            </div>

            <button onClick={handleFormSubmit} className="bg-secondary mt-8 text-white px-6 py-4 rounded-sm hover:bg-white hover:border
              hover:border-secondary hover:text-secondary transition-all duration-200">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup