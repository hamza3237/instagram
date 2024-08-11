import Image from "next/image";
import React from "react";
import img1 from "../../public/profile16.jpg";
import img2 from "../../public/profile15.jpg";
import img3 from "../../public/profile14.jpg";
import img4 from "../../public/profile13.jpg";
import img5 from "../../public/profile12.jpg";
import img6 from "../../public/profile11.jpg";
import img7 from "../../public/profile7.jpg";

export default function Sidebar() {
  const Data = [
    {
      img: img1,
      title: "profile 1",
      subtitle: "New to instagram",
    },
    {
      img: img2,
      title: "profile 2",
      subtitle: "New to instagram",
    },
    {
      img: img3,
      title: "profile 3",
      subtitle: "New to instagram",
    },
    {
      img: img4,
      title: "profile 4",
      subtitle: "New to instagram",
    },
    {
      img: img5,
      title: "profile 5",
      subtitle: "New to instagram",
    },
    {
      img: img6,
      title: "profile 6",
      subtitle: "New to instagram",
    },
  ];
  return (
    <div className="hidden md:block">
       <div
           
           
            className=" flex flex-row items-center justify-between pr-16 pb-6 pt-10"
          >
            <div className="flex flex-row gap-4">

            <Image alt="img" src={img7} className="h-[45px] w-[45px] rounded-full" />
            <div className="flex flex-col">
              <h4 className="text-sm text-black">hamza9831ali</h4>
              <h5 className="text-xs text-slate-400">__Good____boy___</h5>
            </div>
            </div>
            <button className="text-blue-400">follow</button>
          </div>
      <h3 className="text-slate-400 font-semibold text-sm">Suggested for you</h3>
      <div>
        {Data.map((item, index) => (
          <div
            key={index}
            className=" flex flex-row items-center justify-between pr-16 pt-4"
          >
            <div className="flex flex-row gap-4">

            <Image alt="img" src={item.img} className="h-[45px] w-[45px] rounded-full" />
            <div className="flex flex-col">
              <h4 className="text-sm text-black">{item.title}</h4>
              <h5 className="text-xs text-slate-400">{item.subtitle}</h5>
            </div>
            </div>
            <button className="text-blue-400">follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}
