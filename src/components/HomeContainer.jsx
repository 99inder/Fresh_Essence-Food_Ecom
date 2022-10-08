import React from 'react';
import Bike from "../img/delivery.png";
import heroBg from "../img/heroBg.png"
import { heroData } from '../utils/heroData';

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

                <img className='ml-auto w-full lg:w-auto h-[540px] md:h-420 lg:h-full' src={heroBg} alt="heroBg" />

                <div className='w-full h-full absolute md:pt-14 top-0 left-0 flex items-center justify-center py-4 lg:px-32 gap-3 md:gap-8 flex-wrap'>

                    {
                        heroData && heroData.map(element => (
                            <div key={element.id} className="mt-[50px] md:mt-0 lg:w-190 lg:h-225 w-[154px] h-[170px] p-2 bg-cardOverlay backdrop-blur-md flex flex-col items-center rounded-2xl drop-shadow-lg">
                                <img src={element.image} className=" h-24 lg:h-40 -mt-16" alt="icecream" />
                                <p className='text-base lg:text-xl font-semibold text-textColor mt-4 text-center'>{element.name}</p>
                                <p className='text-[12px] lg:text-sm font-semibold text-lighttextGray mt-2 mb-4 text-center'>{element.desc}</p>
                                <p className='text-[12px] lg:text-sm font-bold text-headingColor'>
                                    <span className="text-xs text-red-600">₹ </span><span className="">{element.price}/-</span>
                                </p>
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default HomeContainer;