import React, {Component} from 'react'
// import share from './assets/icons/share.png'
import Footer from './Footer/index'

// class contact extends Component {



const contact = () => {
    function btnchange(event) {
        var btn = document.getElementById('btn');
        var chk = document.getElementById('sendNewSms')
        if (chk.checked == true) {
            btn.disabled = false;
        } else {
            btn.disabled = true
        }

    }

  return (
    <section className='flex flex-col justify-between'>
        <div className='w-[85%] md:w-[70%] flex flex-col font-semibold items-center mx-auto p-2 m-auto'>
            <div className='flex flex-col w-full py-3'>
                <p className='font-semibold text-xl'>Contact Me</p>
                <p className='font-normal text-sm text-[#475467]'>Hi there, contact me to ask me anything uou have in mind. </p>
            </div>

            <div className='sm:flex w-full gap-4 my-3'>
                <div className='flex flex-col w-full gap-2'>
                    <p className='text-xs'>First name</p>
                    <input className='border-2 rounded-md h-8 text-sm font-thin' placeholder='Enter your first name'></input>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <p className='text-xs'>Last name</p>
                    <input className='border-2 rounded-md h-8 text-sm font-thin' placeholder='Enter your last name'></input>
                </div>
            </div>

            <div className='flex flex-col w-full gap-2 my-3'>
                <p className='text-xs'>Email</p>
                <input className='border-2 rounded-md h-8 text-sm font-thin' placeholder='yourname@email.com'></input>
            </div>

            <div className='flex flex-col w-full my-3'>
                <p>Message</p>
                <textarea className='border-2 text-sm rounded-md' placeholder="send me a message and i'll reply you as soon as possible..."></textarea>
            </div>

            
            <div class="flex justify-center self-start my-4 w-full">
                <div className='flex w-full'>
                    <div class="form-check flex">
                        <div className=''>
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="Send" id="sendNewSms" name='sendNewSms' onChange={btnchange}/>
                        </div>
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            You agree to providing your data to thee who may contact you.
                        </label>
                    </div>

                </div>
            </div>

            <div className='w-full'>
                <button disabled className='w-full rounded-md bg-[#1570EF] h-8 text-white' id='btn'>Send message</button>
            </div>
            
        
        </div>

        <Footer/>
    </section>
  )
}

export default contact
