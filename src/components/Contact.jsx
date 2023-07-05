import React from 'react'
import{
FaPhone,
FaTimes,
FaWhatsapp,
FaLinkedin,
FaFacebook,
FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
   <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  items-center  ' >
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 justify-center '>Contact Me</p>
              <p className='py-4'>Let's get to work</p>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-12 text-center py-8 justify-center '>
              <div className='shadow-md shadow-[#040c16]  pb-4  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:rounded-lg '>
              <a
              className='flex  w-full text-gray-300 justify-center'
              href='tel:09017169102'
            >
             <FaPhone size={30} className='mr-3 mt-4'  /><p className='my-4  font-bold mr-10' > Call Me Today</p>
             </a>
                <a href='tel:09017169102'> <p className='my-4  font-bold  ' >09017169102</p></a>  
                 
              </div>
              <div className='shadow-md shadow-[#040c16] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hover:rounded-lg ...'>
              <a
              className='flex justify-center w-full text-gray-300'
              href='mailto:kadirid9@gmail.com'
            >
              <HiOutlineMail  size={50} className=' mt-3 mr-10' /> <p className='my-4  font-bold mr-16'>My email</p>
            </a>
            <a href='mailto:kadirid9@gmail.com'> <p className='my-3  font-bold  ml-6  ' >kadirid9@gmail.com</p></a>  
              </div>
              <div className='shadow-md shadow-[#040c16] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hover:rounded-lg ...'>
               
              <a
              className='flex  items-center w-full text-gray-300 justify-center'
              href='/'
            >
              <FaWhatsapp size={40} className=' mt-3' />
            </a>
            <a href='/'> <p className='my-4  font-bold  ml-6  ' >Just a text away</p></a>  
              </div>
             
             
          </div>
      </div>
    </div>
  )
}

export default Contact
