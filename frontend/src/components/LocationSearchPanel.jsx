import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)
    // location search
    const locations = [
        "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
        "221B Baker Street, London NW1 6XE, UK",
        "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634, Japan",
        "5 Avenue Anatole France, 75007 Paris, France",
        "Sydney Opera House, Bennelong Point, Sydney NSW 2000, Australia"
      ];
      
      
  return (
    <div>
      {/*  this is just a random and temporary Location */}
      {
        locations.map((elem,idx) =>{
            return (
              <div key={idx} onClick={()=>{
                props.setVechilePanel(true)
                props.setPanelOpen(false)
              }} className='flex gap-4 border-2 p-2 rounded-xl  items-center mx-2 border-gray-100 active:border-black justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-2-fill "></i></h2>
                <h4 className='font-medium'>{elem}</h4>
              </div>
            )
        })
      }

    </div>
  )
}

export default LocationSearchPanel
