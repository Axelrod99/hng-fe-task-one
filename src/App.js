
import './App.css';
import profile_picture from './assets/images/profile_picture.png'
import share from './assets/icons/share.png'
import slack from './assets/icons/slack.svg'
import github from './assets/icons/github.svg'
import ingressive from './assets/icons/ingressive.svg'
import zuri_logo from './assets/icons/zuri_logo.svg'


function App() {
  return (
    <div className="App p-10">
      <header>
        <div className='flex justify-center'>
        <img src={share} className='w-4 h-4 z-9 absolute right-20' />
          <div>
            <img src={profile_picture} className='' />
            <p className='my-5 font-bold'>Annette Black</p>
          </div>
        </div>
      </header>

      <section>
        <div className='w-full flex flex-col font-semibold'>

          <a className='bg-gray-200 p-5 my-2' href='#'>Twitter Link</a>

          <a className='bg-gray-200 p-5 my-2' href='#'>Zuri Team</a>

          <a className='bg-gray-200 p-5 my-2' href='#'>Zuri Books</a>

          <a className='bg-gray-200 p-5 my-2' href='#'>Python books</a>

          <a className='bg-gray-200 p-5 my-2' href='#'>Backgroung Check for Coders</a>

          <a className='bg-gray-200 p-5 my-2' href='#'>Design Books</a>
        </div>
        <div className='flex justify-center p-6 mb-11 gap-5'>
          <img src={slack} className='' />
          <img src={github} className='' />
        </div>
      </section>

      <footer className='border-t-2'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-3'>

          <img src={zuri_logo} className='h-4' />

          <p className='text-sm text-slate-400'>HNG Internship 9 Frontend Task</p>

          <img src={ingressive} className='h-5' />
        </div>
      </footer>
    </div>
  );
}

export default App;
