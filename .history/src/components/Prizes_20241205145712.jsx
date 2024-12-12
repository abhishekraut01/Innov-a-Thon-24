import React from 'react'

function Prizes() {
  return (
    <div className='h-[100vh] mt-[27vw] flex text-white items-center flex-col w-full'>
        <h1 className='text-[8vw] text-zinc-400 text-center pr-2 tracking-tighter font-semibold'>Exciting <span className='text-[#0D7C66]'>Prizes</span></h1>
          <div className='relative text-[4vh] mt-16 font-bold text-[#0D7C66]'>
            <h3 className='absolute text-[6vh] top-[56vh] left-[18vw]'>₹ 25,000</h3>
            <h3 className='absolute top-[54.5vh] left-[5.8vw]'>₹ 15,000</h3>
            <h3 className='absolute top-[54vh] right-[6.5vw]'>₹ 10,000</h3>
            <img className=' w-[50vw]' src="public/images/rb_1580.png" alt="" /> 
          </div>
    </div>
  )
}

export default Prizes