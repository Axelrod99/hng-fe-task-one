import React from 'react'
// import share from './assets/icons/share.png'
import Footer from './Footer/index'

const contact = () => {
  return (
    <section className='flex flex-col justify-between'>
        <div className='w-[90%] md:w-[70%] flex flex-col font-semibold items-center mx-auto p-2 m-auto'>
            <div className='flex flex-col w-full py-3'>
                <p className='font-semibold text-xl'>Contact Me</p>
                <p className='font-normal text-sm text-[#475467]'>Hi there, contact me to ask me anything uou have in mind. </p>
            </div>

            <div className='sm:flex w-full gap-4 my-3'>
                <div className='flex flex-col w-full gap-2'>
                    <p className='text-xs'>First name</p>
                    <input className='border-2 rounded-sm h-8' placeholder='Enter your first name'></input>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <p className='text-xs'>Last name</p>
                    <input className='border-2 rounded-sm h-8' placeholder='Enter your last name'></input>
                </div>
            </div>

            <div className='flex flex-col w-full gap-2 my-3'>
                <p className='text-xs'>Email</p>
                <input className='border-2 rounded-sm h-8' placeholder='yourname@email.com'></input>
            </div>

            <div className='flex flex-col w-full my-3'>
                <p>Message</p>
                <textarea className='border-2' placeholder="send me a message and i'll reply you as soon as possible..."></textarea>
            </div>

            <div className='my-3 flex gap-3 self-start'>
                <div className='border-2 h-5 w-5'></div>
                <p className=''>You agree to providing your data to  who may contact you. .</p>
            </div>

            <div className='w-full'>
                <button className='w-full rounded-md bg-blue-400 h-8 text-white'>Send message</button>
            </div>
        
        </div>

        <Footer/>
    </section>
  )
}

export default contact
