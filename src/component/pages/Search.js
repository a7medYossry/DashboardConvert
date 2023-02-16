import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Enhanced from './search/Enhanced'
import EnhancedResults from './search/EnhancedResults'
import Simple from './search/Simple'
import SimpleResults from './search/SimpleResults'

function Search() {
    return (
        <>
            <Routes>
                <Route path={'pages/search/enhanced'} element={<Enhanced />} />
                <Route path={'pages/search/enhanced-result'} element={<EnhancedResults />} />
                <Route path={'pages/search/simple'} element={<Simple />} />
                <Route path={'pages/search/simple-result'} element={<SimpleResults />} />

            </Routes>
        </>
    )
}

export default Search