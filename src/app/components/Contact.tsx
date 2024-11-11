import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up">Contact Our Team:</h2>
            <p className='text-[18px] pt-2' data-aos="zoom-in-up">Send our team a message by submitting the form.</p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                 <CiMail size={30} /> abc@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                 <CiPhone size={30} /> (021) 123 456
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">E-mail</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea  
                className='bg-transparent border border-accent'
                id='msg' rows={8}>
                </textarea >
            </div>
            <button className='bg-accent p-2 px-6 text-white' data-aos="zoom-in-up">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact