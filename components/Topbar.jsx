import { Heart, Instagram, } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { RiMessengerLine } from 'react-icons/ri'
import logo from "../public/instagram.png";
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className='flex flex-row justify-between px-7 bg-white'>
       <Link href="/instagram" className="pb-[-2] ">
       <Image src={logo} className="  pr-8 w-[190px]  " />
        
      </Link>
      <div className='flex flex-row gap-4 justify-center items-center'>
      <Link href="/instagram/notification" className="flex flex-row gap-4">
          <Heart className='h-9 w-9'/>
         
        </Link>
        <Link href="/instagram/messages" className="flex flex-row gap-4">
          <RiMessengerLine className="h-10 w-10" />
        
        </Link>
      </div>
    </div>
  )
}
