import Avatar from "./Avatar";
import { ViewGridIcon} from '@heroicons/react/solid';




const Header = () => {
    return (
        <header className='flex w-full p-5 justify-between text-sm text-gray-700' >
                 {/* Left */}
            <div className='flex space-x-4 items-center ' >
               
                <p  className='link' >About</p>
                <p className='link'>Store</p>

            </div>

               {/* Right */}
            <div className='flex space-x-4 items-center' >
                
                <p className='link'>Gmail</p>
                <p className='link'>Images</p>


                {/* Icon */}
                 <ViewGridIcon className='h-10 p-2 w-10 
                 rounded-full hover:bg-gray-200 cursor-pointer' />

                <Avatar 
                  url='https://lh3.googleusercontent.com/ogw/ADea4I6d9IDU5eNtRgaF9Zsp4GAYZN0499hQMvMqhxxZ=s32-c-mo'

                />
            </div>
        </header>
    )
}

export default Header;
