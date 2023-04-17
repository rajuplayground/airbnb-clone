import {MdMenu} from 'react-icons/md'
import {TbSearch} from 'react-icons/tb'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill
  } from 'react-icons/gi';
  import { FaSkiing } from 'react-icons/fa';
  import { BsSnow } from 'react-icons/bs';
  import { IoDiamond } from 'react-icons/io5';
  import { MdOutlineVilla } from 'react-icons/md';
function App() {

    const categories = [
        {
          label: 'Beach',
          icon: TbBeach,
          description: 'This property is close to the beach!',
        },
        {
          label: 'Windmills',
          icon: GiWindmill,
          description: 'This property is has windmills!',
        },
        {
          label: 'Modern',
          icon: MdOutlineVilla,
          description: 'This property is modern!'
        },
        {
          label: 'Countryside',
          icon: TbMountain,
          description: 'This property is in the countryside!'
        },
        {
          label: 'Pools',
          icon: TbPool,
          description: 'This is property has a beautiful pool!'
        },
        {
          label: 'Islands',
          icon: GiIsland,
          description: 'This property is on an island!'
        },
        {
          label: 'Lake',
          icon: GiBoatFishing,
          description: 'This property is near a lake!'
        },
        {
          label: 'Skiing',
          icon: FaSkiing,
          description: 'This property has skiing activies!'
        },
        {
          label: 'Castles',
          icon: GiCastle,
          description: 'This property is an ancient castle!'
        },
        {
          label: 'Caves',
          icon: GiCaveEntrance,
          description: 'This property is in a spooky cave!'
        },
        {
          label: 'Camping',
          icon: GiForestCamp,
          description: 'This property offers camping activities!'
        },
        {
          label: 'Arctic',
          icon: BsSnow,
          description: 'This property is in arctic environment!'
        },
        {
          label: 'Desert',
          icon: GiCactus,
          description: 'This property is in the desert!'
        },
        {
          label: 'Barns',
          icon: GiBarn,
          description: 'This property is in a barn!'
        },
        {
          label: 'Lux',
          icon: IoDiamond,
          description: 'This property is brand new and luxurious!'
        }
      ]
  return (
    <header>
        <div className="border-b-[1px] border-b-gray-200">
            <div className="px-20 py-4 max-w-[2520px] mx-auto flex items-center justify-between">
                <div><img src="/images/logo.png" className="w-[100px]" alt="" /></div>
                <div className="flex items-center border-[1px] border-gray-200 py-3 pl-6 pr-2 rounded-full">
                    <div className='flex mr-2'>
                        <a className="after:content-['|'] after:text-gray-200 after:px-5" href="">Anywhere</a>
                        <a href="" className="after:content-['|'] after:text-gray-200 after:px-5">Any Week</a>
                        <a href="">Add Guests</a>
                    </div>
                    <div className='bg-red-500 rounded-full p-[7px]'>
                        <TbSearch className='text-white w-[16px] h-[16px]' />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <a href="">Airbnb your home</a>
                    <a href="">
                        <div className='flex items-center gap-3 border-[1px] rounded-full px-2 py-1'>
                        <MdMenu className='w-[16px] h-[16px]' />
                            <img className="w-[30px] rounded-full" src="/images/placeholder.jpg" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="border-b-[1px] border-b-gray-100">
            <div className='px-20 py-8 max-w-[2520px]'>
                <ul className='flex flex-row items-center justify-between overflow-x-auto'>
                {categories.map(location => <li key={location.label}><a href="" className='flex flex-col items-center justify-center p-3 gap-2 text-neutral-500'><location.icon className='text-gray-800 w-[26px] h-[26px]'  /><span>{location.label}</span></a></li>)}
                </ul>
            </div>
        </div>
    </header>
  )
}

export default App
