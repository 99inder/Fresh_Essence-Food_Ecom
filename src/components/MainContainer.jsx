import React from 'react'
import Bike from "../img/delivery.png"

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

      <div className='py-2 flex flex-col flex-1 gap-2 items-start justify-center md:items-center'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-orange-400 font-semibold'>Home Delivery</p>

          <div className='w-10 h-10 bg-white rounded-full overflow-hidden'>
            <img src={Bike} className="w-full h-full object-contain" alt="Bike" />
          </div>
        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in <span className='text-orange-500 text-[3rem]'>Your City</span>
        </p>

        <p className="text-base text-textColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reprehenderit asperiores! Odio molestiae minus id velit. Sunt rem architecto vitae delectus accusamus cum eius totam quam tenetur et incidunt tempore ex in saepe ration?</p>

      </div>

      <div className='flex-1 bg-blue-500'>Container2</div>
      <div className='flex-1 bg-blue-500'>Container3</div>
      <div className='flex-1 bg-blue-500'>Container4</div>
    </div>
  )
}

export default MainContainer