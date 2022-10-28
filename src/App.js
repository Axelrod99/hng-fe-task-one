
import './App.css';
import profile_picture from './assets/images/profile_picture.png'
import share from './assets/icons/share.png'
import slack from './assets/icons/slack.svg'
import github from './assets/icons/github.svg'

function App() {
  return (
    <div className="App p-5">
      <header>
        <div className='flex justify-center'>
        <img src={share} className='w-4 h-4 z-9 absolute right-20' />
          <div>
            <img src={profile_picture} className='' />
            <p className='my-5 '>Annette Black</p>
          </div>
        </div>
      </header>

      <section>
        <div className='w-full'>
          <div className='py-2'>
            <button className='bg-blue-400 p-5 w-full'>Twitter Link</button>
          </div>
          <div className='py-2'>
            <button className='bg-blue-400 p-5 w-full'>Zuri Team</button>
          </div>
          <div className='py-2'>
            <button className='bg-blue-400 p-5 w-full'>Zuri Books</button>
          </div>
          <div className='py-2'>
            <button className='bg-blue-400 p-5 w-full'>Python books</button>
          </div>
          <div className='py-2'>
            <button className='bg-blue-400 p-5 w-full'>Background Checks for Coders</button>
          </div>  
          <div className='py-2'>
            <button className='bg-blue-400 p-5 w-full'>Design Books</button>
          </div>
        </div>
        <div className='flex justify-center p-6 gap-5'>
          <img src={slack} className='' />
          <img src={github} className='' />
        </div>
      </section>

      <footer>
        j fj
      </footer>
    </div>
  );
}

export default App;
