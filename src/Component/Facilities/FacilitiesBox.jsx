import React from "react";

export default function FacilitiesBox({ allData }) {
  return (
    <>
      <div class="h-[18em] w-[25em]  border-none bg-slate-100  shadow-md  mr-7 mb-12 ">
        <div class="flex justify-center relative top-5">
          <img src={allData.logo} alt="not visible" className="align-middle" />
        </div>
        <h2 className="text-center relative top-7 text-[20px] text-blue-900 font-bold">
          {allData.heading}
        </h2>
        <p className="text-center px-4 tracking-wide text-[16px] relative top-20 text-black font-semibold ">
          {allData.para}
        </p>
      </div>
    </>
  );
}
