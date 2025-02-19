import React from "react";
import Image from "next/image";
import Header from "../components/header";
 export default function Home(){
  return(
    <div className="h-screen">
      <Header />
        <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
        <h1 className="text-[40px] font-bold font-[libre-bodoni]">IMPECCABLE</h1>
        <h1 className="text-[40px] font-bold font-[libre-bodoni]">CRAFTMANSHIP AND</h1>
        <h1 className="text-[40px] font-bold font-[libre-bodoni]">FINESSE</h1>
        <div>
        <p className="text-[22px] w-[571px] font-[libre-bodoni] background: rgba(120, 112, 84, 1); "> An example of intricate workmanship and detail of elegant necklaces and lond and short chains form a part of our desirable collection.</p></div>
        <div className="p-2 rounded-md background: rgba(162, 152, 117, 1);">
        <button className="py-2 px-10 font-bold text-slate-50 rounded font-[libre-bodoni] weight-[500]">Explore Now</button>
      </div>
        </div>
        <div className="w-1/2 flex justifty-items-center">
        <Image 
        src={"/Figma.jpeg.jpg"}
        alt="hero image"
        width={300}
        height={400}/>
        </div>
      </div>
    </div>
  )
}
