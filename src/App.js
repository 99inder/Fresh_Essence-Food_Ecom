import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Header, MainContainer, CreateContainer } from './components';

function App() {
    return (
        <AnimatePresence mode="wait">
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />
                <main className='w-full mt-16 px-4 py-6 md:mt-24 md:px-20 md:py-10 '>
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