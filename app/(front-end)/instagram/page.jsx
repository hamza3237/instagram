import Profiles from "@/components/Home/Profiles";
import React from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Home/Sidebar";

// Dynamically import the InstagramReel component with no SSR
const InstagramReel = dynamic(() => import("@/components/InstagramReel"), {
  ssr: false,
});

const reelUrls = [
  "https://www.instagram.com/reel/C1vuA1yozSA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
 " https://www.instagram.com/p/C9wKwojNdNIrLSA7fKcRh-A9RcU_Ex7Hw_uriM0/?igsh=ZDdkY3R6dWliNmlt",
  " https://www.instagram.com/p/C6B49ZRt4cy64ls81_OKcO0DHnaiBWLL5T305s0/?igsh=MXNzZGxtZmw1bDhlYg==",
  " https://www.instagram.com/p/Cz9GAk8iguI/?igsh=MWV1eXA2b2Rleno0MQ==",
   "https://www.instagram.com/reel/Cx_Al9QKPid/?igsh=ajhmdWVrczZ5cTUx",
   "https://www.instagram.com/reel/C-W8x7SyrDA/?igsh=bDlhcnE1M240eDg3",
   "https://www.instagram.com/reel/C8YXu_Qoe_7/?igsh=anliOWg3MjEwYmZn",
   "https://www.instagram.com/reel/C8rUJ-esxP_/?igsh=ejdnbng4cXRmZ21l"
];

export default function page() {
  return (
   
      <div className="lg:grid lg:grid-cols-3  overflow-hidden ">
        <main className=" lg:col-span-2  px-4 sm:px-0 flex flex-col items-center  ">
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

        <sidebar className=" lg:col-span-1 "><Sidebar/> </sidebar>
      </div>
  
  );
}
