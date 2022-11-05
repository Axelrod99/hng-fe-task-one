import React, { useState } from 'react'
// import share from './assets/icons/share.png'
import Footer from './Footer/index'
import { ReactComponent as Tick } from '../assets/icons/tick.svg'

// class contact extends Component {



const Contact = () => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(true);

    function btnchange(event) {
        setChecked(event.target.checked);


        setDisabled(event.target.checked ? false : true)


    }

    return (
        <form className='flex flex-col justify-between'>
            <div className='w-[85%] md:w-[70%] flex flex-col font-semibold items-center mx-auto p-2 m-auto'>
                <div className='flex flex-col w-full py-3'>
                    <p className='font-semibold text-xl'>Contact Me</p>
                    <p className='font-normal text-sm text-[#475467]'>Hi there, contact me to ask me anything uou have in mind. </p>
                </div>

                <div className='sm:flex w-full gap-4 my-3'>
                    <div className='flex flex-col w-full gap-2'>
                        <p className='text-xs'>First name</p>
                        <input className='border-2 px-[14px] py-[10px] rounded-md h-8 text-sm font-thin' placeholder='Enter your first name'></input>
                    </div>

                    <div className='flex flex-col w-full gap-2'>
                        <p className='text-xs'>Last name</p>
                        <input className='border-2 rounded-md h-8 px-[14px] py-[10px] text-sm font-thin' placeholder='Enter your last name'></input>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2 my-3'>
                    <p className='text-xs'>Email</p>
                    <input className='border-2 rounded-md h-8 text-sm font-thin px-[14px] py-[10px]' placeholder='yourname@email.com'></input>
                </div>

                <div className='flex flex-col w-full my-3'>
                    <p>Message</p>
                    <textarea className='border-2 text-sm rounded-md px-[14px] py-[10px]' placeholder="send me a message and i'll reply you as soon as possible..."></textarea>
                </div>


                <div class="flex justify-center self-start my-4 w-full">
                    <div className='flex w-full'>
                        <div class="form-check flex">
                            <div className='relative '>
                                <input class={`form-check-input appearance-none h-4 w-4 border ${checked ? "border-[#7B61FF]" : "border-gray-300"} rounded-sm bg-white focus:outline-none focus:border-[#84CAFF] focus:shadow-[0px 0px 0px 4px #D1E9FF] transition duration-200 mt-1 mr-2 cursor-pointer`}
                                    type="checkbox"
                                    id="sendNewSms"
                                    name='sendNewSms'
                                    onChange={btnchange}
                                />
                                {checked && <Tick className='absolute bottom-2 pl-1' />}
                            </div>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                You agree to providing your data to thee who may contact you.
                            </label>
                        </div>
                    </div>
                </div>



                <div className='w-full'>
                    <button disabled={disabled} className='w-full rounded-md bg-[#1570EF] h-8 text-white' type='submit' id='btn'>Send message</button>
                </div>


            </div>

            <Footer />
        </form>
    )
}

export default Contact
