import React from 'react'
import { Route, Routes } from 'react-router-dom'
import General from './forms/General'
import Buttons from './UI/Buttons'
import Icons from './UI/Icons'
import Modals from './UI/Modals'
import Navbar from './UI/Navbar'
import Ribbons from './UI/Ribbons'
import Sliders from './UI/Sliders'
import TimeLine from './UI/TimeLine'

function UIS() {
    return (
        <>
            <Routes>
                {/* <Route path={'pages/UI/buttons'} element={<Buttons />} /> */}
                <Route path={'pages/UI/general'} element={<General />} />
                <Route path={'pages/UI/icons'} element={<Icons />} />
                <Route path={'pages/UI/modals'} element={<Modals />} />
                <Route path={'pages/UI/navbar'} element={<Navbar />} />
                <Route path={'pages/UI/ribbons'} element={<Ribbons />} />
                <Route path={'pages/UI/sliders'} element={<Sliders />} />
                <Route path={'pages/UI/timeline'} element={<TimeLine />} />

            </Routes>
        </>)
}

export default UIS