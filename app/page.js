import Image from 'next/image';
import CardItem from './CardItem';
import { FiSearch } from "react-icons/fi";

import { constants } from './constants';

export default function Home() {
  return (
    <main className='flex flex-col w-full min-h-screen justify-center items-center pt-16'>
      <div className='flex flex-col w-[500px] md:w-[1000px]'>
        <div className='text-3xl text-primary font-bold'>
          Search Token
        </div>
        <div className='text-lg text-primary mb-2'>
          Trade any token by pasting an address
        </div>
        <div className="flex flex-row w-full bg-slate-100 rounded-full items-center mb-4">
            <input type='text' placeholder="0x0e4drf..." className="px-4 py-3 flex-grow bg-slate-100 rounded-full" />
            <button className='px-6 flex flex-row items-center gap-2'>
              <FiSearch className='text-primary-dark text-xl'/>
              <div className='text-lg text-primary font-medium'> Search </div>
            </button>
        </div>
        <div className='flex flex-row w-full flex-wrap'>
          {constants.addresses.map((item) => {
            return (
              <CardItem key={item.name} address={item}/>
            );
          })}
        </div>
      </div>
    </main>
  )
}
