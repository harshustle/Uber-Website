import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen bg-[url(https://images.unsplash.com/photo-1610187966294-0d2491a3cb1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)]">
      <img className="w-16 ml-8 pt-10" src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" />
      <div className="absolute bottom-0 left-0 w-full bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl mb-1 font-bold py-3 pb-5">Get Started with Uber</h2>
        <Link to='/login' className="flex items-center justify-center w-full text-center bg-black text-white py-3 rounded">
          Continue
        </Link>
      </div>
    </div>

  )
}

export default Home
