import React from 'react';
import Bike from "../img/delivery.png";
import heroBg from "../img/heroBg.png"
import i1 from "../img/i1.png"

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full' id='home'>

            <div className='py-2 px-6 flex flex-col flex-1 gap-4 items-start justify-center'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-orange-400 font-semibold'>Home Delivery</p>

                    <div className='w-10 h-10 bg-white rounded-full overflow-hidden'>
                        <img src={Bike} className="w-full h-full object-contain" alt="Bike" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[5rem] font-bold tracking-wide text-headingColor'>
                    The Fastest Delivery in <span className='text-orange-500 text-[3rem] lg:text-[5.5rem]'>Your City</span>
                </p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reprehenderit asperiores! Odio molestiae minus id velit. Sunt rem architecto vitae delectus accusamus cum eius totam quam tenetur et incidunt tempore ex in saepe ration?</p>

                <button type='button' className='w-full h-10 md:w-auto px-4 md:text-xl rounded-xl hover:border-orange-700 border-[1px] my-8 bg-gradient-to-b from-orange-300 to-orange-500 hover:shadow-xl transition-all duration-300'>Order Now</button>

            </div>

            <div className='flex-1 flex items-center relative'>

                <img className='ml-auto h-420 w-full lg:w-auto lg:h-650' src={heroBg} alt="heroBg" />

                <div className='w-full h-full absolute flex items-center justify-center'>

                    <div className="w-190 p-2 bg-cardOverlay backdrop-blur-md flex flex-col items-center rounded-2xl">
                        <img src={i1} className="w-40 -mt-16" alt="icecream" />
                        <p className='text-xl font-semibold text-textColor mt-4'>Ice-cream</p>
                        <p className='text-sm font-semibold text-lighttextGray mt-2 mb-4'>Choco-Strawberry</p>
                        <p className=' text-sm font-bold text-headingColor'>
                            <span className="text-xs text-red-600">₹ </span><span className="">249/-</span>
                        </p>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default HomeContainer;