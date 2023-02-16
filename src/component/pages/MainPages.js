import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Iframe from './mainpages/Iframe'
import IframeDark from './mainpages/IframeDark'
import Index from './mainpages/Index'
import Index2 from './mainpages/Index2'
import Index3 from './mainpages/Index3'

function MainPages() {
  return (
    <>
      <Routes>
        <Route path={'iframe'} element={<Iframe />} />
        <Route path={'iframeDark'} element={<IframeDark />} />
        <Route path={'index'} element={<Index />} />
        <Route path={'index2'} element={<Index2 />} />
        <Route path={'index3'} element={<Index3 />} />
        <Route path={'/'} element={<Index3 />} />
      </Routes>
    </>)
}

export default MainPages