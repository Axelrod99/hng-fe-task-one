import React from 'react'
import zuri_logo from '../../assets/icons/zuri_logo.svg'
import ingressive from '../../assets/icons/ingressive.svg'

export default function index() {
  return (
    <footer className='border-t-2 w-[95%] md:w-[75%] mx-auto p-3'>
        <div className='flex flex-col sm:flex-row justify-between items-start   gap-3'>

        <img src={zuri_logo} className='h-4' />

        <p className='text-sm text-slate-400'>HNG Internship 9 Frontend Task</p>

        <img src={ingressive} className='h-5' />
        </div>
    </footer>
  )
}
