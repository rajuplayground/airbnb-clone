import {Search, Menu} from 'react-feather'
function App() {
  return (
    <header className="border-b-[1px] border-b-gray-200">
        <div className="px-20 py-4 max-w-[2520px] mx-auto flex items-center justify-between">
            <div><img src="/images/logo.png" className="w-[100px]" alt="" /></div>
            <div className="flex items-center border-[1px] border-gray-200 py-3 pl-6 pr-2 rounded-full">
                <div className='flex mr-2'>
                    <a className="after:content-['|'] after:text-gray-200 after:px-5" href="">Anywhere</a>
                    <a href="" className="after:content-['|'] after:text-gray-200 after:px-5">Any Week</a>
                    <a href="">Add Guests</a>
                </div>
                <div className='bg-red-500 rounded-full p-[10px]'>
                    <Search className='text-white w-[16px] h-[16px]' />
                </div>
            </div>
            <div className="flex items-center gap-6">
                <a href="">Airbnb your home</a>
                <div className='flex items-center gap-3 border-[1px] rounded-full px-2 py-1'>
                <Menu className='w-[16px] h-[16px]' />
                    <img className="w-[30px] rounded-full" src="/images/placeholder.jpg" alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default App
