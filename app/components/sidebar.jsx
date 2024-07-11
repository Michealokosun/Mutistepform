import React from "react";
import { useSelector } from "react-redux";

export default function Sidebar({}) {
  const currentform = useSelector((state) => state.stepform.currentform);
  return (
    <div className="col nav border pb-40 md:pb-0  p-7 md:rounded-2xl  w-full md:w-4/12">
      <ul className="flex flex-row flex-wrap md:flex-col justify-center md:justify-start gap-10">
        <li className="flex items-start   gap-2">
          <div
            className={` ${
              currentform == 0
                ? "bg-white"
                : "bg-none border-2 border-white text-white"
            } text-xs rounded-full py-2 px-3`}
          >
            1
          </div>
          <div className=" uppercase hidden md:block">
            <p className="text-gray-300 text-xs ">step 1</p>
            <span className="text-white  text-sm uppercase">your info</span>
          </div>
        </li>
        <li className="flex items-start  gap-2">
          <div
            className={` ${
              currentform == 1
                ? "bg-white"
                : "bg-none border-2 border-white text-white"
            } text-xs rounded-full py-2 px-3`}
          >
            2
          </div>
          <div className=" uppercase hidden md:block">
            <p className="text-gray-300 text-xs ">step 2</p>
            <span className="text-white text-sm uppercase">select plan</span>
          </div>
        </li>
        <li className="flex items-start  gap-2">
          <div
            className={` ${
              currentform == 2
                ? "bg-white"
                : "bg-none border-2 border-white text-white"
            } text-xs rounded-full py-2 px-3`}
          >
            3
          </div>
          <div className=" uppercase hidden md:block">
            <p className="text-gray-300 text-xs ">step 3</p>
            <span className="text-white text-sm uppercase">add-ons</span>
          </div>
        </li>
        <li className="flex items-start  gap-2">
          <div
            className={` ${
              currentform == 3
                ? "bg-white"
                : "bg-none border-2 border-white text-white"
            } text-xs rounded-full py-2 px-3`}
          >
            4
          </div>
          <div className=" uppercase hidden md:block">
            <p className="text-gray-300 text-xs ">step 4</p>
            <span className="text-white text-sm uppercase">summary</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
