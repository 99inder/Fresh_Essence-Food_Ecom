import React, { useState } from 'react'
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";

const Header = () => {

    //firebase stuff
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //redux actrionCreators
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(actionCreators, dispatch);

    //get state from reducer
    const { user } = useSelector(state => state.setUserReducer);

    //local state using useState to open close menu
    const [isMenu, setIsMenu] = useState(false);

    //function to execute the login process
    const login = async () => {

        if (!user) {

            //getting refreshToken and providerData from google login
            const { user: { providerData } } = await signInWithPopup(firebaseAuth, provider);

            console.log(providerData[0]);
            //setting "user" state by passing providerData
            setUser(providerData[0]);

            //storing user data on local storage as to conserve data on reload 
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        }

        //Toggle dropdown
        else {
            setIsMenu(!isMenu);
        }

    }

    // Logout Function
    const logout = () => {
        localStorage.clear();
        setUser(null);
        setIsMenu(false);
    }

    return (
        <header className='w-screen fixed z-50 p-4 px-3 md:p-6 md:px-16 bg-primary'>


            {/* Desktop and Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-8 object-cover" />
                    <p className='text-headingColor text-xl font-bold'>Fresh Essence</p>
                </Link>
                <div className='flex items-center gap-12'>
                    <ul className="flex items-center gap-8">
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={"/"}>Home</Link></li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>

                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg  flex items-center justify-center">
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.8 }} src={user ? user.photoURL : Avatar} alt="userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login} />

                        {/* dropDown Menu */}
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12'>

                                    <ul className='py-2'>
                                        {
                                            user && user.email === "99.inderpal@gmail.com" && (

                                                <li className='mb-2 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg'><Link to={"/createItem"} className="flex items-center justify-between gap-2">New Item <MdAdd /></Link></li>

                                            )
                                        }

                                        <li className='flex items-center justify-between mt-2 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg' onClick={logout}>Logout <MdLogout className='text text-red-700' /></li>
                                    </ul>
                                </motion.div>
                            )
                        }

                    </div>
                </div>
            </div>




            {/* Mobile View*/}


            <div className='flex items-center justify-between md:hidden w-full h-full'>

                <div className='relative'>
                    <motion.img whileTap={{ scale: 0.8 }} src={user ? user.photoURL : Avatar} alt="userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login} />

                    {/* dropDown Menu */}
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute left-0 top-12'>

                                <ul className='flex flex-col gap-2 py-2'>
                                    {
                                        user && user.email === "99.inderpal@gmail.com" && (
                                            <>
                                                <li className='px-4 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg'><Link to={"/createItem"} className="flex items-center justify-between gap-2">New Item<MdAdd /></Link></li>
                                                <hr />
                                            </>

                                        )
                                    }
                                    <li className='px-4 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={"/"}>Home</Link></li>
                                    <li className='px-4 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                                    <li className='px-4 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                                    <li className='px-4 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                                    <hr />

                                    <li className='flex items-center justify-center gap-3 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base font-medium' onClick={logout}>Logout <MdLogout className='text text-red-700' /></li>
                                </ul>
                            </motion.div>
                        )
                    }

                </div>


                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-8 object-cover" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>


                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                    <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg  flex items-center justify-center">
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>



            </div>
        </header>
    )
}

export default Header