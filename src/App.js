import { Link } from 'react-router-dom'
import './App.css';
import profile_picture from './assets/images/profile_picture.png'
import share from './assets/icons/share.png'
import slack from './assets/icons/slack.svg'
import github from './assets/icons/github.svg'
import ingressive from './assets/icons/ingressive.svg'
import zuri_logo from './assets/icons/zuri_logo.svg'
import share_button from './assets/icons/share_button.svg'



function App() {
  return (
    <div className="App p-10">
      <header>
          <div className='flex justify-center'>
          <div className=''>
            <img src={share} className='w-4 h-4 z-9 absolute right-20'/>
          </div>
          <div className='sm:hidden'>
            <img src={share_button} className='w-4 h-4 z-9 absolute right-20'/>
          </div>

            <div className=''>
              <img src={profile_picture} className='' id='profile_img' />
              <p className='my-5 font-bold' id='twitter'>_fineneighbour</p>
            </div>

            <div className='hidden' id='slack'>
              <p>Jibola79</p>
            </div>
          </div>
      </header>

      <section className=''>
        <div className='w-[95%] md:w-[75%] flex flex-col font-semibold items-center mx-auto'>

          <a className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' href='https://twitter.com/_fineneighbour?t=lxz_U6iSbbzL9DS2ELrvrA&s=09' >Twitter Link</a>

          <a className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' id='btn_zuri' href='https:training.zuri.team/'>Zuri Team</a>

          <a className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' id='books' href='http://books.zuri.team'>Zuri Books</a>

          <a className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' id='books_python' href='https://books.zuri.team/python-for-beginners?ref_id=<jibola>,'>Python books</a>

          <a className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' id='pitch' href='https://background.zuri.team'>Backgroung Check for Coders</a>

          <a className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' id='book_design' href='https://books.zuri.team/design-rules'>Design Books</a>

          <Link to='/contact' className='bg-gray-200 p-4 my-2 w-full hover:bg-[#D0D5DD] transition-colors duration-300 ease-in-out rounded' id='contact'>contact</Link>

        </div>
        <div className='flex justify-center p-6 mb-11 gap-5'>
          <img src={slack} className='' />
          <img src={github} className='' />
        </div>
      </section>

      <footer className='border-t-2'>
        <div className='flex flex-col sm:flex-row justify-between items-start  mt-5 gap-3'>

          <img src={zuri_logo} className='h-4' />

          <p className='text-sm text-slate-400'>HNG Internship 9 Frontend Task</p>

          <img src={ingressive} className='h-5' />
        </div>
      </footer>
    </div>
  );
}

export default App;
