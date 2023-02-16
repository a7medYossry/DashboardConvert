import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Advanced from './forms/Advanced'
import Editors from './forms/Editors'
import General from './forms/General'
import Validation from './forms/Validation'

function Forms() {
    return (
        <>
        <Routes>
        <Route path={'pages/forms/advanced'} element={<Advanced/>} />
        <Route path={'pages/forms/editors'} element={<Editors/>} />
        <Route path={'pages/forms/general'} element={<General/>} />
        <Route path={'pages/forms/validation'} element={<Validation/>} />
        </Routes>
        </>
    )
}

export default Forms