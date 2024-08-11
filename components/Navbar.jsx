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
import React from "react";
import explore from "../public/explore.png";
import reels from "../public/instagram-reels-icon.png";
import messenger from "../public/messenger.png";
import profile from "../public/profile.jpg";
import logo from "../public/instagram.png";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className=" border px-8   h-screen  flex flex-col justify-around">
      <Link href="/instagram" className="pb-[-2] ">
        <Instagram className="lg:hidden" /> 
        <Image src={logo} alt="logo" className="hidden lg:flex pr-8 w-[130px] " />
        
      </Link>

      <div className=" flex flex-col gap-7  justify-between">
        <Link href="/instagram" className="flex flex-row gap-4">
          <House />
          <p className="hidden lg:flex">Home</p>
        </Link>

        <Link href="/instagram/search" className="flex flex-row gap-4">
          <Search />
          <p className="hidden lg:flex">Search</p>
        </Link>

        <Link href="/instagram/explore" className="flex flex-row gap-4">
          <MdOutlineExplore className="h-7 w-7" />
          <p className="hidden lg:flex">Explore</p>
        </Link>

        <Link href="/instagram/reels" className="flex flex-row gap-4">
          <Image height={23} width={23} className="ml-[3px]" alt="reels" src={reels} />
          <p className="hidden lg:flex"> Reels</p>
        </Link>

        <Link href="/instagram/messages" className="flex flex-row gap-4">
          <RiMessengerLine className="h-7 w-7" />
          <p className="hidden lg:flex">Messages</p>
        </Link>

        <Link href="/instagram/notification" className="flex flex-row gap-4">
          <Heart />
          <p className="hidden lg:flex"> Notifications</p>
        </Link>

        <Link href="/instagram/create" className="flex flex-row gap-4">
          <SquarePlus />
          <p className="hidden lg:flex"> Create</p>
        </Link>
        <Link href="/instagram/profile" className="flex flex-row gap-4">
          <Image
            className="border border-black rounded-full "
            height={25}
            width={25}
            src={profile}
            alt="profile"
          />
          <p className="hidden lg:flex"> Profile</p>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <Menu />
        <Link href="" className="hidden lg:flex">
          menu
        </Link>
      </div>
    </div>
  );
}
