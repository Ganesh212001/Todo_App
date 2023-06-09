import React from 'react'
import logo from '../images/logo_02.png'
import Bottoun from '../components/PrimaryBtn/index'

const Name = ({setName , name}) => {
  
  return (
    <div className='bg-blue-900 h-screen w-full'>
        <div className="flex justify-center">
            <img src={logo} alt="logo_img" className='h-20 w-20 my-16'/>
        </div>
        <div className="flex justify-center">
            <h1 className='text-2xl font-bold text-white'>Welcome To Todo App</h1>
        </div>
        <div className="flex mx-4">
            <input
              className="w-96 px-4 py-2 border rounded-lg mx-auto mt-20"
              type="text"
              placeholder='Enter Your Nick Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="flex justify-center my-20 border-spacing-2">
          <Bottoun/>
        </div>
    </div>
  )
};

export default Name;