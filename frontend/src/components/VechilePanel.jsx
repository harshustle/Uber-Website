import React from 'react'

const VechilePanel = (props) => {
  return (
    <div >
    <h5 onClick={()=>{
     props.setVechilePanel(false);
    }} className='p-1 w-full text-center absolute-0 top-0 text-3xl text-gray-500'> <i className="ri-arrow-down-wide-line"></i></h5>
       <h3 className='text-2xl font-semibold mb-5'>Choose a vechile</h3>
       {/* first Vechile */}
       <div className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between'>
         <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
         <div className='ml-2 w-1/2'>
           <h4 className='font-medium text-base'>Uber go <span><i className="ri-user-fill"></i>4</span></h4>
           <h5 className='font-medium text-sm'>2 mins away</h5>
           <p className='font-normal text-xs text-gray-600'>Affotable, compact , reliable</p>
         </div>
         <h2 className='text-xl font-semibold'>$192.40</h2>
       </div>
       {/* Second Vechile */}
       <div className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between'>
         <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
         <div className='ml-2 w-1/2'>
           <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
           <h5 className='font-medium text-sm'>4 mins away</h5>
           <p className='font-normal text-xs text-gray-600'>Affotable, reliable moto ride</p>
         </div>
         <h2 className='text-xl font-semibold'>$65.30</h2>
       </div>
       {/* Third Vechile */}
       <div className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between'>
         <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
         <div className='ml-2 w-1/2'>
           <h4 className='font-medium text-base'>Auto <span><i className="ri-user-fill"></i>3</span></h4>
           <h5 className='font-medium text-sm'>3 mins away</h5>
           <p className='font-normal text-xs text-gray-600'>Affotable, reliable auto ride</p>
         </div>
         <h2 className='text-xl font-semibold'>$120.30</h2>
       </div>
     </div>
  )
}

export default VechilePanel
