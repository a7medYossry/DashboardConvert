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

const Examples = 
    [
        { path: 'blank', element: <Blank /> },
        { path: 'legacy-user-menu', element: <LegacyUserMenu /> },
        { path: 'contacts', element: < Contacts />},
        { path: 'contactUs', element: <ContactUs />},
        { path: 'eCommerce', element: <ECommerce />},
        { path: '404', element: <Error404 />},
        { path: '500', element: <Error500 />},
        { path: 'faq', element: <Faq />},
        { path: 'invoice', element: <Invoice />},
        { path: 'invoicePrint', element: <InvoicePrint />},
        { path: 'language-menu', element: <LanguageMenu />},
        { path: 'lockscreen', element: <LockScreen />},
        { path: 'pace', element: <Pace />},
        { path: 'profile', element: <Profile />},
        { path: 'project-add', element: <ProjectAdd />},
        { path: 'project-detail', element: <ProjectDetail />},
        { path: 'project-edit', element: <ProjectEdit />},
        { path: 'projects', element: <Projects />},
    ]

export default Examples