import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from './plus/Gallery'
import Calender from './plus/Calender'
import Widgets from './plus/Widgets'
import Kanban from './plus/Kanban'

function Plus() {
    return (
        <>
            <Routes>
                <Route path={'pages/calendar'} element={<Calender />} />
                <Route path={'pages/gallery'} element={<Gallery />} />
                <Route path={'pages/kanban'} element={<Kanban />} />
                <Route path={'pages/widgets'} element={<Widgets />} />
            </Routes>
        </>
        )
}

export default Plus