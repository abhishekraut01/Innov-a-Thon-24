import React from 'react'

function Past() {
  return (
    <div className='h-[100vh] flex px-20  w-full '>
        <div className='relative w-1/2'>
            {/* <img src="public/images/winner.png" alt="" className='absolute w-[75%] pl-20 top-60 h-48 object-cover brightness-[50%] blur-[4px]'/> */}
            <div className='relative pl-16 py-2'>
                <h1 className='text-[5.5vw] tracking-tighter text-zinc-200 font-bold tracking-tight '>OUR <span className='text-[#0D7C66] text-[7.5vw] pl-4'>PAST</span></h1>
                <p className='mt-8 w-[80%] text-zinc-300 text-md font-[300] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in distinctio! Incidunt tempore nihil nostrum obcaecati temporibus sed tempora porro unde, aperiam suscipit. Eligendi repellat mollitia voluptates fugit dicta blanditiis tempore! Reiciendis, rem vel eveniet sunt natus porro.
                   Vero vel consequuntur eligendi sit quibusdam eum atque architecto repellendus tempora. Sequi ullam excepturi placeat sunt minus tempore voluptas reprehenderit incidunt, illum tempora dolores corrupti cumque quas! Fugit animi numquam autem? Fugiat perferendis iure, quia, natus aperiam animi saepe expedita quibusdam deserunt, similique tempora? Fuga architecto optio distinctio minima cum tempore similique consectetur officia harum eaque quo voluptate dolor.</p>
            </div>
        </div>
        <div className='w-1/2 relative mt-12'>
            <div className='flex flex-wrap justify-center '>
                <img src="public/images/team.png" alt="" className='w-[40%] h-[24vh] border-[1px]  border-[#0D7C66] absolute top-[34vh] left-12'/>
                <img src="public/images/team.png" alt="" className='w-[34%] h-[21vh] border-[1px]  border-[#0D7C66] absolute top-16 right-24 '/>
                <img src="public/images/team.png" alt="" className='w-[38%] h-[24vh] border-[1px]  border-[#0D7C66] absolute  top-60 right-4'/>
                <img src="public/images/team.png" alt="" className='w-[34%] h-auto border-[1px]  border-[#0D7C66] absolute top-12 left-8'/>
            </div>
        </div>
    </div>
  )
}

export default Past