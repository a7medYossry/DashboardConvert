import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blank from './examples/Blank'
import Contacts from './examples/Contacts'
import ContactUs from './examples/ContactUs'
import ECommerce from './examples/ECommerce'
import Error404 from './examples/Error404'
import Error500 from './examples/Error500'
import Faq from './examples/Faq'
import Invoice from './examples/Invoice'
import InvoicePrint from './examples/InvoicePrint'
import LanguageMenu from './examples/LanguageMenu'
import LegacyUserMenu from './examples/LegacyUserMenu'
import LockScreen from './examples/LockScreen'
import Pace from './examples/Pace'
import Profile from './examples/Profile'
import ProjectAdd from './examples/ProjectAdd'
import ProjectDetail from './examples/ProjectDetail'
import ProjectEdit from './examples/ProjectEdit'
import Projects from './examples/Projects'

function Examples() {
    return (
        <>
        <Routes>
            <Route path={'pages/examples/blank'} element={<Blank />} />
            <Route path={'pages/examples/contacts'} element={<Contacts />} />
            <Route path={'pages/examples/contacts'} element={<Contacts />} />
            <Route path={'pages/examples/contactUs'} element={<ContactUs />} />
            <Route path={'pages/examples/eCommerce'} element={<ECommerce />} />
            <Route path={'pages/examples/404'} element={<Error404 />} />
            <Route path={'pages/examples/500'} element={<Error500 />} />
            <Route path={'pages/examples/faq'} element={<Faq />} />
            <Route path={'pages/examples/invoice'} element={<Invoice/>} />
            <Route path={'pages/examples/invoicePrint'} element={<InvoicePrint/>} />
            <Route path={'pages/examples/language-menu'} element={<LanguageMenu/>} />
            <Route path={'pages/examples/legacy-user-menu'} element={<LegacyUserMenu/>} />
            <Route path={'pages/examples/lockscreen'} element={<LockScreen/>} />
            <Route path={'pages/examples/pace'} element={<Pace/>} />
            <Route path={'pages/examples/profile'} element={<Profile/>} />
            <Route path={'pages/examples/project-add'} element={<ProjectAdd/>} />
            <Route path={'pages/examples/project-detail'} element={<ProjectDetail/>} />
            <Route path={'pages/examples/project-edit'} element={<ProjectEdit/>} />
            <Route path={'pages/examples/projects'} element={<Projects/>} />
            </Routes>
        </>
    )
}

export default Examples