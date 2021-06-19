import { MicrophoneIcon } from "@heroicons/react/outline";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../header/Avatar";
import HeaderSearchOptions from "./HeaderSearchOptions";


const HeaderSearch = () => {
      const router = useRouter();
      const searchInputRef = useRef(null);

      const googleSearch = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
  
        if (term) {
          router.push(`/search?term=${term}`);
        }else{
          return;
        }
      }

    return (
        <header className='sticky top-0 bg-white' >
          <div className='flex w-full p-6 items-center' >

          <Image 
              src='https://www.ptm.ro/wp-content/uploads/2014/08/google-logo.png'
              height={40}
              width={120}
              onClick={() => router.push('/')}
              className='cursor-pointer'
            />
            <form className='flex flex-grow border border-gray-200 rounded-full 
               shadow-lg max-w-3xl items-center px-6 py-3 ml-10 
               mr-5 ' >
                <input
               
                 ref={searchInputRef}
                 className='flex-grow w-full focus:outline-none '
                />
                <XIcon
                 onClick={() => searchInputRef.current.value=''}
                 className='h-7 text-gray-500 cursor-pointer
                transition duration-100 transform hover:scale-125 
                sm:mr-3 ' /> 
                <MicrophoneIcon 
                  className='h-6 mr-3 hidden sm:inline-flex text-blue-500 
                  border-l-2 pl-4 border-gray-300 '
                />
                <SearchIcon 
                className='h-6 text-blue-500 hidden sm:inline-flex'
                />
                <button
                 onClick={googleSearch }
                 hidden
                 type='submit' >Search</button>
            </form>
            <Avatar
            url='https://lh3.googleusercontent.com/ogw/ADea4I6d9IDU5eNtRgaF9Zsp4GAYZN0499hQMvMqhxxZ=s32-c-mo'
             className='ml-auto'      
            />
          </div>
           <HeaderSearchOptions/> 
         
        </header>
    )
}

export default HeaderSearch;
