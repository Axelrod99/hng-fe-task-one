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
                    <input className='rounded-sm h-8' placeholder='Enter your first name'></input>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <p className='text-xs'>Last name</p>
                    <input className='rounded-sm h-8' placeholder='Enter your last name'></input>
                </div>
            </div>

            <div className='flex flex-col w-full gap-2 my-3'>
                <p className='text-xs'>Email</p>
                <input className='rounded-sm h-8' placeholder='yourname@email.com'></input>
            </div>

            <div className='flex flex-col w-full my-3'>
                <p>Message</p>
                <input className='' placeholder="send me a message and i'll reply you as soon as possible..."></input>
            </div>

            <div className='my-3'>
                <p>You agree to providing your .</p>
            </div>

            <div className='w-full'>
                <button className='w-full rounded-md bg-blue-400'>Send message</button>
            </div>
        
        </div>

        <Footer/>
    </section>
  )
}

export default contact
