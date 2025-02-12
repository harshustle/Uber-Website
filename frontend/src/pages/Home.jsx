import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VechilePanel from '../components/VechilePanel'

const Home = () => {
  // useState
  const [destination, setDestination] = useState('')
  const [pickup, setPickup] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vechilePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vechilePanel, setVechilePanel] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  // GSAP animation
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '60%',
        duration: 0.5,
        ease: 'power3.inOut',
        opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power3.inOut'
      })
    } else {
      gsap.to(panelRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        // opacity: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',

      })
    }
  }, [panelOpen])

  //  GSAP animation
  useGSAP(() => {
    if (vechilePanel) {
      gsap.to(vechilePanelRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(vechilePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vechilePanel])



  return (
    <div className="bg-cover bg-center h-screen overflow-hidden">
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div  className='h-screen w-screen overflow-auto'>
        {/* image for temporary use  */}
        <img className='h-full w-full' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        {/* 1 */}
        <div className='h-[40%] p-5 bg-white '>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form action="" className='relative py-3' onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
              type="text"
              placeholder="Where to?" />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
              type="text"
              placeholder="When?" />
          </form>
          <button
            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
            Find Trip
          </button>
        </div>

        <div ref={panelRef} className='h-0 bg-white '>
          <LocationSearchPanel  setPanelOpen={setPanelOpen} setVechilePanel={setVechilePanel} />
        </div>

        <div ref={vechilePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-8'>
              <VechilePanel setVechilePanel={setVechilePanel}/>
        </div>
      </div>
    </div>

  )
}

export default Home
