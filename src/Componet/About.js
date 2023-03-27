import React from "react"

export default function About() {
  return (
    <>
    <div className=" h-screen">
    <h2 className="text-center sm:text-4xl md:text-4xl text-2xl pt-10">About</h2>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden  rounded text-slate-500 shadow-slate-200 sm:flex-row p-20 ">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src="https://www.zdnet.com/a/img/resize/6e1df27ee9c36f9c6dc0c7182ce4437a35541d5a/2023/02/22/3f0b444b-eb28-4825-9925-9c24ea8afdfd/sonyonearfinished.jpg?auto=webp&width=1280"
            alt="card image"
            className=" w-[1000px] rounded-2xl"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:p-2 md:p-2  sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4 pl-2 space-y-6">
           
            
            <div>
              <h3 className=" font-medium text-black sm:text-5xl md:text-5xl text-xl">
              Upgrade Your Life <br></br> 
              <span className="pt-2">with the Best<strong className=" text-blue-600  font-normal"> iGADGET</strong></span> 
              </h3>
              
            
            </div>
          </header>
          <p className="sm:pl-3 md:pl-3  sm:w-full md:w-full ">
          With the more than 8 years of experience in this field, our iGADGET online shop provides 100% original products of every demanding brands.<br></br><br></br>
          Gadgets are electronic devices that are designed to perform specific functions or tasks. They come in various sizes and shapes, from smartphones and tablets to wearable technology like smartwatches and fitness trackers.
          </p>
        </div>
      </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  )
}
