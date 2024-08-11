import Profiles from "@/components/Home/Profiles";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the InstagramReel component with no SSR
const InstagramReel = dynamic(() => import("@/components/InstagramReel"), {
  ssr: false,
});

const reelUrls = [
  "https://www.instagram.com/p/CDEFGH12345/",
  "https://www.instagram.com/p/HIJKLM67890/",
  "https://www.instagram.com/p/OPQRST13579/",
];

export default function page() {
  return (
   
      <div className="lg:grid lg:grid-cols-3  overflow-hidden ">
        <main className=" lg:col-span-2 border-2 px-4 sm:px-0 flex flex-col items-center  ">
          <div className="sm:w-[630px]   w-full ">
            <Profiles /> 
          </div>
          <div className=" w-full sm:w-[500px]">
            {" "}
            {reelUrls.map((url, index) => (
              <InstagramReel key={index} url={url} />
            ))}
          </div>
        </main>

        <sidebar className=" lg:col-span-1 ">side </sidebar>
      </div>
  
  );
}
