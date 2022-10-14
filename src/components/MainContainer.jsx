import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { HomeContainer, RowContainer } from './index'
import { motion } from 'framer-motion'

const MainContainer = () => {

  const items = useSelector(state => state.getFoodItemsReducer);

  // BELOW FUNCTION IS TO BE DELETED
  const print = () => {
    console.log(items.foodItems[0].id);
  }

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HomeContainer />

      <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-r from-orange-300 to-orange-500">Fresh from Farm Fruits</p>


          <div className='hidden md:flex items-center gap-3'>
            <motion.div whileTap={{ scale: 0.8 }} className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out cursor-pointer hover:shadow-lg">
              <FaChevronLeft className='text-base text-white' />
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out cursor-pointer hover:shadow-lg">
              <FaChevronRight className='text-base text-white' />
            </motion.div>
          </div>
        </div>

        <br />

        <RowContainer />


        {/* BELOW 2 LINE IS TO BE DELETED */}
        <br />
        <button onClick={print}>Log Items</button>
      </section>

    </div>
  )
}

export default MainContainer