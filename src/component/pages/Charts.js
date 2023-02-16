import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chartjs from './charts/Chartjs'
import Flot from './charts/Flot'
import Inline from './charts/Inline'
import Uplot from './charts/Uplot'

function Charts() {
    return (
        <>
        <Routes>
            <Route path={'pages/charts/chartjs'} element={<Chartjs />} />
            <Route path={'pages/charts/flot'} element={<Flot />} />
            <Route path={'pages/charts/inline'} element={<Inline />} />
            <Route path={'pages/charts/uplot'} element={<Uplot />} />
        </Routes>
        </>
    )
}

export default Charts