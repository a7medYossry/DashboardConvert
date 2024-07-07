import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { setNavBarColor } from '../redux/actions/bodyActions'
import NotificationDropDown from '../UI/NotificationDropDown'
import MessaegDropDown from '../UI/MessaegDropDown'
import PushMenu from '../UI/PushMenu'
import ControlSidebarHandle from '../UI/ControlSidebarHandle'
import NavbarSearchComponent from '../UI/NavbarSearchComponent'
import FullScreenButton from './FullScreenButton'
// import Sortable from 'react-jquery-sortable'
// import Widget from 'widget'

const NavigationBar = () => {

    const dropdownLegacy = useSelector(state => state.bodyState.dropdownLegacy)
    const borderBottom0 = useSelector(state => state.bodyState.borderBottom0)
    const location = useLocation().pathname
    const dispatch = useDispatch()
    useEffect(() => {
        if (location === '/index2') {
            dispatch(setNavBarColor('navbar-dark'))

        }
        else {
            dispatch(setNavBarColor('navbar-white navbar-light bg-white'))
        }

    }, [location])

    const textSmNavBar = useSelector(state => state.bodyState.textSmNavBar)
    const navBarColor = useSelector(state => state.bodyState.navBarColor)


    return (
        <>
            <nav className={`main-header navbar navbar-expand ${navBarColor} ${textSmNavBar} ${dropdownLegacy}`}>
                {/* <!-- Left navbar links --> */}
                <ul className="navbar-nav">
                    <PushMenu />
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/index3" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to='#' className="nav-link">Contact</Link>
                    </li>
                </ul>
                {/* <!-- Right navbar links --> */}
                <ul className="navbar-nav ml-auto">
                    {/* <!-- Navbar Search --> */}
                    <NavbarSearchComponent />
                    {/* <!-- Messages Dropdown Menu --> */}
                    <MessaegDropDown />
                    {/* <!-- Notifications Dropdown Menu --> */}
                    <NotificationDropDown />

                    <FullScreenButton />

                    <ControlSidebarHandle />
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar