import {  SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRef } from 'react';
import {useRouter} from 'next/router'

const Body = () => {
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
        <form className='flex flex-col items-center mt-24 flex-grow w-4/5 ' >
           <Image
             src='https://www.ptm.ro/wp-content/uploads/2014/08/google-logo.png'
             height={100}
             width={300}
           /> 
          <div
           className='flex w-full mt-5 hover:shadow-lg
           focus-within:shadow-lg max-w-md rounded-full border border-gray-200
            px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl' >

              <SearchIcon className='h-5 mr-3 text-gray-500 '/>
              <input 
              ref={searchInputRef}
              className='focus:outline-none flex-grow'/>
              <MicrophoneIcon className='h-5 ' />
          </div>

          <div
           className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ' >
              <button
               onClick={googleSearch}
               className='btn'
               >Google Search</button>
              <button
               onClick={googleSearch}
               className='btn'>I'm Feeling Lucky</button>
          </div>
        </form>
    )
}

export default Body;
