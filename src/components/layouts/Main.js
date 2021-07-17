import Header from './Header'
import Navbar from './Navbar'

const Main = ({ children }) => {
  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-col w-screen'>
        <Header />
        <div className='flex flex-col items-center gap-2 overflow-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Main
