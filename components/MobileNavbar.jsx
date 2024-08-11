import React from "react";
import {
  Heart,
  House,
  Instagram,
  Menu,
  Search,
  SquarePlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import reels from "../public/instagram-reels-icon.png";
import profile from "../public/profile.jpg";

export default function MobileNavbar() {
  return (
   
      <div className=" flex flex-row items-center bg-white py-4 justify-around">
        <Link href="/instagram" className="flex flex-row gap-4">
          <House className='h-9 w-9'/>
        </Link>

        <Link href="/instagram/search" className="flex flex-row gap-4">
          <Search className='h-9 w-9'/>
        </Link>

        <Link href="/instagram/create" className="flex flex-row gap-4">
          <SquarePlus className='h-9 w-9'/>
          <p className="hidden lg:flex"> Create</p>
        </Link>

        <Link href="/instagram/reels" className="flex flex-row gap-4">
          <Image height={34} width={34} className="ml-[3px]" alt="reels" src={reels} />
        </Link>

        <Link href="/instagram/profile" className="flex flex-row gap-4">
          <Image
            className="border border-black rounded-full "
            alt="profile"
            height={38}
            width={38}
            src={profile}
          />
        </Link>
      </div>
   
  );
}
