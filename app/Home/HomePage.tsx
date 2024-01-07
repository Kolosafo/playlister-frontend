"use client";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center  bg-[#ffffff]">
      <form className=" mx-auto my-6  lg:min-w-[600px] max-md:w-[80%]">
        <div className="flex items-center  border-b-2 border-[#93dc99] py-2">
          <input
            type="text"
            className="mr-3 w-full  appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
            placeholder="Enter Youtube URL"
          />
          <button className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none max-md:px-2 max-md:text-sm">
            Clear
          </button>
          <button
            type="submit"
            className="focus:shadow-outline ml-4 rounded bg-[#93dc99] px-4 py-2 font-bold text-TXT hover:bg-ACT focus:outline-none max-md:px-2 max-md:text-sm"
          >
            Search
          </button>
        </div>
      </form>

      <>
        <div className="flex min-h-[500px] min-w-[800px] flex-col items-center justify-center border bg-white max-lg:min-w-[650px] max-md:min-h-[250px] max-md:min-w-[350px]">
          <h2 className="mx-4 mt-4 text-2xl font-semibold max-md:text-sm"></h2>
        </div>
        {/* Input this code after creating a state that fetches data from the api, if there is no url searched, this code should show, else it should show the thumbnail  */}
        {/* <div className="  flex min-h-[250px] min-w-[800px] items-center justify-center border bg-white max-lg:min-w-[650px] max-md:min-h-[150px] max-md:min-w-[350px]">
          <span className="text-xl font-semibold">No image available</span>
        </div> */}
      </>

      <div className="  mt-6 flex w-[450px] justify-center   max-md:w-full max-md:justify-around">
        <div className="flex flex-col ">
          <button
          
            className="focus:shadow-outline max-h-[40px] rounded bg-[#93dc99] px-4 py-2 font-bold text-TXT hover:bg-ACT max-md:max-h-[40px] max-md:w-[150px] max-md:px-2
          max-md:text-sm "
          >
            <a> Download Playlist</a>
          </button>
        </div>
      </div>
    </div>
  );
}
