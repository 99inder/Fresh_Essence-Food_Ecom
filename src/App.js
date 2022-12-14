import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { getAllFoodItems } from './utils/firebaseFunctions';

import { Header, MainContainer, CreateContainer } from './components';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';


function App() {

    const dispatch = useDispatch();
    const {getFoodItems} = bindActionCreators(actionCreators, dispatch);

    const fetchFoodItems = async () => {
        await getAllFoodItems().then(data => {
            getFoodItems(data);
        });
    }

    useEffect(() => {

        fetchFoodItems();

    }, [])


    return (
        <AnimatePresence mode="wait">
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />
                <main className='w-full mt-16 px-4 py-6 md:px-20 md:mt-24 md:py-10'>
                    <Routes>
                        <Route path="/*" element={<MainContainer />} />
                        <Route path="/createItem" element={<CreateContainer />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    )
}

export default App